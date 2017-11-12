package com.zbay.products_restful.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue
    @JsonProperty("id")
    private Long id;
    
    @Column
	@Size(min=1, max=45, message="Product name must be between 1 and 45 characters!")
    @JsonProperty("name")
	private String name;
    
    @Column
	@Size(min=1, max=100, message="Product name must be between 1 and 100 characters!")
    @JsonProperty("description")
	private String description;
    
    @Column
    @DecimalMin(value="0.0", message="Price must be non-negative!")
    @JsonProperty("price")
    private float price;
    
    @Column
    @Min(0)
    @JsonProperty("quantitySold")
    private int quantitySold;
    
	@Column(updatable = false)
	@JsonProperty("createdAt")
    private Date createdAt;
	
	@Column
	@JsonProperty("updatedAt")
    private Date updatedAt;
	
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
	
	public void setQuantitySold(int quantity) {
		this.quantitySold = quantity;
	}
	
	public int getQuantitySold() {
		return this.quantitySold;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public void setCreatedAt(Date date) {
		this.createdAt = date;
	}
    
}