package com.api.escolaoctogono.service.model.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum NumChamada {
    PRIMEIRA(0),
    SEGUNDA(1);

    @JsonValue
    int codigo;

    NumChamada(int codigo) {
        this.codigo = codigo;
    }
}
