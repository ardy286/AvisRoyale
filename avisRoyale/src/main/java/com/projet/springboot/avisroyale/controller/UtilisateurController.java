package com.projet.springboot.avisroyale.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UtilisateurController {

    @GetMapping("/ConnexionUtilisateur")
    public String ConnexionUtilisateur(Model model) {
        return "utilisateur/monoPageUtilisateur";
    }
}
