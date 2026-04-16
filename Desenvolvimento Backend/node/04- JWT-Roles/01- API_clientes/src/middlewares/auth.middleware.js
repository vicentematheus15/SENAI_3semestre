import jwt from 'jsonwebtoken';

export async function autenticar(req, res, next){
    try {
        const auth = req.headers['authorization']; //pega o token bruto no header e guarda na variavel auth. ele vem com a chave authorization

        //verifica se o token realmente veio e se veio no formato certo (começando com Bearer)
        if(!auth || !auth.startsWith('Bearer')){
            return res.status(401).json({ erro: 'Token não fornecido ou formato inválido' });
        }

        //trata o token, dividindoem uma array com 2 objetos "bearer"[0] e o token[1], pegando somento o token (posição [1])
        const token = auth.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET); //guarda nessa variável a validação do token. o metodo verify espera 2 parametros:(token, segredo)

        req.usuario = decoded; //insere o a variavel decoded com os dados do usuario na requisição (ela contem: id, nome, iat, exp)
        next()
    } catch (error) {
        return res.status(401).json({ erro: 'Token inválido ou expirado' });
    }
}