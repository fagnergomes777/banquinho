import client from "../../../config/database.js";
class AlunoModel{
    static async criar(nome, email, matricula, telefone, cod_turma){
        const dados = [nome, email, matricula, telefone, cod_turma]
        const consulta = `insert into aluno(nome, email, matricula, telefone, cod_turma)
        values($1, $2, $3, $4, $5) returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
    

}

export default AlunoModel;