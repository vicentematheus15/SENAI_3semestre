const alunos = ["Ana", "Carlos", "Beatriz", "Jessica"];

alunos.push("Daniel"); //coloca no final

alunos.pop("Daniel"); //remove o ultimo

alunos.unshift("Daniel"); //coloca no inicio

alunos.shift("Daniel"); //retira do inicio

alunos.sort(); //ordenar dados

alunos.slice(); //cria uma cópia de acordo com os requisitos que eu quero
const copiaAlunos = alunos.slice(1,3); //faz uma copia do índice inicial atéo final (O FINAL NAO ENTRA NA CÓPIA)
console.log(copiaAlunos); //vai passar de Carlos(indice 1) até Beatriz(indice 2, ja que o 3 nao entra na cópia)

alunos.indexOf("Carlos"); // vai mostrar o índice do elemento "Carlos" e se não achar, mostra -1