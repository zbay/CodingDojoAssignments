import java.util.Random;
public class BankAccount {
	private int accountNumber;
	private double checkingBalance;
	private double savingsBalance;
	private static int numAccounts;
	private static int moneySum;
	
	private BankAccount() {
		this.accountNumber = randomNum();
		numAccounts++;
	}
	
	private int randomNum() {
		Random random = new Random();
		String numString = "";
		for(int i = 0; i < 10; i++){
			numString += random.nextInt(10);
		}
		return Integer.parseInt(numString);
	}
	
	public double getCheckingBalance() {
		return this.checkingBalance;
	}
	public double getSavingsBalance() {
		return this.savingsBalance;
	}
	
	public void deposit(double amount, boolean checking) {
		if(checking) {
			this.checkingBalance += amount;
		}
		else {
			this.savingsBalance += amount;
		}
	}
	
	public void withdraw(double amount, boolean checking) {
		if(checking) {
			this.checkingBalance -= amount;
		}
		else {
			this.savingsBalance -= amount;
		}
	}
	
	public double getTotalBalance() {
		return this.checkingBalance + this.savingsBalance;
	}
}
