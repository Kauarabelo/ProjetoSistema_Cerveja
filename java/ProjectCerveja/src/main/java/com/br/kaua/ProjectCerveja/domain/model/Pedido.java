/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.br.kaua.ProjectCerveja.domain.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

/**
 *
 * @author devsys-b
 */
@Entity
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Cliente cliente;

    private String obs;

    private StatusPedido status;

    @NotBlank
    private LocalDateTime data_hora_pedido;
    private LocalDateTime data_hora_entrega;
    
    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name = "pedido_id", referencedColumnName = "id")
    private List<Item> itens = new ArrayList<>();
    

    public Pedido() {
    }

    public Pedido(Long id, Cliente cliente, StatusPedido status, String obs, LocalDateTime data_hora_pedido, LocalDateTime data_hora_entrega, List<Item> itens) {
        this.id = id;
        this.cliente = cliente;
        this.status = status;
        this.obs = obs;
        this.data_hora_pedido = data_hora_pedido;
        this.data_hora_entrega = data_hora_entrega;
        this.itens = itens;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public StatusPedido getStatus() {
        return status;
    }

    public void setStatus(StatusPedido status) {
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getObs() {
        return obs;
    }

    public void setObs(String obs) {
        this.obs = obs;
    }

    public LocalDateTime getData_hora_pedido() {
        return data_hora_pedido;
    }

    public void setData_hora_pedido(LocalDateTime data_hora_pedido) {
        this.data_hora_pedido = data_hora_pedido;
    }

    public LocalDateTime getData_hora_entrega() {
        return data_hora_entrega;
    }

    public void setData_hora_entrega(LocalDateTime data_hora_entrega) {
        this.data_hora_entrega = data_hora_entrega;
    }
    
    public List<Item> getItens() {
        return itens;
    }

    public void setItens(List<Item> itens) {
        this.itens = itens;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 79 * hash + (int) (this.id ^ (this.id >>> 32));
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Pedido other = (Pedido) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }

}
