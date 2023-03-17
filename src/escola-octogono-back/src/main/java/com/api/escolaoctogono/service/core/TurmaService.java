package com.api.escolaoctogono.service.core;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.escolaoctogono.service.model.Turma;
import com.api.escolaoctogono.service.repository.TurmaRepository;


@Service
public class TurmaService {
    
    private final TurmaRepository turmaRepository;

    public TurmaService(TurmaRepository turmaRepository) {
        this.turmaRepository = turmaRepository;
    }

    public List<Turma> getAllTurmas(){
        return turmaRepository.findAll();
    }
    
}
