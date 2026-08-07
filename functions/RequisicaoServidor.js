import axios from 'axios';

// Função para cadastrar um novo produto no servidor
function CatalogarProduto(produto) {
    return axios({
        method: 'POST',
        url: 'http://localhost:4000/catalogar',
        data: {
            codigo: produto.codigo,
            marca: produto.marca,
            modelo: produto.modelo,
            preco: produto.preco,
            descricao: produto.descricao,
            imagens: produto.imagens,
            promocao: produto.promocao
        }
    })}

// Função para obter a lista de produtos do servidor via GET

function ObterProdutos() {
    return axios({
        method: 'GET',
        url: 'http://localhost:4000/produtos'
    })
}

// Função para obter os detalhes de um produto específico do servidor via GET
function ObterProduto(codigo) {
    return axios({
        method: 'GET',
        url: `http://localhost:4000/produto/${codigo}`
    })
}

//Função para buscar produtos em promoção do servidor via GET
function ObterPromocao() {
    return axios({
        method: 'GET',
        url: 'http://localhost:4000/promocao'
    })
}

export { CatalogarProduto, ObterProdutos, ObterProduto, ObterPromocao };