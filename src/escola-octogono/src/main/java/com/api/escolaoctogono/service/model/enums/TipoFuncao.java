package com.api.escolaoctogono.service.model.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum TipoFuncao {
    PRINCIPAL(0, "PRINCIPAL"),
    ESPECIFICO(1, "ESPECIFICO");

    @JsonValue
    int codigo;
    String descricao;

    TipoFuncao(int codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

}
