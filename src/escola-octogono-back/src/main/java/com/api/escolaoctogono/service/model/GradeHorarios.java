package com.api.escolaoctogono.service.model;

import com.api.escolaoctogono.service.model.enums.NumChamada;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class GradeHorarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    private Professor professor;

    @ManyToOne
    private Disciplina disciplina;

    @ManyToOne
    private Turma turma;
    
    @Column
    private NumChamada chamada;

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Professor getProfessor() {
        return professor;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }

    public Disciplina getDisciplina() {
        return disciplina;
    }

    public void setDisciplina(Disciplina disciplina) {
        this.disciplina = disciplina;
    }

    public Turma getTurma() {
        return turma;
    }

    public void setTurma(Turma turma) {
        this.turma = turma;
    }

    public NumChamada getChamada() {
        return chamada;
    }

    public void setChamada(NumChamada chamada) {
        this.chamada = chamada;
    }
    

    
}
