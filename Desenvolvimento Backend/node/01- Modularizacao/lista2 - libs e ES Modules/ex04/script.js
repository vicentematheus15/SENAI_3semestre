// Crie um script com um array de pelo menos cinco caminhos de arquivos (misture caminhos relativos, absolutos e com ..). Para cada caminho, utilize o módulo path para extrair e exibir as seguintes informações de forma organizada: caminho absoluto resolvido (path.resolve), diretório pai (path.dirname), nome do arquivo (path.basename) e extensão (path.extname).

import path from 'path'


function inspecionarCaminhos(){
    const listaCaminhos = [
        './dados.json', 
        '../relatorio.txt', 
        'C:/Windows/System32/config.sys', 
        'scripts/app.js', 
        '../projetos/app/index.js'
    ];

    for(const caminho of listaCaminhos){
        console.log(`--------Analisando: ${caminho}------------`);
        console.log("Absoluto: ", path.resolve(caminho));
        console.log("Diretório: ", path.dirname(path.resolve(caminho)));
        console.log("Arquivo: ", path.basename(caminho));
        console.log("Extensão: ", path.extname(caminho));
        console.log("\n");
        
    }
}

inspecionarCaminhos();