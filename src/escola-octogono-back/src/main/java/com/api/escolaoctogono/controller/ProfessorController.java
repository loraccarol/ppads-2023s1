package com.api.escolaoctogono.controller;

import javax.management.relation.RoleNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.escolaoctogono.service.core.ProfessorService;
import com.api.escolaoctogono.service.model.Professor;

@RestController
@RequestMapping("/professores")
public class ProfessorController {
    private final ProfessorService professorService;

    public ProfessorController(ProfessorService professorService) {
        this.professorService = professorService;
    }

    @GetMapping(value = "/", produces = {"application/json"})
    public ResponseEntity<Object> getAllProfessores() {
        return new ResponseEntity<>(professorService.getAllProfessores(), HttpStatus.OK);
    }

    @PostMapping("/criar/professor")
    public ResponseEntity<Professor> criar(@RequestBody Professor professor) {

        Professor novoProf = professorService.adicionaProfessor(professor);

        return new ResponseEntity<>(novoProf, HttpStatus.CREATED);
    }

    @PutMapping("/professor/{profId}")
    public ResponseEntity<Professor> update(@PathVariable("profId") Long profId,
            @RequestBody Professor professor) throws RoleNotFoundException {
        Professor novoProf = professorService.atualizaProfessor(professor);
        return new ResponseEntity<>(novoProf, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/professor/{profId}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("profId") long profId) {
        professorService.deleteProf(profId);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

}
