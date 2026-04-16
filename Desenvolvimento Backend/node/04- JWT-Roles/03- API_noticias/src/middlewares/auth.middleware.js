import jwt from 'jsonwebtoken';

export async function autenticar(req, res, next){
    const auth = req.headers['authorization']
    if(!auth || !auth.startsWith('Bearer')){
         return res.status(401).json({ erro: 'Token não fornecido ou formato inválido' });
    }
    const token = auth.split(' ')[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
}

export function exigirAdmin(perfilEsperado){
    return(req, res, next) => {
        if(req.usuario.perfil !== perfilEsperado){
            return res.status(403).json({erro: 'Acesso restrito a administradores!'})
        }
        next();
    }
}