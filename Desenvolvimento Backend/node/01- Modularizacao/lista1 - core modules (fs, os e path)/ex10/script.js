// Desenvolva um script que identifique se o sistema operacional é Windows, Linux ou macOS e execute comportamentos diferentes com base nessa informação utilizando os.platform().

import os from 'os';

function descobriSistema(){
    const sistemaOperacional = os.platform();

    switch (true) {
        case sistemaOperacional === 'win32':
            console.log("Sistema Operacional: Windows")
            break;
        case sistemaOperacional === 'linux':
            console.log("Sistema Operacional: Linux")
            break;
        case sistemaOperacional === 'darwin':
            console.log("Sistema Operacional = macOS")
            break;
        default: console.log("Sistema Operacional não é o esperado");
            break;
    }
}

descobriSistema();