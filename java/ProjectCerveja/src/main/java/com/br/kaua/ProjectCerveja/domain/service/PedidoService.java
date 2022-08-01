/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.br.kaua.ProjectCerveja.domain.service;

import com.br.kaua.ProjectCerveja.domain.model.Pedido;
import com.br.kaua.ProjectCerveja.domain.model.StatusPedido;
import com.br.kaua.ProjectCerveja.domain.repository.PedidoRepository;
import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author devsys-b
 */
public class PedidoService {

    @Autowired

    private PedidoRepository pedidoRepository;

    public Pedido criar(Pedido pedido) {
        pedido.setData_hora_pedido(LocalDateTime.now());
        pedido.setStatus(StatusPedido.CONFIRMADO);

        return pedidoRepository.save(pedido);
    }

}
