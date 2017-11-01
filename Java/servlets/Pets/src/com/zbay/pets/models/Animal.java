package com.zbay.pets.models;

public class Animal {
	private String name;
	private String breed;
	private int weight;
	
	public Animal() {
		this.name = "Animal";
		this.breed = "Unknown";
		this.weight = 0;
	}
	public Animal(String name, String breed, int weight) {
		this.name = name;
		this.breed = breed;
		this.weight = weight;
	}
	public String getName() {
		return this.name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBreed() {
		return this.breed;
	}
	public void setBreed(String breed) {
		this.breed = breed;
	}
	public int getWeight() {
		return this.weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
}
