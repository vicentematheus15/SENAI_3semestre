// Exercício 1 — Leitor de Logs
// Crie um módulo que leia um arquivo log.txt utilizando fs/promises. O programa deve contar quantas linhas existem no arquivo e exibir o total no console. Utilize import ao invés de require.
import {readFile} from 'fs/promises';

async function leitorArquivo() {
    try{
        const arquivo = await readFile('./log.txt', 'utf-8');
        console.log(typeof(arquivo));
    }catch(err){
        console.log("deu erro:", err)
    }
}

leitorArquivo()