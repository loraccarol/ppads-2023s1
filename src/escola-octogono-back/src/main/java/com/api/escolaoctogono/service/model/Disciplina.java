package com.api.escolaoctogono.service.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Disciplina {
    
    @Id
    private Long codigo;
    
    @Column
    private String nome;

    @ManyToMany(mappedBy = "disciplinas")
    private List<Professor> professores;

    public Disciplina(Long codigo, String nome, List<Professor> professores) {
        this.codigo = codigo;
        this.nome = nome;
        this.professores = professores;
    }

    public Disciplina() {

    }

    public Long getCodigo() {
        return codigo;
    }

    public void setCodigo(Long codigo) {
        this.codigo = codigo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public List<Professor> getProfessores() {
        return professores;
    }

    public void setProfessores(List<Professor> professores) {
        this.professores = professores;
    }
}
