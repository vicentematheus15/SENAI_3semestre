// Gere um arquivo ambiente.txt contendo informações obtidas pelo módulo os, como diretório home do usuário (os.homedir()), tempo de atividade do sistema (os.uptime()) e hostname (os.hostname()).

import fs from 'fs/promises';
import os from 'os'

function formataTempo(){
    const tempoTotalSegundos = os.uptime()
    const horas = Math.floor(tempoTotalSegundos / 3600);
    const minutos = Math.floor((tempoTotalSegundos% 3600) / 60);
    const tempoFormatado = `${horas} horas e ${minutos} minutos`
    return tempoFormatado
}
function conteudoRelatorio(tempoFormatado){
    const diretorio = os.homedir();
    const hostname = os.hostname()
    const conteudo = `----- Informações de ambiente -----\nDiretório: ${diretorio} \nTempo de atividade do sistema: ${tempoFormatado} \nHostname: ${hostname} `
    return conteudo
}

async function gerarArquivo(conteudo) {
    await fs.writeFile('ambiente.txt', conteudo)
}

async function main(){
    const tempoFormatado = formataTempo()
    const infosAmbiente = conteudoRelatorio(tempoFormatado);
    await gerarArquivo(infosAmbiente);
}

main()