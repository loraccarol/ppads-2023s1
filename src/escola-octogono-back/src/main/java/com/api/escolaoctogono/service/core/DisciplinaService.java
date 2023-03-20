package com.api.escolaoctogono.service.core;

import com.api.escolaoctogono.service.model.Disciplina;
import com.api.escolaoctogono.service.model.Professor;
import com.api.escolaoctogono.service.repository.DisciplinaRepository;
import com.api.escolaoctogono.service.repository.ProfessorRepository;
import org.springframework.stereotype.Service;

import javax.management.relation.RoleNotFoundException;
import java.util.List;

@Service
public class DisciplinaService {

    private final DisciplinaRepository disciplinaRepository;
    private final ProfessorRepository professorRepository;

    public DisciplinaService(DisciplinaRepository disciplinaRepository, ProfessorRepository professorRepository) {
        this.disciplinaRepository = disciplinaRepository;
        this.professorRepository = professorRepository;
    }

    public List<Disciplina> getAllDisciplinas(){
        return disciplinaRepository.findAll();
    }
    public List<Disciplina> getDisciplinas(Professor professor){
        return disciplinaRepository.findAllByProfessorDrt(professor.getDrt());
    }

    public Disciplina criaDisciplina(Disciplina disciplina, Professor professor){
        professorRepository.findById(professor.getDrt());

        disciplina.setCodigo(disciplina.getCodigo());
        disciplina.setNome(disciplina.getNome());
        disciplina.setProfessor(professor);

        Disciplina criaDisciplina = disciplinaRepository.save(disciplina);
        return criaDisciplina;
    }

    public Disciplina atualizaDisciplina(Disciplina disciplina) throws RoleNotFoundException {

        Disciplina atuDisciplina = disciplinaRepository.findById(disciplina.getCodigo())
                .orElseThrow(() -> new RoleNotFoundException("Não foi possível encontrar essa disciplina"));

        atuDisciplina.setCodigo(disciplina.getCodigo());
        atuDisciplina.setNome(disciplina.getNome());
        atuDisciplina.setProfessor(disciplina.getProfessor());

        final Disciplina novaDisciplina = disciplinaRepository.save(atuDisciplina);
        return novaDisciplina;
    }
    public void deleteDisciplina(Long disciplinaCodigo) {
        disciplinaRepository.deleteById(disciplinaCodigo);
    }
}
