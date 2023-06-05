package com.api.escolaoctogono.service.repository;

import com.api.escolaoctogono.service.model.Faltas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FaltasRepository extends JpaRepository<Faltas, Long> {
}
