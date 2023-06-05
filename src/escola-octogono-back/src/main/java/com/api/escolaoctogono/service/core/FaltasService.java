package com.api.escolaoctogono.service.core;

import com.api.escolaoctogono.service.model.Aula;
import com.api.escolaoctogono.service.model.Faltas;
import com.api.escolaoctogono.service.repository.FaltasRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FaltasService {

    private final FaltasRepository faltasRepository;

    public FaltasService(FaltasRepository faltasRepository) {
        this.faltasRepository = faltasRepository;
    }
    public List<Faltas> getAll(){
        return faltasRepository.findAll();
    }
    public Faltas criaFaltas(Faltas faltas){

        faltas.setAlunoTia(faltas.getAlunoTia());
        faltas.setAulaId(faltas.getAulaId());

        return faltasRepository.save(faltas);
    }
}
