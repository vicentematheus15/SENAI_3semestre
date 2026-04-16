// Desenvolva um script que gere automaticamente a estrutura de pastas de um projeto Node.js simples. As pastas a criar são: src/controllers, src/services, src/routes e src/models. Use path.join() para montar todos os caminhos e fs.mkdir() com { recursive: true } para criá-los. Ao final, crie também um arquivo index.js vazio dentro de src/ e exiba no console cada pasta criada com sucesso.

import path from 'path';
import { mkdir, writeFile } from 'fs/promises';

async function criandoCaminhos(){
    const pastaBase = "src";
    const subpastas = ['controllers', 'services', 'routes', 'models'];
    console.log(`A pasta ${pastaBase} foi criada com sucesso`);
    

    for(const subpasta of subpastas){
        const caminhoCompleto = path.join(pastaBase, subpasta);
        await mkdir(caminhoCompleto, {recursive: true});
        console.log(`A subpasta ${caminhoCompleto} foi criada com sucesso!`)
    }

    const caminhoIndex = path.join(pastaBase, 'index.js')
    await writeFile(caminhoIndex, '')
    console.log("O arquivo 'index.js' foi criado com sucesso!")
}

await criandoCaminhos();