'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this._txns = [];
    this.locale = navigator.language;

    console.log(`Thank you for opening an account ${this.owner}`);
  }

  transact(val) {
    this._txns.push(val);
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

const acct1 = new Account('Dan', 'UGX', 1111);
console.log(acct1);

acct1.deposit(450);
acct1.withdraw(300);
acct1.requestLoan(1000);
