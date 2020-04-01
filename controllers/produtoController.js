let produtoController = {
    viewForm: (req, res) => {
        return res.render('produto');
    },
    salvarForm: (req, res) => {
        var {nomeProduto, precoProduto} = req.body;
        //res.send(`O produto ${nomeProduto} foi criado com sucesso`);
        res.redirect('/produtos/sucesso?produto=' + nomeProduto + '&preco=' + precoProduto);
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
        let produtos = [
            {id:1, nome:"produto a", preco: 10},
            {id:2, nome:"produto b", preco: 20} 
        ]
        res.render('listaProdutos', {listaProdutos: produtos});
    },
    deletarProduto: (req, res) => {
        let {id} = req.params;
        res.send("Estou deletando o produto com o id: " + id);
    }
}

module.exports = produtoController;