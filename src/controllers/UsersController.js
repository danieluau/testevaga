import User from '../models/User'

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
        
    }
    async create(req, res) {
        try {
            const {email, password} = req.body //vai puxar o corpo da requisiçao que o front end vai enviar
            const user = await User.findOne({email})

            if(user) {
                return res.status(422).json({msg: `o email ${email} ja foi cadastrado`})
            }
            const newUser = await User.create({email, password}) 
            //201 significa que um objeto foi criado
            return res.status(201).json(newUser) //vai passar o registro que o mongo passou pra ele
        } 
        
        catch (error) {
            
        }
    }
    async update(req, res) {
        
    }
    async delete(req, res) {
        
    }
    
}


export default new UsersController();