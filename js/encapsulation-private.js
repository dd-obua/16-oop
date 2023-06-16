'use strict';

class Account {
  // Public fields (available on the instances NOT on the prototype)
  locale = navigator.language;

  // Private fields (available on the instances NOT on the prototype)
  #txns = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thank you for opening an account ${this.owner}`);
  }

  // Private methods
  #transact(val) {
    this.#txns.push(val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  // Public methods (together form the public interface)
  getTxns() {
    return this.#txns;
  }

  deposit(val) {
    this.#transact(val);
    return this;
  }

  withdraw(val) {
    this.#transact(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) this.deposit(val);
    return this;
  }
}

const acct1 = new Account('Dan', 'UGX', 1111);
console.log(acct1);

acct1.deposit(450);
acct1.withdraw(300);
acct1.requestLoan(1000);
