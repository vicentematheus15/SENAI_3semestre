import jwt from 'jsonwebtoken';

export async function authenticate(req, res, next){
    const auth = req.headers['authorization']
    if(!auth || !auth.startsWith('Bearer')){
        return res.status(404).json({erro: "Token não fornecido ou formato inválido!"})
    }
    
    const token = auth.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
};