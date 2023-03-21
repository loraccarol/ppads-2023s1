package com.api.escolaoctogono.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.escolaoctogono.service.model.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {

    Professor findByDrt(Long drt);
}
