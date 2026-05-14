//  implemente aqui ao vivo
export class AuthService {
    constructor() {
        this.users = []
    }

    register(email, senha){
        this.users.push(email, senha)
        return {success: true, user: {email}}
    }
}