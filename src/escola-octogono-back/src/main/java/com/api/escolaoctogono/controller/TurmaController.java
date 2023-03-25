package com.api.escolaoctogono.controller;

import javax.management.relation.RoleNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.escolaoctogono.service.core.TurmaService;
import com.api.escolaoctogono.service.model.Turma;

@RestController
@RequestMapping("/turmas")
@CrossOrigin(origins = "http://localhost:3000")
public class TurmaController {
    
    private final TurmaService turmaService;

    public TurmaController(TurmaService turmaService) {
        this.turmaService = turmaService;
    }

    @GetMapping(value = "/", produces = {"application/json"})
    public ResponseEntity<Object> getTurmas() {
        return new ResponseEntity<>(turmaService.getAllTurmas(), HttpStatus.OK);
    }

    @GetMapping(value = "/{turmaId}", produces = {"application/json"})
    public ResponseEntity<Object> getTurma(@PathVariable Long turmaId) {
        return new ResponseEntity<>(turmaService.getTurmaById(turmaId), HttpStatus.OK);
    }

    @PostMapping("/criar/turma")
    public ResponseEntity<Turma> criar(@RequestBody Turma turma) {

        Turma turmas = turmaService.adicionaTurma(turma);

        return new ResponseEntity<>(turmas, HttpStatus.CREATED);
    }

    @PutMapping("/turma/{turmaId}")
    public ResponseEntity<Turma> update(@PathVariable("turmaId") Long turmaId,
            @RequestBody Turma turma) throws RoleNotFoundException {
        Turma novaTurma = turmaService.atualizaTurma(turma);
        return new ResponseEntity<>(novaTurma, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/turma/{turmaId}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("turmaId") long turmaId) {
        turmaService.deleteTurma(turmaId);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

}
