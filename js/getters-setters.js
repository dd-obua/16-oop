'use strict';

const acct = {
  owner: 'Dan',
  txns: [200, 300, 450, 320],

  get latestTxn() {
    return this.txns.pop();
  },

  set latestTxn(val) {
    return this.txns.push(val);
  },
};

console.log(acct.latestTxn);
acct.latestTxn = 500;
console.log(acct.latestTxn);
console.log(acct.txns);
