public class BankAccountTest {
	public static void main(String[] args){
		BankAccount b = new BankAccount();
		System.out.println(b.getAccountNumber());
		b.deposit(1000.0, true);
		b.deposit(500.0, true);
		System.out.println(b.getCheckingBalance());
		b.deposit(10.0,  false);
		b.deposit(5.0, false);
		System.out.println(b.getSavingsBalance());
		System.out.println(b.getTotalBalance());
		System.out.println(b.allTheMoney());
	}
}