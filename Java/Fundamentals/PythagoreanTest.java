import java.lang.Math;
public class PythagoreanTest {
    public static void main(String[] args){
        Pythagorean p = new Pythagorean();
        double hypotenuse = p.calculateHypotenuse(3, 4);
        System.out.println(hypotenuse);
        hypotenuse = p.calculateHypotenuse(4, 5);
        System.out.println(hypotenuse);
    }
}