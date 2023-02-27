package com.api.escolaoctogono.service.model;

import com.api.escolaoctogono.service.model.enums.TipoFuncao;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long drt;
    
    @Column
    private String nome;

    @Column
    private TipoFuncao tipoFuncao;

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
