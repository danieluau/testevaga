import mongoose from 'mongoose'

const repositorySchema = new mongoose.Schema({
    nome: {
        type: String
    },
    url: {
        type: String,
        required: true,
        unique: true
    },

    // como o mongodb nao eh relacional, eh complicado de fazer chave estrangeira, entao vamos fazer o relacionamento entre tabelas na mao
    userId: {
        type: String,
        required: true
    }
},

{
    timestamp: true
}

)  

export default mongoose.model("Repository", repositorySchema);