// Crie um script que receba como argumento de linha de comando (process.argv) o caminho de uma pasta e uma extensão a filtrar (ex.: node filtro.js ./src .js). O script deve listar todos os arquivos da pasta que possuem aquela extensão, exibindo nome, tamanho em KB e data de última modificação. Use path.extname() para o filtro e fs.stat() para obter os metadados de cada arquivo.

import {readdir, stat} from 'fs/promises';
import path from 'path';


async function filtro() {
    const pasta = process.argv[2];
    const extensaoAlvo = process.argv[3];  
    console.log(`Arquivos ${extensaoAlvo} em ${pasta}:`)
    
    const listaArquivos = await readdir('./arquivos')
    for(const arquivo of listaArquivos){
        if(extensaoAlvo === path.extname(arquivo)){
            const caminhoArquivo = path.join('arquivos', arquivo)
            const infos = await stat(caminhoArquivo);
            const tamanhoKB = (infos.size / 1024).toFixed(2);
            const data = infos.mtime.toLocaleString('pt-BR');
            console.log(`${arquivo}  | ${tamanhoKB}KB  |  Modificado em  ${data}:`)

        }else{            
        }
    }   
}

filtro()