package com.api.escolaoctogono.service.core;

import java.util.List;
import java.util.Optional;

import javax.management.relation.RoleNotFoundException;

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

    public Optional<Turma> getTurmaById(Long turmaId){
        return turmaRepository.findById(turmaId);
    }

    public Turma adicionaTurma(Turma turma) {
        return turmaRepository.save(turma);
    }

    public Turma atualizaTurma(Turma turma) throws RoleNotFoundException  {

        Turma atuTurma = turmaRepository.findById(turma.getId())
        .orElseThrow(() -> new RoleNotFoundException("Não foi possível encontrar essa turma"));

        atuTurma.setAno(turma.getAno());
        atuTurma.setCodigo(turma.getCodigo());

        final Turma novaTurma = turmaRepository.save(atuTurma);
        return novaTurma;
    }

    public void deleteTurma(long turmaId) {
        turmaRepository.deleteById(turmaId);
    }

}
