public class CalculatorTest {
	public static void main(String[] args){
		Calculator c = new Calculator();
        c.setOperandOne(10.5);
        c.setOperation('+');
        c.setOperandTwo(5.2);
        try {
        	c.performOperation();	
        }
        catch(Exception e) {
        	System.out.println("Bad operation!");
        }
        double result = c.getResults();
        System.out.println(result);
	}
}