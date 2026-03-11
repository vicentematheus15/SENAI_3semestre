// Crie um script que leia todos os arquivos de uma pasta (use uma pasta de testes com arquivos mistos), separe-os por extensão e mova cada grupo para sua respectiva subpasta: arquivos .txt vão para textos/, .json para dados/ e .js para scripts/. Use fs.readdir() para listar, fs.mkdir() com { recursive: true } para criar as pastas se não existirem, e fs.rename() para mover cada arquivo. Exiba no console um resumo de quantos arquivos foram movidos para cada pasta.

import {readdir, mkdir, rename} from 'fs/promises';

async function lerArquivos(){   
    const listaArquivos = await readdir('./testes')
    return listaArquivos        
}

async function moverArquivos(listaArquivos){
    const contador = { textos: 0, dados: 0, scripts: 0 };

    for(const arquivo of listaArquivos){
        let pastaDestino = "";

        switch (true) {
            case arquivo.endsWith('.txt'):
                pastaDestino = 'textos';
                contador.textos++;
                break;
            case arquivo.endsWith('.json'):
                pastaDestino = 'dados';
                contador.dados++;
                break;
            case arquivo.endsWith('.js'):
                pastaDestino = 'scripts';
                contador.scripts++;
                break;

            default: 
            console.log(`Arquivo ${arquivo} não reconhecido, ignorando...`);
            continue;
        }

        await mkdir(`./${pastaDestino}`, {recursive: true})
        await rename(`./testes/${arquivo}`, `./${pastaDestino}/${arquivo}`)
    }        
    console.table(contador);
}


async function main(){
    console.log("O Node está procurando arquivos em: ", process.cwd());
    try{
        const arquivosLidos = await lerArquivos();
        await moverArquivos(arquivosLidos);
    }catch(err){
        if(err.code === 'ENOENT'){
            console.error("O arquivo não foi encontrado.")
        }else{
            console.error("Ocorreu um erro inesperado: ",err.message)
        }
    }
}

main();