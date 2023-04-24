package com.api.escolaoctogono.service.repository;

import com.api.escolaoctogono.service.model.Auth;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthRepository extends JpaRepository<Auth, Long> {
}
