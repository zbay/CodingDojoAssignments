package objectmaster;

public class HumanTest {

	public static void main(String[] args) {
		Human hatfield = new Human();
		Human mccoy = new Human();
		System.out.println(mccoy.getHealth());
		hatfield.attack(mccoy);
		System.out.println(mccoy.getHealth());
	}
}
