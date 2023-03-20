package com.api.escolaoctogono.service.repository;

import com.api.escolaoctogono.service.model.Disciplina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DisciplinaRepository extends JpaRepository<Disciplina, Long> {
    List<Disciplina> findAllByProfessorDrt(Long profDRT);

}
