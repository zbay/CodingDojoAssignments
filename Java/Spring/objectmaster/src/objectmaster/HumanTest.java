package objectmaster;

public class HumanTest {

	public static void main(String[] args) {
		Human hatfield = new Human();
		Human mccoy = new Human();
		System.out.println(mccoy.getHealth()); // 100
		hatfield.attack(mccoy);
		System.out.println(mccoy.getHealth()); // 97
		Ninja ninny = new Ninja();
		Samurai marcus = new Samurai();
		Samurai domoarigato = new Samurai();
		System.out.println(Samurai.howMany()); // 2
		Wizard mage = new Wizard();
		marcus.deathBlow(hatfield);
		System.out.println(hatfield.getHealth()); // 0
		System.out.println(marcus.getHealth()); // 100
		marcus.meditate();
		System.out.println(marcus.getHealth()); // 200
		mage.fireball(ninny);
		System.out.println(ninny.getHealth()); // 76
		mage.heal(mccoy);
		System.out.println(mccoy.getHealth()); // 105
		ninny.runAway(); 
		System.out.println(ninny.getHealth()); // 66
		ninny.steal(domoarigato);
		System.out.println(ninny.getHealth()); // 76
		System.out.println(domoarigato.getHealth()); // 190
	}
}
