// Crie uma classe base Notificacao com o método enviar(mensagem). Crie subclasses Email, SMS e PushNotification. Cada uma deve implementar enviar() de forma diferente (ex: "Enviando email para...", "Enviando SMS...").

class Notificacao{
    enviar(mensagem){
        console.log("Enviando notificação: ", mensagem)
    }
}

class Email extends Notificacao{
    enviar(mensagem){
        console.log("Enviando email: ", mensagem);
        
    }
}

class SMS extends Notificacao{
    enviar(mensagem){
        console.log("Enviando SMS: ", mensagem);
        
    }
}

class PushNoftification extends Notificacao{
    enviar(mensagem){
        console.log("Enviando Push Noftification: ", mensagem);
        
    }
}


