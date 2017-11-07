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
import javax.validation.constraints.Size;

@Entity
@Table(name="categories")
public class Category {
    @Id
    @GeneratedValue
    private Long id;
    
    @Column
	@Size(min=1, max=45, message="Category name must be between 1 and 45 characters!")
	private String name;
    
	@Column(updatable = false)
    private Date created_at;
	
	@Column
    private Date updated_at;
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(
			name = "categories_products",
			joinColumns = @JoinColumn(name="category_id"),
			inverseJoinColumns = @JoinColumn(name="product_id")
	)
	private List<Product> products;
	
	public Category() {}

	public Long getId() {
		return id;
	}

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	public Date getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Date updated_at) {
		this.updated_at = updated_at;
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

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
	
}
