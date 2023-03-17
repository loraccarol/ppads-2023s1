package com.api.escolaoctogono.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.escolaoctogono.service.core.TurmaService;

@RestController
@RequestMapping("/turmas")
public class TurmaController {
    
    private final TurmaService turmaService;

    public TurmaController(TurmaService turmaService) {
        this.turmaService = turmaService;
    }

    @GetMapping(value = "/", produces = {"application/json"})
    public ResponseEntity getTurmas() {

        return new ResponseEntity<>(turmaService.getAllTurmas(), HttpStatus.OK);
    }

}
