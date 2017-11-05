package com.zbay.languages.models;

import javax.validation.constraints.Size;

public class Language { // review for MVC
	@Size(min=2, max=20)
	private String name;
	
	@Size(min=2, max=20)
	private String creator;
	
	@Size(min=1)
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
