import User from '../models/User'
import Repository from '../models/User'

class RepositoriesController {
    async index (req, res) {
        try {
            const {user_id} = req.params;

            const user = await User.findById(user_id) //vai retornar o usuario pelo id

            if(!user){
                return res.status(404).json();
            }

            const repositories = await Repository.find({
                userId: user_id //para adicionar uma filtragem para nao listar a base inteira, para filtrar basta passar um parametro dentro do find, no caso vai ser o id
            })

            return res.json(repositories)
        } catch (error) {
            console.log(error)
            res.status(500).json({error: 'internal server error'})
        }
    }

    async create (req, res) {
        try {
        
            const {user_id} = req.params;

            const user = await User.Find(user_id)


            if(!user){
                return res.status(404).json();
            }

            
            
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: 'internal server error'})
        }
    }
}

export default new RepositoriesController();