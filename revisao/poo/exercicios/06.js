// Modele uma classe Configuracao onde certos parâmetros (como o ID do servidor) são definidos apenas no construtor e não podem ser alterados posteriormente. Implemente isso usando getters sem setters correspondentes ou usando Object.freeze().

class Configuracao {
  #idServidor;

  constructor(idServidor) {
    this.#idServidor = idServidor;
  }

  // Só leitura (sem setter)
  get idServidor() {
    return this.#idServidor;
  }
}

const config = new Configuracao("Server01");

console.log(config.idServidor); // funciona

// Tentativa de alterar
config.idServidor = "Server02"; 
console.log(config.idServidor); // continua "Server01"