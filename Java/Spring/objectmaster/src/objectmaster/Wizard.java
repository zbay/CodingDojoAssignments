package objectmaster;

public class Wizard extends Human {
	public Wizard() {
		super();
		this.health = 50;
		this.intelligence = 8;
	}
	public void heal(Human patient) {
		patient.setHealth(patient.getHealth() + this.intelligence);
	}
	public void fireball(Human target) {
		target.setHealth(target.getHealth() - (this.intelligence * 3));
	}
}
