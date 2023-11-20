import jwt from "jsonwebtoken";
import authConfig from '../config/auth'
import promisify from 'util'

export default async (req, res, next) => {

    const authHeader = req.headers.authorization //extraindo o header de autorização da requisição HTTP.
 
    if(!authHeader) { //verifica se o header de autorização nao esta presente na requisição, caso nao esteja retorna isso ai
        return res.status(401).json({msg: 'token nao provido'})
    }
    //BEARER XXXX // pega a segunda parte e coloca aqui (xxxxx) 
    const [, token] = authHeader.split('')//divide o header de autorização para obter apenas o token

    try {
        const decoded = await promisify(jwt.verify(token, authConfig.secret)) //verificar e decodificar o token 
        // e a função promisify é usada para transformar a função de callback do verify em uma Promise, permitindo o uso de await.
        req.userId = decoded.id  // Se o token for válido, extrai o ID do usuário do token decodificado e o adiciona à requisição 

        return next() //chama a próxima função no fluxo de middleware, util para autorização posterior nas rotas protegidas
    } catch (error) {
        return res.status(401).json({msg: 'token invalido'})
    }

}
// Este código é comumente utilizado para proteger rotas específicas, exigindo que o cliente forneça um token válido no header de autorização para acessar essas rotas.