public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;
    private static int accounts = 0;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances
    // CONSTRUCTOR
    // Be sure to increment the number of accounts
    public BankAccount(){

    }

    public BankAccount(double checkingBalance, double savingsBalance){
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
        this.totalMoney = checkingBalance + savingsBalance;
        accounts++;

    }

    // GETTERS
    // for checking, savings, accounts, and totalMoney
    public double getCheckingBalance() {
        return this.checkingBalance;
    }

    public double getSavingsBalance() {
        return this.savingsBalance;
    }

    public static int getAccounts() {
        return accounts;
    };

    public double getTotalMoney() {
        return this.totalMoney;
    }
    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account
    public void depositChecking(double num) {
        this.checkingBalance += num;
    }

    public void depositSavings(double num) {
        this.savingsBalance += num;
    }
    // withdraw 
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney

    public void withdrawChecking(double num) {
        if(num <= this.checkingBalance){
            this.checkingBalance -= num;
        }
        else{
            System.out.println("Not enough money!");
        }
    }

    public void withdrawSavings(double num) {
        if(num <= this.savingsBalance){
            this.savingsBalance -= num;
        }
        else{
            System.out.println("Not enough money!");
        }
    }

    // getBalance
    // - display total balance for checking and savings of a particular bank account

    public double getBalance(){
        double total = this.savingsBalance + this.checkingBalance;
        return total;
    }
}
