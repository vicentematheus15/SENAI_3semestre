//encapsulamento
class ContaBancaria {
    #titularConta
    #saldoConta
    constructor(titular, saldo){
        this.#titularConta = titular;
        this.#saldoConta = saldo;
    }

    get saldo(){
        return this.#saldoConta;
    }
}

const contaNatan = new ContaBancaria("Natan Rubenich", 500);
console.log(contaNatan.saldo);
