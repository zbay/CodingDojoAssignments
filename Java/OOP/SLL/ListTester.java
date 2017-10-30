public class ListTester{
    public static void main(String[] args){
        SLL l = new SLL();
        l.add(1);
        l.add(2);
        l.add(3);
        l.add(4);
        l.add(5);
        l.printValues();
        l.remove();
        l.printValues();
        l.add(6);
        l.printValues();
        System.out.println(l.find(3).getValue());
        l.removeAt(3);
        l.printValues();
    }
}