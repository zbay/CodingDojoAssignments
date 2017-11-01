package com.zbay.pets.models;

public class Cat extends Animal implements Pet {
	
	public Cat() {
		super();
	}
	public Cat(String name, String breed, int weight) {
		super(name, breed, weight);
	}
	@Override
	public String showAffection() {
		return "Your " + this.getBreed() + " cat, " + this.getName() + ", Rubs against your legs";
	}
}
