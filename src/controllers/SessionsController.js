//responsavel por validar o usuario e criar um token pra ele e repassar
import jwt from "jsonwebtoken"
import User from "../models/User"
import { checkPassword } from "../services/auth"
import authConfig from '../config/auth'


class SessionController{ //criadora de sessao que autentica o usuario
    async create(req, res) {
        const {email, password} = req.body; 
        const user = await User.findOne({email})

        if(!user) { //usuario existe?
            return res.status(401).json({error: 'usuario ou senha invalida'})
        }

        if(!checkPassword(user, password)){ //conseguiu logar corretamente?
            return res.status(401).json({error: 'usuario ou senha invalida'})
        }



        const {id} = user;

        return res.json({
            user: {
                id,
                email
            },
            token: jwt.sign({id}, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        
        }
        )
    }
}

export default new SessionController()