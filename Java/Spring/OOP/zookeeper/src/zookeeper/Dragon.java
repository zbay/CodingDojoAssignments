package zookeeper;

public class Dragon extends Mammal {
	public Dragon() {
		this.energyLevel = 300;
	}
	public void fly() {
		System.out.println("whizz");
		this.energyLevel -= 50;
	}
	public void eatHumans() {
		System.out.println("omnomnom");
		this.energyLevel += 25;
	}
	public void attackTown() {
		System.out.println("foom");
		this.energyLevel -= 100;
	}
}
