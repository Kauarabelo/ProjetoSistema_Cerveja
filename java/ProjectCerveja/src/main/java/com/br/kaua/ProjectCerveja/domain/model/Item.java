/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.br.kaua.ProjectCerveja.domain.model;

import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

/**
 *
 * @author devsys-b
 */
@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Produto produto;
    
//    @ManyToOne
//    private Produto id_pedido;

    @NotBlank
    private BigDecimal quantidade;

    private String obs;

    @NotBlank
    private BigDecimal valor_unitario;

    public Item() {
    }

    public Item(Long id, Produto id_produto, Produto id_pedido, BigDecimal qtd, String obs, BigDecimal valor_unitario) {
        this.id = id;
        this.produto = id_produto;
//        this.id_pedido = id_pedido;
        this.quantidade = qtd;
        this.obs = obs;
        this.valor_unitario = valor_unitario;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Produto getId_produto() {
        return produto;
    }

    public void setId_produto(Produto id_produto) {
        this.produto = id_produto;
    }

//    public Produto getId_pedido() {
//        return id_pedido;
//    }
//
//    public void setId_pedido(Produto id_pedido) {
//        this.id_pedido = id_pedido;
//    }

    public BigDecimal getQtd() {
        return quantidade;
    }

    public void setQtd(BigDecimal qtd) {
        this.quantidade = qtd;
    }

    public String getObs() {
        return obs;
    }

    public void setObs(String obs) {
        this.obs = obs;
    }

    public BigDecimal getValor_unitario() {
        return valor_unitario;
    }

    public void setValor_unitario(BigDecimal valor_unitario) {
        this.valor_unitario = valor_unitario;
    }

    
}
