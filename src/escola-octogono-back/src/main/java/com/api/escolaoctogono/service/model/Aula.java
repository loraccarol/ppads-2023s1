package com.api.escolaoctogono.service.model;

import java.util.Date;

import jakarta.persistence.*;

@Entity
public class Aula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column
    private Date data;

    @Column
    private Integer chamada;

    @ManyToOne(cascade = CascadeType.ALL)
    private Turma turma;

    @OneToOne
    private Disciplina disciplina;

    public Turma getTurma() {
        return turma;
    }

    public void setTurma(Turma turma) {
        this.turma = turma;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

}
