import java.util.Random;
public class BankAccount {
	private long accountNumber;
	private double checkingBalance;
	private double savingsBalance;
	private static int numAccounts;
	private static int moneySum;
	
	public BankAccount() {
		this.accountNumber = randomNum();
		numAccounts++;
	}
	
	private long randomNum() {
		Random random = new Random();
		String numString = "";
		for(int i = 0; i < 10; i++){
			numString += random.nextInt(10);
		}
		return Long.parseLong(numString);
	}
	
	public long getAccountNumber() {
		return this.accountNumber;
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
		BankAccount.moneySum += amount;
	}
	
	public void withdraw(double amount, boolean checking) {
		if(checking) {
			this.checkingBalance -= amount;
		}
		else {
			this.savingsBalance -= amount;
		}
		BankAccount.moneySum -= amount;
	}
	
	public double getTotalBalance() {
		return this.checkingBalance + this.savingsBalance;
	}
	public double allTheMoney() {
		return BankAccount.moneySum;
	}
}
