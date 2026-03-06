import {readFile} from 'fs/promises';

export async function leitorArquivo() {
    try{
        const arquivo = await readFile('./log.txt', 'utf-8');
        const linhas = arquivo.trim().split('\n');
        console.log(linhas.length);
        
    }catch(err){
        console.log("deu erro:", err)
    }
}

// export {leitorArquivo}