public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount(50.00, 100.00);
        BankAccount account2 = new BankAccount(0.00, 10.50);
        BankAccount account3 = new BankAccount(60.00, 210.50);
        
        
        
        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney
        account1.depositChecking(4);
        account2.depositChecking(120);
        account3.depositChecking(20); 
        account1.depositSavings(10); 
        account2.depositSavings(10); 
        account3.depositSavings(10); 


/*
        double account2Checking = account2.getCheckingBalance();
        System.out.println(account2Checking);

        double account3Checking = account3.getCheckingBalance();
        System.out.println(account3Checking);



        double account2Savings = account2.getSavingsBalance();
        System.out.println(account2Savings);

        double account3Savings = account3.getSavingsBalance();
        System.out.println(account3Savings);
*/


        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        // Static Test (print the number of bank accounts and the totalMoney)
        account1.withdrawChecking(10);
        account1.withdrawSavings(20);

        double account1Checking = account1.getCheckingBalance();
        System.out.println(account1Checking);

        double account1Savings = account1.getSavingsBalance();
        System.out.println(account1Savings);

        double account1Total = account1.getBalance();
        System.out.println(account1Total);


    }
}
