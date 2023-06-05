package com.api.escolaoctogono.service.core;

import com.api.escolaoctogono.service.model.Aluno;
import com.api.escolaoctogono.service.model.Aula;
import com.api.escolaoctogono.service.repository.AulaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AulaService {

    private final AulaRepository aulaRepository;

    public AulaService(AulaRepository aulaRepository) {
        this.aulaRepository = aulaRepository;
    }

    public List<Aula> getAll(){
        return aulaRepository.findAll();
    }
    public Aula criaAula(Aula aula){

        aula.setChamada(aula.getChamada());
        aula.setData(aula.getData());
        aula.setDisciplinaCodigo(aula.getDisciplinaCodigo());
        aula.setTurmaId(aula.getTurmaId());

        return aulaRepository.save(aula);
    }
}
