package com.zbay.productcategories.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Size;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue
    private Long id;
    
    @Column
	@Size(min=1, max=45, message="Product name must be between 1 and 45 characters!")
	private String name;
    
    @Column
	@Size(min=1, max=100, message="Product name must be between 1 and 100 characters!")
	private String description;
    
    @Column
    @DecimalMin(value="0.0", message="Price must be non-negative!")
    private float price;
    
	@Column(updatable = false)
    private Date createdAt;
	
	@Column
    private Date updatedAt;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(
			name="categories_products",
			joinColumns = @JoinColumn(name="product_id"),
			inverseJoinColumns = @JoinColumn(name= "category_id")
	)
	private List<Category> categories;
	
	public Product() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public List<Category> getCategories() {
		return categories;
	}

	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}
    
}