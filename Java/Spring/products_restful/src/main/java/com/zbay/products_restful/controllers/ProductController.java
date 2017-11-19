package com.zbay.products_restful.controllers;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zbay.products_restful.models.Product;
import com.zbay.products_restful.services.ProductService;

@RestController
//@RequestMapping("/products")
public class ProductController {
	private final ProductService productService;
	
	public ProductController(ProductService productService) {
		this.productService = productService;
	}
	
	@GetMapping("/products")
	public ResponseEntity allProducts() {
		return new ResponseEntity(this.productService.getAll(), HttpStatus.OK);
	}
	
	@PostMapping(value="/products")
	public ResponseEntity newProduct(@RequestBody Product product) {
		return new ResponseEntity(this.productService.addProduct(product), HttpStatus.OK);
	}
	
	@GetMapping("/products/{id}")
	public ResponseEntity getProduct(@PathVariable("id") long id) {
		return new ResponseEntity(this.productService.getOne(id), HttpStatus.OK);
	}
	
	@DeleteMapping("/products/{id}")
	public ResponseEntity deleteProduct(@PathVariable("id") long id) {
		return new ResponseEntity(this.productService.deleteProduct(id), HttpStatus.OK);
	}
	
	@PutMapping("/products/{id}")
	public ResponseEntity putProduct(@PathVariable("id") long id, @RequestBody Product product) {
		return new ResponseEntity(this.productService.updateProduct(product, id), HttpStatus.OK);	
	}
	
	@PatchMapping("/products/{id}")
	public ResponseEntity sellProduct(@PathVariable("id") long id, @RequestBody Map<String, String> payload) {
		return new ResponseEntity(this.productService.sellProduct(id, Integer.parseInt(payload.get("sold"))), HttpStatus.OK);
	}
}
