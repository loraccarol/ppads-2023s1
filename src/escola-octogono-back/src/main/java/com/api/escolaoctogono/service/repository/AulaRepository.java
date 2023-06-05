package com.api.escolaoctogono.service.repository;

import com.api.escolaoctogono.service.model.Aula;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AulaRepository extends JpaRepository<Aula, Long> {

}
