//strategy
class Bank {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  pay() {
    return this.processPayment();
  }
}

module.exports = Bank;
