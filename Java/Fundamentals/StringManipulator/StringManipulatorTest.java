public class StringManipulatorTest{
    public static void main(String[] args){
        StringManipulator sm = new StringManipulator();
        System.out.println(sm.trimAndConcat("         Trim ", "             this"));
        System.out.println(sm.getIndexOrNull("Durp", 'r'));
        System.out.println(sm.getIndexOrNull("Durp", 'a'));
        System.out.println(sm.getIndexOrNull("Drain", "rain"));
        System.out.println(sm.getIndexOrNull("Drain", "durp"));
        System.out.println(sm.concatSubstring("Drained", 1, 5, "cloud"));
    }
}