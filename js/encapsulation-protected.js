'use strict';

class Account {
  // Public fileds (added to the instances NOT prototype)
  locale = navigator.language;

  // Private fileds
  #txns = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;

    console.log(`Thank you for opening an account ${this.owner}`);
  }

  getTxns() {
    return this._txns;
  }

  _transact(val) {
    this._txns.push(val);
  }

  deposit(val) {
    this._transact(val);
  }

  withdraw(val) {
    this._transact(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) this.deposit(val);
  }
}

const acct1 = new Account('Dan', 'UGX', 1111);
console.log(acct1);

acct1.deposit(450);
acct1.withdraw(300);
acct1.requestLoan(1000);
