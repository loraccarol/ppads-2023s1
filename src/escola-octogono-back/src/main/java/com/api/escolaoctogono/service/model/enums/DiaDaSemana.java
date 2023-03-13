package com.api.escolaoctogono.service.model.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum DiaDaSemana {
    SEGUNDA(2),
    TERCA(3),
    QUARTA(4),
    QUINTA(5 ),
    SEXTA(6);

    @JsonValue
    int dia;

    DiaDaSemana(int dia) {
        this.dia = dia;
    }

}
