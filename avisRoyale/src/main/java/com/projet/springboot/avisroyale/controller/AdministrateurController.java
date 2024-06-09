package com.projet.springboot.avisroyale.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdministrateurController {
    @GetMapping("/ConnexionAdministrateur")
    public String ConnexionAdministrateur(Model model) {
        return "administrateur/monoPageAdministrateur";
    }
}
