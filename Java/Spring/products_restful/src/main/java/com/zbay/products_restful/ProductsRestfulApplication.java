package com.zbay.products_restful;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class ProductsRestfulApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductsRestfulApplication.class, args);
	}
	
	/*@RequestMapping("/")
	public String home() {
		return "index";
	}*/
}
