package com.pds.backend.controller;

import com.pds.backend.model.Usuario;
import com.pds.backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*") // ESSENCIAL: Permite que o HTML/JS da sua dupla acesse seu Java
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    // LISTAR (GET) - Sua dupla usará para preencher a tabela no HTML
    @GetMapping
    public List<Usuario> listar() {
        return repository.findAll();
    }

    // SALVAR (POST) - Sua dupla usará no formulário de cadastro
    @PostMapping
    public Usuario salvar(@RequestBody Usuario usuario) {
        return repository.save(usuario);
    }

    // BUSCAR POR ID (GET) - Útil para carregar dados antes de editar
    @GetMapping("/{id}")
    public Usuario buscarPorId(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    // EDITAR (PUT) - Sua dupla usará para salvar alterações em um usuário existente
    @PutMapping("/{id}")
    public Usuario editar(@PathVariable Long id, @RequestBody Usuario usuarioAtualizado) {
        return repository.findById(id)
            .map(usuario -> {
                usuario.setNome(usuarioAtualizado.getNome());
                usuario.setEmail(usuarioAtualizado.getEmail());
                usuario.setSenha(usuarioAtualizado.getSenha());
                return repository.save(usuario);
            }).orElse(null);
    }

    // EXCLUIR (DELETE) - Sua dupla usará no botão "Excluir" da tabela
    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
