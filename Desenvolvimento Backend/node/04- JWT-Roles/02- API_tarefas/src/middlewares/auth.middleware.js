import jwt from 'jsonwebtoken';

export async function autenticar (req, res, next){
        const auth = req.headers['authorization']

        if(!auth || !auth.startsWith('Bearer')){
            return res.status(401).json({erro: 'Token não fornecido ou formato inválido'})
        }

        const token = auth.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.usuario = decoded
        next();
}