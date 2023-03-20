package com.api.escolaoctogono.service.core;

import com.api.escolaoctogono.service.model.Aluno;
import com.api.escolaoctogono.service.model.Turma;
import com.api.escolaoctogono.service.repository.AlunoRepository;
import com.api.escolaoctogono.service.repository.TurmaRepository;
import org.springframework.stereotype.Service;

import javax.management.relation.RoleNotFoundException;
import java.util.List;

@Service
public class AlunoService {

    private final AlunoRepository alunoRepository;
    private final TurmaRepository turmaRepository;

    public AlunoService(AlunoRepository alunoRepository, TurmaRepository turmaRepository) {
        this.alunoRepository = alunoRepository;
        this.turmaRepository = turmaRepository;
    }

    public List<Aluno> getAlunos(Turma turma){
        return alunoRepository.findAlunosByTurmaId(turma.getId());
    }

    public Aluno criaAluno(Aluno aluno, Turma turma){
        turmaRepository.findById(turma.getId());

        aluno.setTurma(turma);
        aluno.setNome(aluno.getNome());
        aluno.setTia(aluno.getTia());

        Aluno criaAluno = alunoRepository.save(aluno);
        return criaAluno;
    }

    public Aluno atualizaAluno(Aluno aluno) throws RoleNotFoundException {

        Aluno atuAluno = alunoRepository.findById(aluno.getTia())
                .orElseThrow(() -> new RoleNotFoundException("Não foi possível encontrar esse aluno"));

        atuAluno.setTia(aluno.getTia());
        atuAluno.setNome(aluno.getNome());

        final Aluno novoAluno = alunoRepository.save(atuAluno);
        return novoAluno;
    }
    public void deleteAluno(Long alunoTIA) {
        alunoRepository.deleteById(alunoTIA);
    }

}
