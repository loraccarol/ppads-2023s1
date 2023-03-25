package com.api.escolaoctogono.controller;

import com.api.escolaoctogono.service.core.AlunoService;
import com.api.escolaoctogono.service.model.Aluno;
import com.api.escolaoctogono.service.model.Turma;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.RoleNotFoundException;

@RestController
@RequestMapping("/alunos")
public class AlunoController {

    private final AlunoService alunoService;

    public AlunoController(AlunoService alunoService) {
        this.alunoService = alunoService;
    }

    @GetMapping("/")
    public ResponseEntity<Object> getAll(){
        return new ResponseEntity<>(alunoService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{turmaId}")
    public ResponseEntity<Object> getAlunos(@PathVariable("turmaId") Turma turmaId){

        return new ResponseEntity<>(alunoService.getAlunos(turmaId), HttpStatus.OK);
    }

    @PostMapping ("/criar/{turmaId}")
    public ResponseEntity<Aluno> criarAluno(@PathVariable("turmaId") Turma turmaId, @RequestBody Aluno aluno) {

        Aluno novoAluno = alunoService.criaAluno(aluno, turmaId);
        return new ResponseEntity<>(novoAluno, HttpStatus.CREATED);
    }
    @PutMapping("/aluno/{alunoTia}")
    public ResponseEntity<Aluno> update(@PathVariable("alunoTia") Long alunoTia,
                                            @RequestBody Aluno aluno) throws RoleNotFoundException {
        Aluno novoAluno = alunoService.atualizaAluno(aluno);
        return new ResponseEntity<>(novoAluno, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/aluno/{alunoTia}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("alunoTia") Long alunoTia) {
        alunoService.deleteAluno(alunoTia);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
