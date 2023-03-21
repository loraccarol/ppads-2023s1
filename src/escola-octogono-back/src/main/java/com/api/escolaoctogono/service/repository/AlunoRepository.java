package com.api.escolaoctogono.service.repository;

import com.api.escolaoctogono.service.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
    List<Aluno> findAlunosByTurmaId(Long turmaId);
}

