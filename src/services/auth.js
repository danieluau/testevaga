import bcrypt from 'bcryptjs'

export const createPasswordHash = async (password) => bcrypt.hash(password, 8);
// criar um hash da senha fornecida. //e um número de "rounds" (8 neste caso). Quanto maior o número de rounds, mais seguro é o hash, mas também pode ser mais lento.

export const checkPassword = (user, password) =>{
    bcrypt.compare(password, user.password); //comparar o que vc recebe de password com user.password, com
    //comparando o que vc recebe com o que voce tem
    
}

// a gente nao descriptografa a gente compara pra saber se ta com a mesma criptografia

//Esta função compara a senha fornecida com o hash de senha armazenado no objeto user. 
//Retorna true se a senha estiver correta, e false caso contrário.

//criptografa as senhas de forma nao reversivel