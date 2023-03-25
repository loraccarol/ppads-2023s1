package com.api.escolaoctogono.controller;

import javax.management.relation.RoleNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.escolaoctogono.service.core.ProfessorService;
import com.api.escolaoctogono.service.model.Professor;

@RestController
@RequestMapping("/professores")
@CrossOrigin(origins = "http://localhost:3000")
public class ProfessorController {
    private final ProfessorService professorService;

    public ProfessorController(ProfessorService professorService) {
        this.professorService = professorService;
    }

    @GetMapping(value = "/", produces = {"application/json"})
    public ResponseEntity<Object> getAllProfessores() {
        return new ResponseEntity<>(professorService.getAllProfessores(), HttpStatus.OK);
    }

    @GetMapping(value = "/{profDRT}", produces = {"application/json"})
    public ResponseEntity<Object> getProfessor(@PathVariable Long profDRT) {
        return new ResponseEntity<>(professorService.getProfessor(profDRT), HttpStatus.OK);
    }

    @PostMapping("/criar/professor")
    public ResponseEntity<Professor> criar(@RequestBody Professor professor) {

        Professor novoProf = professorService.adicionaProfessor(professor);

        return new ResponseEntity<>(novoProf, HttpStatus.CREATED);
    }

    @PutMapping("/professor/{profDRT}")
    public ResponseEntity<Professor> update(@PathVariable("profDRT") Long profDRT,
            @RequestBody Professor professor) throws RoleNotFoundException {
        Professor novoProf = professorService.atualizaProfessor(professor);
        return new ResponseEntity<>(novoProf, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/professor/{profDRT}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("profDRT") long profDRT) {
        professorService.deleteProf(profDRT);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

}
