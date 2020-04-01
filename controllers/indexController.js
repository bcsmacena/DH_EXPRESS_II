let indexController = {
    viewContato: (req,res) => {
        let {nome,idade} = req.query;
    // res.send(`Olá ${nome}! Parabéns pelos seus ${idade} anos!`);
        res.render('contato', {nomeUsuario:nome, idadeUsuario:idade});    
    },
    atualizaDados: (req, res) => {
        let {nome, email} = req.query;
        res.send(`Cadastro de ${nome} atualizado com sucesso! Um email de confirmacao foi enviado para ${email}`)
    }
}

module.exports = indexController;