// Crie um módulo que percorra uma pasta e exiba apenas arquivos com extensões específicas (ex: .js, .json). Utilize path.extname() para validação.

import fs from 'fs/promises'
import path from 'path';


async function filtrarArquivos(){
    try{
        const arquivosLidos = await fs.readdir('./teste')
        console.log(`--- Arquivos JSON ---\n`)
        
        for(const arquivo of arquivosLidos){
            if(path.extname(arquivo) === '.json'){
                console.log(`${arquivo}\n`)
            }
        }
    }catch(err){
        console.log("Ocorreu um erro: ", err);
    }
}

await filtrarArquivos()