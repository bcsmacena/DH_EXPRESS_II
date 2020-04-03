const fs = require('fs');
const path = require('path');

const bdJson = path.join('produtos.json');

let produtoController = {
    viewForm: (req, res) => {
        return res.render('produto');
    },
    salvarForm: (req, res) => {
        let {nomeProduto, precoProduto} = req.body;
        let produto = {
            nome: nomeProduto,
            preco: precoProduto
        }
        let produtos = fs.readFileSync(bdJson, {encoding: 'utf-8'});
       produtos = JSON.parse(produtos);
       produtos.push(produto);

       fs.writeFileSync(bdJson, JSON.stringify(produtos));

       //res.redirect('/produtos/sucesso?produto=' + nomeProduto + '&preco=' + precoProduto);
       res.redirect('/produtos')
    },
    sucesso: (req,res) => {
        let {produto,preco} = req.query
        res.render('sucesso', {produto, preco});
    },
    viewEditForm: (req,res) => {
        let {id} = req.params;
        let produtos = [
            {id:1, nome:"produto a", preco: 10},
            {id:2, nome:"produto b", preco: 20} 
        ]
        res.render('editarProduto', {produto: produtos[id]});
    },
    editar: (req,res) => {
        let {nomeProduto, precoProduto} = req.body;
        res.send("Você editou o produto " + nomeProduto);
    },
    listarProdutos: (req,res) => {
        // let produtos = [
        //     {id:1, nome:"produto a", preco: 10},
        //     {id:2, nome:"produto b", preco: 20} 
        // ]

        let arquivoJson = fs.readFileSync(bdJson, {encoding: 'utf-8'});
        let produtos = JSON.parse(arquivoJson);

        // console.log(produtos);
       
        res.render('produto', {listaProdutos: produtos});
    },
    deletarProduto: (req, res) => {
        let {id} = req.params;

        let produtos = fs.readFileSync(bdJson, {encoding: 'utf-8'});
        produtos = JSON.parse(produtos);

        produtos.splice(id,1);

        produtos = JSON.stringify(produtos);

        fs.writeFileSync(bdJson, produtos);

        res.redirect('/produtos');
    }
}

module.exports = produtoController;