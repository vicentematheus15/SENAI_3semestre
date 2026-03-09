//herança

class Funcionario{
    constructor(nome, CPF, salarioBase){
        this.nomeFuncionario = nome;
        this.CPFFuncionario = CPF;
        this.salarioBase = salarioBase;
    }

    exibirSalario(){
        return `O salário do funcionario é: ${this.salarioBase}`;
    }
}

class Gerentes extends Funcionario{
    constructor(nome, CPF, salarioBase, subordinados){
        super(nome, CPF, salarioBase)
        this.subordinados = subordinados;
    }

    aprovarFerias(){
        return `Aprovou as férias dos funcionarios`
    }
}

const ana = new Gerentes("Ana", 12345678910, 5000.00, ["Fulano", "Ciclano", "Beltrano"]);
console.log(ana.exibirSalario());
console.log(ana.aprovarFerias());
