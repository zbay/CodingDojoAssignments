package com.zbay.products_restful.services;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.zbay.products_restful.models.Product;
import com.zbay.products_restful.repositories.ProductRepository;

@Service
public class ProductService {
	private ProductRepository productRepository;
	
	public ProductService(ProductRepository productRepository){
		this.productRepository = productRepository;
	}
	
	public List<Product> getAll(){
		return this.productRepository.findAll();
	}
	
	public Product getOne(long id) {
		return this.productRepository.findOne(id);
	}
	
	public List<Product> addProduct(Product product){
		product.setCreatedAt(new Date());
		product.setUpdatedAt(new Date());
		product.setQuantitySold(0);
		this.productRepository.save(product);
		return this.getAll();
	}
	
	public List<Product> deleteProduct(long id) {
		this.productRepository.delete(id);
		return this.getAll();
	}
	
	public List<Product> updateProduct(Product product, long id) {
		Product old = this.productRepository.findOne(id);
		old.setDescription(product.getDescription());
		old.setName(product.getName());
		old.setPrice(product.getPrice());
		old.setUpdatedAt(new Date());
		this.productRepository.save(old);
		return this.getAll();
	}
	
	public Product sellProduct(long id, int quantity) {
		Product product = this.productRepository.findOne(id);
		product.setQuantitySold(quantity + product.getQuantitySold());
		product.setUpdatedAt(new Date());
		this.productRepository.save(product);
		return product;
	}
}
