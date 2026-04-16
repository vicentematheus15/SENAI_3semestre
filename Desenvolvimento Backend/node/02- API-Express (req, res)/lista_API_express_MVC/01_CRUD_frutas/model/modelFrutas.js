import {frutas} from './exemploDB.js';

export function listarFrutasDB(){
    return frutas
}

export function mostrarFrutaDB(id){
    const frutaAlvo = frutas.find(fruta => fruta.id == id);
    if(!frutaAlvo){
        return null
    }
    return frutaAlvo
}