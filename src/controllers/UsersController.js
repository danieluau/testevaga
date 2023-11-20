import User from '../models/User'
import { createPasswordHash } from '../services/auth.js'

class UsersController {
    async index(req, res) {

        // ele vai permitir executar um codigo e se ele der algum tipo de problema, ele vai entrar no contexto do catch
        try {
            const users = await User.find() // metodo find do mongoose vai listar todos os usuarios
            return res.json(users) // retorna em json pro front consumir
        } catch (error) {
            console.log(error) //qualquer error que de ele mostra detalhado no console pra gente, mas pra aplicação so retorna erro no sevidor
            return res.status(500).json({error: 'internal server error'})
        }
    }
    async show(req, res) {
        try {
            const {id} = req.params;
            const user = await User.findById(id)

            if(!user){
                return res.status(404).json
            }

            return res.json(user)

        } catch (error) {
            console.log(error) //qualquer error que de ele mostra detalhado no console pra gente, mas pra aplicação so retorna erro no sevidor
            return res.status(500).json({error: 'internal server error'})
        }
    }
    
    async create(req, res) {
        try {
            const {email, password} = req.body //vai puxar o corpo da requisiçao que o front end vai enviar
            const user = await User.findOne({email})

            if(user) {
                return res.status(422).json({msg: `o email ${email} ja foi cadastrado`})
            }

            console.log(password)

            // criptografa o a senha

            const encryptedPassword = await createPasswordHash(password)

            const newUser = await User.create({ email, password: encryptedPassword }) 
            //201 significa que um objeto foi criado
            return res.status(201).json(newUser) //vai passar o registro que o mongo passou pra ele
        } 
        
        catch (error) {
            console.log(req.body)
            console.log(error)
        }
    }
   
    async update(req, res) {
        
        try {
                    
            const {id} = req.params;
            const {email, password} = req.body

            const user = await User.findById(id)

            if(!user) {
                return res.status(404).json()
            }

            // criptografa o a senha

            const encryptedPassword = await createPasswordHash(password)

            //se encontrar o usuario atualiza
            await user.updateOne({email, password: encryptedPassword})

            return res.status(200).json(user);
            
        } catch (error) {
            console.log(error)
        } 

    }
    async delete(req, res) {
        try {
            const {id} = req.params;
            const user = await User.findById(id)
    
            if (!user) {
                return res.status(404).json()
            }
    
            await user.deleteOne()
    
            return res.status(200).json(`o usuario ${user} foi deletado`)
        
        } catch (error) {
            console.log(error)
        }
    }
    
}


export default new UsersController();