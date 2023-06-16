'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._txns = [];
    this.locale = navigator.language;

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
