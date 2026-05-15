//  implemente aqui ao vivo
export class AuthService {
    constructor() {
        this.users = []
    }

    register(email, senha){
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        if(!emailRegex.test(email)) {
            throw new Error("Email inválido");
        }

        if(senha.length < 6) {
            throw new Error("Senha deve ter no mínimo 6 caracteres");
        }

        if(this.users.find(user => user.email === email )){
            throw new Error("Email já cadastrado");
        }

        this.users.push(email, senha)
        return {success: true, user: {email}}
    }
}