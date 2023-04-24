package com.api.escolaoctogono.controller;

import com.api.escolaoctogono.service.core.AuthService;

public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

}
