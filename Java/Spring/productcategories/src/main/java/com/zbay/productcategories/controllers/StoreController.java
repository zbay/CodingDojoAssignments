package com.zbay.productcategories.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.zbay.productcategories.models.Category;
import com.zbay.productcategories.models.Product;
import com.zbay.productcategories.services.StoreService;

@Controller
public class StoreController {
	private final StoreService storeService;
	
	public StoreController(StoreService storeService) {
		this.storeService = storeService;
	}
	
    @RequestMapping("/")
    public String home() {
    	return "redirect:/products/new";
    }
    
    @RequestMapping(path="/products/new", method=RequestMethod.GET)
    public String newProduct(Model model) {
    	model.addAttribute("product", new Product());
    	return "products/newProducts";
    }
    
    @RequestMapping(path="/products/new", method=RequestMethod.POST)
    public String createProduct(@Valid @ModelAttribute("product") Product product, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "products/newProducts";
        }
        else{
        	this.storeService.newProduct(product);
        	return "redirect:/products/" + product.getId();
        }
    }
    
    @RequestMapping(path="/categories/new", method=RequestMethod.GET)
    public String newCategory(Model model) {
    	model.addAttribute("category", new Category());
    	return "categories/newCategory";
    }
    
    @RequestMapping(path="/categories/new", method=RequestMethod.POST)
    public String createCategory(@Valid @ModelAttribute("category") Category category, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "categories/newCategory";
        }
        else{
        	this.storeService.newCategory(category);
        	return "redirect:/categories/" + category.getId();
        }
    }
    
    @RequestMapping(path="/products/{id}", method=RequestMethod.GET)
    public String product(@PathVariable("id") long id, Model model) {
    	model.addAttribute("product", this.storeService.getProductById(id));
    	model.addAttribute("categories", this.storeService.findAllCategoriesNotOnProduct(id));
    	return "products/product";
    }   
    
    @RequestMapping(path="/products/{id}", method=RequestMethod.POST)
    public String addCategory(@PathVariable("id") long id, @RequestParam(value="categoryID", required=true) String categoryID) {
    	Product product = this.storeService.getProductById(id);
    	Category category = this.storeService.getCategoryById(Long.parseLong(categoryID));
    	this.storeService.addCategoryToProduct(product, category);
    	return "redirect:/products/" + id;
    }    

    @RequestMapping(path="/categories/{id}", method=RequestMethod.GET)
    public String category(@PathVariable("id") long id, Model model) {
    	model.addAttribute("category", this.storeService.getCategoryById(id));
    	model.addAttribute("products", this.storeService.findAllProductsNotInCategory(id));
    	return "categories/category";
    }  
    
    @RequestMapping(path="/categories/{id}", method=RequestMethod.POST)
    public String addProduct(@PathVariable("id") long id,  @RequestParam(value="productID", required=true) String productID) {
    	Category category = this.storeService.getCategoryById(id);
    	Product product = this.storeService.getProductById(Long.parseLong(productID));
    	this.storeService.addProductToCategory(product, category);
    	return "redirect:/categories/" + id;
    }  
}
