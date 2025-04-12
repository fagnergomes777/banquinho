import AlunoModel from "../models/index.js";

class AlunoController{
    static async criar(nome, email, matricula, telefone, cod_turma){
        try{
            if(!nome || !email || !matricula || !telefone){
                return console.error(`Todos os campos devem ser preenchidos!`);
            }
            const aluno = await AlunoModel.criar(nome, email, matricula, telefone, cod_turma);
            console.log(`Aluno criado com sucesso!`);
            return aluno;
        }catch (erro){
            console.log(`Erro ao criar aluno:`, erro.message);
        }
    }
    static async editar(nome, email, matricula, telefone, cod_turma){
        try{
            const aluno = await AlunoModel.atualizarAluno(nome, email, matricula, telefone, cod_turma);
            if(aluno.length === 0){
                return console.error(`Aluno não encontrado!`);
            }
            console.log(`Aluno atualizado com sucesso!`);
            return aluno;
        }catch (erro){
            console.log(`Erro ao atualizar o aluno:`, erro.message);

        }
    }
    static async deletarAluno(email){
        try{
            const aluno = await AlunoModel.listarPorMatricula(email);
            if(aluno.length === 0){
                return console.error(`Aluno não encontrado!`);
            }
            await AlunoModel.deletarAluno(email);
            console.log(`Aluno deletado com sucesso!`); 
        } catch (erro){
            console.log(`Erro ao excluir aluno:`, erro.message);
        }

    }
    static async deletarTodos(){
        try{
            await AlunoModel.deletarTodos();
            console.log(`Alunos excluidos com sucesso!`);
        }catch (erro){
            console.log(`Erro ao excluir todos os alunos:`, erro.message);
        }
    }
    static async listarTodos(){
        try{
            const alunos = await AlunoModel.listarTodos();
            if(alunos.length === 0){
                return console.log(`Nenhum usuario encontrado!`);
            }
            console.log(`Listagem de alunos:`);
            return alunos;
        }catch (erro){
            console.log(`Erro ao listar todos os alunos:`, erro.message);
        }
    }
    static async listarPorEmail(){
        try{
            const aluno = await AlunoModel.listarPorEmail(email);
            if(aluno.length === 0){
                return console.error(`Aluno não encontrado!`);
            }
            console.log(`Aluno:`)
        }catch (erro){
            console.log(`Erro ao listar todos os aluno:`, erro.message);
        }
    }
    static async totalAlunos(){
        try{
            const total = await AlunoModel.totalAlunos();
            if (total.length === 0){
                return console.error(`Não há aluno na contagem!`);
            }
            return total;
        }catch (erro){
            console.log(`Erro ao contar todos os alunos:`, erro.message);
        }
    }
}

export default AlunoController;