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

import com.api.escolaoctogono.service.core.TurmaService;
import com.api.escolaoctogono.service.model.Turma;

@RestController
@RequestMapping("/turmas")
public class TurmaController {
    
    private final TurmaService turmaService;

    public TurmaController(TurmaService turmaService) {
        this.turmaService = turmaService;
    }

    @GetMapping(value = "/", produces = {"application/json"})
    public ResponseEntity<Object> getTurmas() {
        return new ResponseEntity<>(turmaService.getAllTurmas(), HttpStatus.OK);
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
