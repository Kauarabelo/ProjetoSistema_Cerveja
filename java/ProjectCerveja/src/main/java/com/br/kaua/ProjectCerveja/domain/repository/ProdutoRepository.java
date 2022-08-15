/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.br.kaua.ProjectCerveja.domain.repository;

import com.br.kaua.ProjectCerveja.domain.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author devsys-b
 */
@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{
    
}
