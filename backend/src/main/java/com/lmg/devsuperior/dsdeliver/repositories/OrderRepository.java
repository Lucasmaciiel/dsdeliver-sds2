package com.lmg.devsuperior.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lmg.devsuperior.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
