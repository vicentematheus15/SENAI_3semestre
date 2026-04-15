import jwt from 'jsonwebtoken';

export async function autenticarJWT(req, res, next){
    try {
        const Auth = req.headers['Authorization'];
        //Verificando o Authorization do Header da requisição
        if(!Auth || !Auth.startsWith('Bearer')){
            return res.status(401).json({erro: "Token inválido"})
        }

        //Tratando o token
        const token = Auth.split(' ')[1];

        //Verificar (verify) o token
        const tokenDecodificado = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = tokenDecodificado;
        next();

    } catch (error) {
        res.status(401).json({erro: "Token inválido ou expirado!"})
    }
}