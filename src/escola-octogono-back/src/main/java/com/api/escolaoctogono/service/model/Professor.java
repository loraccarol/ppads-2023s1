package com.api.escolaoctogono.service.model;

import com.api.escolaoctogono.service.model.enums.TipoFuncao;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Professor {

    @Id
    private Long drt;
    
    @Column
    private String nome;

    @Column(nullable = false)
    private TipoFuncao tipoFuncao;

    @ManyToMany
    private List<Turma> turmas;

    @ManyToMany()
    private List<Disciplina> disciplinas;


    public TipoFuncao getTipoFuncao() {
        return tipoFuncao;
    }

    public void setTipoFuncao(TipoFuncao tipoFuncao) {
        this.tipoFuncao = tipoFuncao;
    }

    public Long getDrt() {
        return drt;
    }

    public void setDrt(Long drt) {
        this.drt = drt;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

}
