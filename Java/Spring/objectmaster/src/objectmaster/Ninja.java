package objectmaster;

public class Ninja extends Human {
	public Ninja() {
		super();
		this.stealth = 10;
	}
	public void steal(Human mark) {
		this.health += this.stealth;
		mark.setHealth(mark.getHealth() - this.stealth);
	}
	public void runAway() {
		this.health -= 10;
	}
}
