import bcrypt from 'bcryptjs';

export const createPasswordHash = async (password) => {
    try {
        const hash = await bcrypt.hash(password, 8);
        return hash;
    } catch (error) {
        throw new Error(`Erro ao gerar hash da senha: ${error.message}`);
    }
    // criar um hash da senha fornecida. //e um número de "rounds" (8 neste caso). 
    //Quanto maior o número de rounds, mais seguro é o hash, mas também pode ser mais lento.
};

export const checkPassword = async (user, password) => {
    try {
        const passwordMatch = await bcrypt.compare(password, user.password);
        return passwordMatch;
    } catch (error) {
        throw new Error(`Erro ao comparar senhas: ${error.message}`);
    }
    //comparar o que vc recebe de password com user.password, com
    //comparando o que vc recebe com o que voce tem
    // retorna um booleano indicando se as senhas correspondem.
};


// a gente nao descriptografa a gente compara pra saber se ta com a mesma criptografia

//Esta função compara a senha fornecida com o hash de senha armazenado no objeto user. 
//Retorna true se a senha estiver correta, e false caso contrário.

//criptografa as senhas de forma nao reversivel