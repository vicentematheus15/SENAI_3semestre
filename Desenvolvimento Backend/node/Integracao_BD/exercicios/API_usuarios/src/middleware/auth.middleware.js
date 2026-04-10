import jwt from 'jsonwebtoken';

export async function autenticarJWT(req, res, next){
    try {
        const Auth = req.headers['Authorization'];
        //Verificando o Authorization do Header da requisição
        if(!Auth || !Auth.startsWith['Bearer']){
            return res.status(401).json({erro: "Token inválido"})
        }

        //Tratando o token
        const Token = Auth.split(' ')[1];

        //Verificar (verify) o token
        const resVerify = jwt.verify(Token, process.env.JWT_SECRET);
        res.body = resVerify;
        next();

    } catch (error) {
        res.status(401).json({erro: "Token inválido ou expirado!"})
    }
}