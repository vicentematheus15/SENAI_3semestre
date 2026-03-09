//Função void
function saudacao(){
    console.log("Olá mundo!!");
}

//Função com parâmetro
function saudacaoPessoa(nome){
    console.log(`Olá ${nome}`);
}

//Função com retorno
function saudacaoPessoa(nome){
    return(`Olá ${nome}`);
}

//Função arrow function
const dobro = (x)=> x*2;

//Função callback
function executar(nomeFuncao){
    nomeFuncao()
}

//Função recursiva
function regresiva(numero){
    if(numero < 0){
        return
    }
    console.log(numero);
    regresiva(numero-1);
    
}

saudacao();

saudacaoPessoa("vicente");

console.log(saudacaoPessoa("Fulano"));

console.log(dobro(10));

executar(saudacao);

console.log(regresiva(5));