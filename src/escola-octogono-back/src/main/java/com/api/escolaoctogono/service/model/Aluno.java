package com.api.escolaoctogono.service.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Aluno {

    @Id
    private Long tia;
    
    @Column
    private String nome;

    @ManyToOne
    private Turma turma;

    public Long getTia() {
        return tia;
    }

    public void setTia(Long tia) {
        this.tia = tia;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Turma getTurma() {
        return turma;
    }

    public void setTurma(Turma turma) {
        this.turma = turma;
    }
}
