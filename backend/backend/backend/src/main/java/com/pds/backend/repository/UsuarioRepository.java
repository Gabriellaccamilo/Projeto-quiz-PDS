package com.pds.backend.repository;

import com.pds.backend.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

Usuario findByEmail(String email);

}