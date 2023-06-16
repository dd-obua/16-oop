'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.txns = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }

  deposit(val) {
    this.txns.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }
}

const acct1 = new Account('Dan', 'UGX', 1111);
console.log(acct1);
acct1.txns.push(200);
acct1.txns.push(-100);
