package objectmaster;

public class Samurai extends Human {
	private static int samurais = 0;
	public Samurai() {
		super();
		this.health = 200;
		Samurai.samurais++;
	}
	
	public void deathBlow(Human target) {
		target.setHealth(0);
		this.health /= 2;
	}
	public void meditate() {
		this.health *= 2;
	}
	public static int howMany() {
		return Samurai.samurais;
	}
}
