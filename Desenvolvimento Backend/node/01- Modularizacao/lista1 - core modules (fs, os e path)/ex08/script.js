// Crie um script que utilize o módulo os para exibir: sistema operacional, arquitetura, quantidade de CPUs e memória total. Formate a saída de forma organizada no console.

import os from 'os';

function gerarRelatorioSistema(){
    const sistemaOperacional = os.platform()
    const arquitetura = os.arch()
    const processador = os.cpus()[0].model
    const nucleos = processador.length
    const memoriaTotal = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    // const memoriaDisponivel = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
    // const porcentMemoriaUso = ( (os.freemem() / os.totalmem()) * 100).toFixed(2);

    console.log("====== RELATÓRIO DO SISTEMA =======");
    console.log(`Sistema Operacional: ${sistemaOperacional} \nArquitetura: ${arquitetura}\nModelo processador: ${processador}\nQuantidade de núcleos: ${nucleos}\nMemoria total: ${memoriaTotal}GB`)

}

gerarRelatorioSistema();