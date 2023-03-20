package com.api.escolaoctogono.service.core;

import com.api.escolaoctogono.service.model.Aluno;
import com.api.escolaoctogono.service.model.Turma;
import com.api.escolaoctogono.service.repository.AlunoRepository;
import com.api.escolaoctogono.service.repository.TurmaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {

    private final AlunoRepository alunoRepository;
    private final TurmaRepository turmaRepository;

    public AlunoService(AlunoRepository alunoRepository, TurmaRepository turmaRepository) {
        this.alunoRepository = alunoRepository;
        this.turmaRepository = turmaRepository;
    }

//    public List<Aluno> getAlunos(Aluno aluno, Turma turma){
//        turmaRepository.findById(turma.getId());
//
//        alunoRepository.findAlunosByTurmaId(aluno);
//        return;
//    }

    public Aluno criaAluno(Aluno aluno, Turma turma){
        turmaRepository.findById(turma.getId());

        aluno.setId(aluno.getId());
        aluno.setTurma(turma);
        aluno.setNome(aluno.getNome());
        aluno.setTia(aluno.getTia());

        Aluno criaAluno = alunoRepository.save(aluno);
        return criaAluno;
    }
}
