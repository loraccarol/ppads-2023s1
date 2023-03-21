package com.api.escolaoctogono.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.escolaoctogono.service.model.Professor;

@Repository
public interface ProfessorRepository extends JpaRepository<Professor, Long> {

    Professor findByDrt(Long drt);
}
