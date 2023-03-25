package com.api.escolaoctogono.service.repository;

import com.api.escolaoctogono.service.model.Disciplina;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DisciplinaRepository extends JpaRepository<Disciplina, Long> {
//    List<Disciplina> findAllByProfessorDrt(Long profDRT);

}
