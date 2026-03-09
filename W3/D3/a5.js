const wallet = {
  owner: "User Name",
  balance: 0,
  lastTransaction: null,
  deposit: function(amount) {
    if (typeof amount === 'number' && amount > 0) {
      this.balance += amount;
      this.lastTransaction = { type: "DEPOSIT", amount: amount, balanceAfter: this.balance };
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  },
  withdraw: function(amount) {
    if (typeof amount === 'number' && amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.lastTransaction = { type: "WITHDRAW", amount: amount, balanceAfter: this.balance };
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Invalid withdrawal amount or insufficient funds.");
    }
  }
};

// Example usage and final print:
wallet.deposit(200);
wallet.withdraw(50);
console.log(wallet);