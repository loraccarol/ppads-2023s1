package com.api.escolaoctogono.service.core;

import java.util.List;
import java.util.Optional;

import javax.management.relation.RoleNotFoundException;

import com.api.escolaoctogono.service.model.Auth;
import com.api.escolaoctogono.service.repository.AuthRepository;
import org.springframework.stereotype.Service;

import com.api.escolaoctogono.service.model.Professor;
import com.api.escolaoctogono.service.repository.ProfessorRepository;

@Service
public class ProfessorService {

    private final AuthRepository authRepository;

    private final ProfessorRepository professorRepository;

    public ProfessorService(AuthRepository authRepository, ProfessorRepository professorRepository) {
        this.authRepository = authRepository;
        this.professorRepository = professorRepository;
    }

    public Professor getProfessor(Long profDRT){
        return professorRepository.findByDrt(profDRT);
    }
    public List<Professor> getAllProfessores(){
        return professorRepository.findAll();
    }

    public Optional<Professor> getProfById(Long turmaId){
        return professorRepository.findById(turmaId);
    }

    public Professor adicionaProfessor(Professor professor) {
        var prof = professorRepository.saveAndFlush(professor);

        Auth loginProf = new Auth();
        loginProf.setUsername(prof.getDrt());
        loginProf.setPassword("mackenzie");
        authRepository.saveAndFlush(loginProf);

        return prof;
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
