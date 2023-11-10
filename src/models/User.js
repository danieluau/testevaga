import mongoose from 'mongoose'


//aqui definimos a estrutura padrao o usuario, basicamente um objeto onde voce vai colocando os atributos
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: {
            unique: true //deixa o campo unico o que evita que a gente tenha dois usuarios com o mesmo email
        }
    },
    password: {
        type: String,
        required: true
    }
},


{
    timestamps: true //gera a data de criaçao e atualizaçao do registro
}

)

export default mongoose.model("User", userSchema)

//esse eh o schema 