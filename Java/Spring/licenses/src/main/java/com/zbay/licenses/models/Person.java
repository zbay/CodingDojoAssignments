package com.zbay.licenses.models;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="persons")
public class Person {
    @Id
    @GeneratedValue
    private Long id;
    
    @Column
	@Size(min=1, max=255, message="First name must be between 1 and 255 characters!")
	private String first_name;

    @Column
	@Size(min=1, max=255, message="Last name must be between 1 and 255 characters!")
	private String last_name;
    
	@Column(updatable = false)
    private Date created_at;
	
	@Column
    private Date updated_at;
	
	@OneToOne(mappedBy="person", cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	private License license;
    
	public Person() {
		this.first_name = "John";
		this.last_name = "Doe";
	}
	
	public Person(String first_name, String last_name) {
		this.first_name = first_name;
		this.last_name = last_name;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return first_name + " " + last_name;
	}
	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public Date getCreated_at() {
		return created_at;
	}

	public Date getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Date updated_at) {
		this.updated_at = updated_at;
	}

	public License getLicense() {
		return license;
	}

	public void setLicense(License license) {
		this.license = license;
	}
    
}
