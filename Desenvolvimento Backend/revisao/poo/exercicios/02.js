// Desenvolva uma classe Aluno que possua um array de notas. Crie um método calcularMedia() que retorna a média aritmética das notas e outro método situacao() que retorna "Aprovado" se a média for maior que 7, ou "Reprovado" caso contrário.

class Aluno{
    constructor(nota1, nota2, nota3){
        this.primeiraNota = nota1
        this.segundaNota = nota2
        this.terceiraNota = nota3

    }

    calcularMedia(){
        return `A média é igual a: ${(this.primeiraNota + this.segundaNota + this.terceiraNota) / 3}`
    }

    situacao(){
        const mediaFinal = (this.primeiraNota + this.segundaNota + this.terceiraNota) / 3
        if(mediaFinal > 7){
            return `Aprovado`            
        }
        return `Reprovado`
    }
}

const aluno1 = new Aluno(8, 9, 7)

console.log(aluno1.calcularMedia());
console.log(aluno1.situacao());

