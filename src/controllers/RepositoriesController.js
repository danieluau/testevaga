import User from "../models/User";
import Repository from '../models/Repository'


class RepositoriesController {
    async index(req, res) {
        try {
            const {user_id} = req.params //eh a requisiçao que vem da url, que o front manda
            const user = await User.findById(user_id);

            if(!user){
                return res.status(404).json(); //se nao achar o usuario ele retorna 404
            }

            const repositories = await Repository.find({
                userId: user_id //filtrando pelo id do usuario que ja temos certeza que existe
            });

            return res.json(repositories) 


        } catch (error) {
            console.log(error)
            return res.status(500).json({msg: 'internal server error'})
        }
    }
    async create(req, res){
        try {
            const {user_id } = req.params
            const {name, url} = req.body //vai vir no corpo da requisiçao
            const user = await User.findById(user_id)
    
            if(!user){
                res.status(404).json()
            }
            
            const repository = await Repository.findOne({
                userId: user_id, //se existir algum repositorio com mesmo nome de um mesmo usuario nao sera popssivel criar
                name
            })
    
            if(repository){
                return res.status(422).json({msg: 'repositorio com esse nome ja existe'})
            }
    
            const newRepository = await Repository.create({
                name, 
                url, 
                userId: user_id
            })
    
            return res.status(201).json({msg: `repositorio criado com sucesso`, newRepository})
    
        } catch (error) {
            console.log(error)
            return res.status(500).json({msg: 'internal server error'})
        }
    }

    async delete(req, res) {
        try {
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({msg: 'internal server error'})            
        }
    }

}


export default new RepositoriesController()