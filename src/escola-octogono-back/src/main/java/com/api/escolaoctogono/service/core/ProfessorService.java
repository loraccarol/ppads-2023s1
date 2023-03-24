package com.api.escolaoctogono.service.core;

import java.util.List;
import java.util.Optional;

import javax.management.relation.RoleNotFoundException;

import org.springframework.stereotype.Service;

import com.api.escolaoctogono.service.model.Professor;
import com.api.escolaoctogono.service.repository.ProfessorRepository;

@Service
public class ProfessorService {

    private final ProfessorRepository professorRepository;

    public ProfessorService(ProfessorRepository professorRepository) {
        this.professorRepository = professorRepository;
    }

    public List<Professor> getAllProfessores(){
        return professorRepository.findAll();
    }

    public Optional<Professor> getProfById(Long turmaId){
        return professorRepository.findById(turmaId);
    }

    public Professor adicionaProfessor(Professor professor) {
        return professorRepository.saveAndFlush(professor);
    }

    public Professor atualizaProfessor(Professor professor) throws RoleNotFoundException {

        Professor atuProfessor = professorRepository.findById(professor.getDrt())
        .orElseThrow(() -> new RoleNotFoundException("Não foi possível encontrar esse professor"));

        atuProfessor.setDrt(professor.getDrt());
        atuProfessor.setNome(professor.getNome());
        atuProfessor.setTipoFuncao(professor.getTipoFuncao());

        final Professor novoProf = professorRepository.save(atuProfessor);
        return novoProf;
    }

    public void deleteProf(long profDRT) {
        professorRepository.deleteById(profDRT);
    }
    
}
