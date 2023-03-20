package com.api.escolaoctogono.controller;

import com.api.escolaoctogono.service.core.AlunoService;
import com.api.escolaoctogono.service.model.Aluno;
import com.api.escolaoctogono.service.model.Turma;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/alunos")
public class AlunoController {

    private final AlunoService alunoService;

    public AlunoController(AlunoService alunoService) {
        this.alunoService = alunoService;
    }

    @GetMapping("/{turmaId}")
    public ResponseEntity<> getAlunos(@PathVariable("turmaId") Turma turmaId){

        return new ResponseEntity<>(aluno, HttpStatus.OK);
    }

    @PostMapping ("/criar/{turmaId}")
    public ResponseEntity<Aluno> criarAluno(@PathVariable("turmaId") Turma turmaId, @RequestBody Aluno aluno) {

        Aluno novoAluno = alunoService.criaAluno(aluno, turmaId);
        return new ResponseEntity<>(novoAluno, HttpStatus.CREATED);
    }
}
