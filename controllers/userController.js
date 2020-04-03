const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

let usuarioJson = path.join('usuarios.json');



let userController = {
    registroForm: (req, res) => {
        res.render('registroUsuario');
    },
    salvarForm: (req, res) => {
        let {nome, email, senha} = req.body;
        let senhaC = bcrypt.hashSync(senha, 10);
        let usuario = JSON.stringify({nome, email, senha: senhaC});
        fs.writeFileSync(usuarioJson, usuario);
        res.send("Usuário salvo com sucesso!");
    },
    loginForm: (req, res) => {
        res.render('login');
    },
    logarUsuario: (req, res) => {
        let {email,senha} = req.body;
        let usuarioSalvo = fs.readFileSync(usuarioJson, {encoding: 'utf-8'});
        usuarioSalvo = JSON.parse(usuarioSalvo);
        if(email != usuarioSalvo.email){
            return res.send('usuario inválido!');
        }
        if(!bcrypt.compareSync(senha, usuarioSalvo.senha)){
            return res.send("senha inválida!");
        }
        res.redirect('/produtos');
    }
}

module.exports = userController;