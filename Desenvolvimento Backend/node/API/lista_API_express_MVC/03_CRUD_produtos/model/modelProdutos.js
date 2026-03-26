import {produtos} from './exemploDB.js';

export function listarProdutosDB(){
//faria um SELECT * no banco para pegar os produtos
    const listaProdutos = produtos
    return listaProdutos
}



export function mostrarProduto(id){
    const produto = produtos.find(produto =>(produto.id == id))
    
    if(!id){
        return null
    }
    
    return produto
}