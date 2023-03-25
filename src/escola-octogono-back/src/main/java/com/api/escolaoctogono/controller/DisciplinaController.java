package com.api.escolaoctogono.controller;

import com.api.escolaoctogono.service.core.DisciplinaService;
import com.api.escolaoctogono.service.model.Disciplina;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.RoleNotFoundException;

@RestController
@RequestMapping("/disciplinas")
@CrossOrigin(origins = "http://localhost:3000")
public class DisciplinaController {

    private final DisciplinaService disciplinaService;

    public DisciplinaController(DisciplinaService disciplinaService) {
        this.disciplinaService = disciplinaService;
    }

    @GetMapping("/")
    public ResponseEntity<Object> getAll(){
        return new ResponseEntity<>(disciplinaService.getAllDisciplinas(), HttpStatus.OK);
    }

    @PostMapping("/criar/disciplina")
    public ResponseEntity<Disciplina> criarDisciplina( @RequestBody Disciplina disciplina) {

        Disciplina novaDisciplina = disciplinaService.criaDisciplina(disciplina);
        return new ResponseEntity<>(novaDisciplina, HttpStatus.CREATED);
    }
    @PutMapping("/disciplina/{disciplinaCodigo}")
    public ResponseEntity<Disciplina> update(@PathVariable("disciplinaCodigo") Long disciplinaCodigo,
                                        @RequestBody Disciplina disciplina) throws RoleNotFoundException {
        Disciplina novaDisciplina = disciplinaService.atualizaDisciplina(disciplina);
        return new ResponseEntity<>(novaDisciplina, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/disciplina/{disciplinaCodigo}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("disciplinaCodigo") Long disciplinaCodigo) {
        disciplinaService.deleteDisciplina(disciplinaCodigo);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
