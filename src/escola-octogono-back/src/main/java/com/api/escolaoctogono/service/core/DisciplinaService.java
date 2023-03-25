package com.api.escolaoctogono.service.core;

import com.api.escolaoctogono.service.model.Disciplina;
import com.api.escolaoctogono.service.repository.DisciplinaRepository;
import org.springframework.stereotype.Service;

import javax.management.relation.RoleNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class DisciplinaService {

    private final DisciplinaRepository disciplinaRepository;

    public DisciplinaService(DisciplinaRepository disciplinaRepository) {
        this.disciplinaRepository = disciplinaRepository;
    }

    public List<Disciplina> getAllDisciplinas(){
        return disciplinaRepository.findAll();
    }

    public Optional<Disciplina> getDisiciplina(Long cod) {
        return disciplinaRepository.findById(cod);
    }

    public Disciplina criaDisciplina(Disciplina disciplina){
        disciplina.setCodigo(disciplina.getCodigo());
        disciplina.setNome(disciplina.getNome());

        Disciplina criaDisciplina = disciplinaRepository.save(disciplina);
        return criaDisciplina;
    }

    public Disciplina atualizaDisciplina(Disciplina disciplina) throws RoleNotFoundException {

        Disciplina atuDisciplina = disciplinaRepository.findById(disciplina.getCodigo())
                .orElseThrow(() -> new RoleNotFoundException("Não foi possível encontrar essa disciplina"));

        atuDisciplina.setCodigo(disciplina.getCodigo());
        atuDisciplina.setNome(disciplina.getNome());

        final Disciplina novaDisciplina = disciplinaRepository.save(atuDisciplina);
        return novaDisciplina;
    }
    public void deleteDisciplina(Long disciplinaCodigo) {
        disciplinaRepository.deleteById(disciplinaCodigo);
    }
}
