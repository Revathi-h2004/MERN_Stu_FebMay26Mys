const wallet = {
  owner: "User Name",
  balance: 0,
  lastTransaction: null,

  // deposit money
  deposit(amount) {
    this.balance += amount;
    this.lastTransaction = "Deposited " + amount;
    console.log("Balance:", this.balance);
  },

  // withdraw money
  withdraw(amount) {
    this.balance -= amount;
    this.lastTransaction = "Withdrew " + amount;
    console.log("Balance:", this.balance);
  }
};

// Example
wallet.deposit(200);
wallet.withdraw(50);

console.log(wallet);