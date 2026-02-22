// create a bank account

function createBankAccount(initialBalance = 0){
    let balance = initialBalance;
    const transactionHistory = []

    return {
        deposit(amount){
            if(amount <= 0){
                throw new Error("Minimun amount is required to deposit");
            }
            balance += amount;
            transactionHistory.push(`Deposit:  ${amount}`)
        },

        withdraw(amount){
            if(amount <= 0){
                throw new Error("Minimum amount is required to withdraw")
            }
            if(amount > balance){
                throw new Error("Withdraw amount must be less than or equal to balance")
            }
            balance -= amount;
            transactionHistory.push(`Withdraw: ${amount}`)
        },

        getBalance(){
            return balance;
        },

        getTransactionHistory(){
            return transactionHistory;
        }
    }
}

const account = createBankAccount(100);
account.deposit(50);
account.withdraw(40);
console.log(account.getBalance());
console.log(account.getTransactionHistory());