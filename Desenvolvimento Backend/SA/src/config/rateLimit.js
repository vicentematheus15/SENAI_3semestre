import rateLimit from 'express-rate-limit';

//========CONFIGURANDO LIMITES GLOBAIS ==============//
export const limitadorGlobal = rateLimit({
    windowMs: 15*60*1000, //janela de tempo para fazer algo
    max: 100, //numero maximo de requisições por IP
    message: {
        erro: 'Muitas requisições por minuto'
    },
    standardHeaders: true, //envia rateLimit nos nos headers
    legacyHeaders: false
});