//herança

class Funcionario{
    constructor(nome, CPF, salarioBase){
        this.nomeFuncionario = nome;
        this.CPFFuncionario = CPF;
        this.salarioBase = salarioBase;
    }

    exibirCargo(){
        return `${this.nomeFuncionario} é um Funcionário! Atribua um cargo`
    }

    exibirSalario(){
        return `O salário do funcionario é: ${this.salarioBase}`;
    }
}

class Gerentes extends Funcionario{
    constructor(nomeFuncionario, CPFFuncionario, salarioBase, subordinados){
        super(nomeFuncionario, CPFFuncionario, salarioBase)
        this.subordinados = subordinados;
    }

    exibirCargo(){
        return `${this.nomeFuncionario} é um Gerente!`
    }

    aprovarFerias(){
        return `Aprovou as férias dos funcionarios`
    }
}

const ana = new Gerentes("Ana", 12345678910, 5000.00, ["Fulano", "Ciclano", "Beltrano"]);
const funcionarioGenerico = new Funcionario("Fulano", 10987654321, 3000.00,)

console.log(ana.exibirSalario());
console.log(ana.aprovarFerias());

console.log(funcionarioGenerico.exibirCargo());
console.log(ana.exibirCargo());

