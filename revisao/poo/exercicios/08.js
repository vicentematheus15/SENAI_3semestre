// Crie uma classe Funcionario com salário base. Crie uma subclasse Gerente que herda de Funcionário. No construtor do Gerente, utilize super() para repassar dados e adicione um atributo extra departamento. Sobrescreva um método de exibir dados para incluir o departamento.


// Classe base
class Funcionario {
  constructor(nome, salarioBase) {
    this.nome = nome;
    this.salarioBase = salarioBase;
  }

  exibirDados() {
    console.log("Nome:", this.nome);
    console.log("Salário:", this.salarioBase);
  }
}

// Subclasse Gerente
class Gerente extends Funcionario {
  constructor(nome, salarioBase, departamento) {
    super(nome, salarioBase); // repassa dados para a classe Funcionario
    this.departamento = departamento;
  }

  // Sobrescrevendo o método
  exibirDados() {
    super.exibirDados(); // chama o método da classe base
    console.log("Departamento:", this.departamento);
  }
}

// teste
const gerente = new Gerente("Carlos", 8000, "TI");
gerente.exibirDados();