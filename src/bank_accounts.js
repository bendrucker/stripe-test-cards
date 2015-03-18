'use strict';

import {applyDefaults} from './utils';
import accounts from './bank_accounts.json';

const defaults = {
  routing_number: '110000000',
  error: null
};

accounts = applyDefaults(defaults, accounts);

export function all () {
  return accounts.slice();
}

export function valid () {
  return accounts.filter(account => account.valid)[0];
}

export function fails (code) {
  return accounts
    .filter(account => !account.valid && account.error.code === code)[0];
}