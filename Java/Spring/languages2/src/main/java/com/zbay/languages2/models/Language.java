package com.zbay.languages2.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="languages")
public class Language {
	
    @Id
    @GeneratedValue
    private Long id;
    
    @Column
	@Size(min=2, max=20, message="Name must be between 2 and 20 characters!")
	private String name;
	
    @Column
	@Size(min=2, max=20, message="Creator must be between 2 and 20 characters")
	private String creator;
	
    @Column
	@Size(min=1, max=45, message="Current version cannot be empty!")
	private String currentVersion;
	 
	public Language() {
		this.name = "Untitled";
		this.creator = "Anonymous";
		this.currentVersion = "0.0";
	}
	public Language(String name, String creator, String currentVersion) {
		this.name = name;
		this.creator = creator;
		this.currentVersion = currentVersion;
	}
	public Long getId() {
		return this.id;
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
	public String getCreator() {
		return creator;
	}
	public void setCreator(String creator) {
		this.creator = creator;
	}
	public String getCurrentVersion() {
		return currentVersion;
	}
	public void setCurrentVersion(String version) {
		this.currentVersion = version;
	}
}