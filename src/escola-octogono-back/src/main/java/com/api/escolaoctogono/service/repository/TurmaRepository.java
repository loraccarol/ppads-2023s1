package com.api.escolaoctogono.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.escolaoctogono.service.model.Turma;

public interface TurmaRepository extends JpaRepository<Turma, Long> {
    
}
