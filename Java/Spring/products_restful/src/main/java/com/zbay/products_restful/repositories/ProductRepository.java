package com.zbay.products_restful.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.zbay.products_restful.models.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {
	List<Product> findAll();
}
