// Crie um script que colete informações do sistema operacional e as exiba de forma organizada no console. O relatório deve incluir: plataforma (os.platform()), arquitetura (os.arch()), quantidade de núcleos de CPU e modelo do processador (os.cpus()), memória total e memória disponível em GB (os.totalmem() e os.freemem()). Calcule e exiba também o percentual de memória em uso.

import os from 'os';

function gerarRelatorioSistema(){
    const plataforma = os.platform()
    const arquitetura = os.arch()
    const processador = os.cpus()[0].model
    const nucleos = processador.length
    const memoriaTotal = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    const memoriaDisponivel = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
    const porcentMemoriaUso = (1 - (os.freemem() / os.totalmem()) * 100).toFixed(2);

    console.log("====== RELATÓRIO DO SISTEMA =======");
    console.log(`Plataforma: ${plataforma} \nArquitetura: ${arquitetura}\n  `)

}

gerarRelatorioSistema();