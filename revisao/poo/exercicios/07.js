// Crie uma classe base Veiculo com métodos como mover(). Crie subclasses Carro e Aviao. O carro deve mover-se "pela estrada" e o avião "pelo ar". Adicione atributos específicos, como quantidadePortas para o carro e altitudeMaxima para o avião.

// Classe base
class Veiculo {
  constructor(nome) {
    this.nome = nome;
  }

  mover() {
    console.log("O veículo está se movendo.");
  }
}

// Subclasse Carro
class Carro extends Veiculo {
  constructor(nome, quantidadePortas) {
    super(nome);
    this.quantidadePortas = quantidadePortas;
  }

  mover() {
    console.log(this.nome + " está se movendo pela estrada.");
  }
}

// Subclasse Aviao
class Aviao extends Veiculo {
  constructor(nome, altitudeMaxima) {
    super(nome);
    this.altitudeMaxima = altitudeMaxima;
  }

  mover() {
    console.log(this.nome + " está se movendo pelo ar.");
  }
}

// teste
const carro = new Carro("Fusca", 2);
const aviao = new Aviao("Boeing", 12000);

carro.mover(); // pela estrada
aviao.mover(); // pelo ar

console.log("Portas do carro:", carro.quantidadePortas);
console.log("Altitude máxima do avião:", aviao.altitudeMaxima);