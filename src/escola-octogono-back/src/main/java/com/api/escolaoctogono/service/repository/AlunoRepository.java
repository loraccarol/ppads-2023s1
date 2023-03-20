package com.api.escolaoctogono.service.repository;

import com.api.escolaoctogono.service.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Long> {
    Aluno findAlunosByTurmaId(Aluno aluno);
}

