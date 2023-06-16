'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.txns = [];
    this.locale = navigator.language;

    console.log(`Thank you for opening an account ${this.owner}`);
  }

  transact(val) {
    this.txns.push(val);
  }

  deposit(val) {
    this.transact(val);
  }

  withdraw(val) {
    this.transact(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) this.deposit(val);
  }
}
