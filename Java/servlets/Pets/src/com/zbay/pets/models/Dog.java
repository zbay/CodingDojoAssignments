package com.zbay.pets.models;

public class Dog extends Animal implements Pet {

	public Dog() {
		super();
	}
	public Dog(String name, String breed, int weight) {
		super(name, breed, weight);
	}
	
	@Override
	public String showAffection() {
		String response = "Your " + this.getBreed() + "dog, " + this.getName();
		if(this.getWeight() < 30) {
			return response + " jumps in your lap";
		}
		else {
			return response + " wags its tail";
		}
	}

}
