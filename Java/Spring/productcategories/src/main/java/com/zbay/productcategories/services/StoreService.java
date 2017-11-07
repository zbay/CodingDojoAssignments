package com.zbay.productcategories.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zbay.productcategories.models.Category;
import com.zbay.productcategories.models.Product;
import com.zbay.productcategories.repositories.CategoryRepository;
import com.zbay.productcategories.repositories.ProductRepository;

@Service
public class StoreService {
	private ProductRepository productRepository;
	private CategoryRepository categoryRepository;
	
	public StoreService(ProductRepository productRepository, CategoryRepository categoryRepository){
		this.productRepository = productRepository;
		this.categoryRepository = categoryRepository;
	}
	
	public void newProduct(Product product) {
		this.productRepository.save(product);
	}
	
	public void newCategory(Category category) {
		this.categoryRepository.save(category);
	}
	
	public void addProductToCategory(Product product, Category category) {
		List<Product> products = category.getProducts();
		products.add(product);
		category.setProducts(products);
		this.categoryRepository.save(category);
	}
	
	public void addCategoryToProduct(Product product, Category category) {
		List<Category> categories = product.getCategories();
		categories.add(category);
		product.setCategories(categories);
		this.productRepository.save(product);
	}
	
	public Product getProductById(Long id) {
		return this.productRepository.findOne(id);
	}
	
	public Category getCategoryById(Long id) {
		return this.categoryRepository.findOne(id);
	}
	
	public List<Product> findAllProductsNotInCategory(Long id){
		return this.productRepository.findAllProductsNotInCategory(id);
	}
	public List<Category> findAllCategoriesNotOnProduct(Long id){
		return this.categoryRepository.findAllCategoriesNotOnProduct(id);
	}
	
}
