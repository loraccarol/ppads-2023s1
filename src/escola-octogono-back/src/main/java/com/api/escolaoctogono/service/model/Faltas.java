package com.api.escolaoctogono.service.model;

import com.api.escolaoctogono.service.model.enums.NumChamada;
import jakarta.persistence.*;

@Entity
public class Faltas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long alunoTia;

    @Column
    private Long aulaId;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAlunoTia() {
        return alunoTia;
    }

    public void setAlunoTia(Long alunoTia) {
        this.alunoTia = alunoTia;
    }

    public Long getAulaId() {
        return aulaId;
    }

    public void setAulaId(Long aulaId) {
        this.aulaId = aulaId;
    }

}
