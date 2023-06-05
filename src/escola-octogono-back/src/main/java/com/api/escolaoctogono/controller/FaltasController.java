package com.api.escolaoctogono.controller;

import com.api.escolaoctogono.service.core.FaltasService;
import com.api.escolaoctogono.service.model.Aula;
import com.api.escolaoctogono.service.model.Faltas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/faltas")
public class FaltasController {
    
    private final FaltasService faltasService;

    @Autowired
    public FaltasController(FaltasService faltasService) {
        this.faltasService = faltasService;
    }

    @GetMapping("/")
    public ResponseEntity<Object> getAll(){
        return new ResponseEntity<>(faltasService.getAll(), HttpStatus.OK);
    }
    @PostMapping("/falta/criar")
    public ResponseEntity<Faltas> criarFalta(@RequestBody Faltas faltas) {
        Faltas novaFalta = faltasService.criaFaltas(faltas);
        return new ResponseEntity<>(novaFalta, HttpStatus.CREATED);
    }
}
