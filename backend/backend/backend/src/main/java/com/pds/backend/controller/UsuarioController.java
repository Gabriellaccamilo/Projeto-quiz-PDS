package com.pds.backend.controller;

import com.pds.backend.model.Usuario;
import com.pds.backend.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class UsuarioController {

@Autowired
private UsuarioRepository usuarioRepository;

@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody Usuario usuario){

Usuario user = usuarioRepository.findByEmail(usuario.getEmail());

if(user == null){
return ResponseEntity.status(404).body("Email não encontrado");
}

if(!user.getSenha().equals(usuario.getSenha())){
return ResponseEntity.status(401).body("Senha incorreta");
}

return ResponseEntity.ok(user);

}

}