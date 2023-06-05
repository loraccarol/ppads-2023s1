package com.api.escolaoctogono.controller;

import com.api.escolaoctogono.service.core.AulaService;
import com.api.escolaoctogono.service.model.Aula;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/aulas")
public class AulaController {

    private final AulaService aulaService;

    public AulaController(AulaService aulaService) {
        this.aulaService = aulaService;
    }

    @GetMapping("/")
    public ResponseEntity<Object> getAll(){
        return new ResponseEntity<>(aulaService.getAll(), HttpStatus.OK);
    }

    @PostMapping("/aula/criar")
    public ResponseEntity<Aula> criarAula(@RequestBody Aula aula) {
        Aula novaAula = aulaService.criaAula(aula);
        return new ResponseEntity<>(novaAula, HttpStatus.CREATED);
    }
}
