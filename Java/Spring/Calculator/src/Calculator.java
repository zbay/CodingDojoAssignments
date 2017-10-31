
public class Calculator implements java.io.Serializable{
	private double value;
	private double operandOne;
	private double operandTwo;
	private char operation;
	private String name;
	
	public Calculator() {
		this.value = 0.0;
		this.operandOne = 0.0;
		this.operandTwo = 0.0;
		this.operation = '+';
		this.name = "Calculator";
	}
	
	public void setOperandOne(double operand) {
		this.operandOne = operand;
	}

	public void setOperandTwo(double operand) {
		this.operandTwo = operand;
	}
	
	public void setOperation(char operation) {
		this.operation = operation;
	}
	
	public void performOperation() throws Exception {
		if(this.operation == '+') {
			this.value = this.operandOne + this.operandTwo;
		}
		else if(this.operation == '-') {
			this.value = this.operandOne - this.operandTwo;
		}
		else {
			throw new Exception("Only addition and subtraction are supported by this calculator!");
		}
	}
	
	public double getResults() {
		return this.value;
	}
	
	public void setName(String n) {
		this.name = n;
	}
	
    public String getName(){
        return this.name;
    }
}
