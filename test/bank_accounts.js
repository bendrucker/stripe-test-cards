'use strict';

import test from 'tape';
import {bankAccounts} from '../';

test('all', (t) => {
  t.equal(bankAccounts.all().length, 6);
  t.end();
});

test('valid', (t) => {
  t.ok(bankAccounts.valid());
  t.end();
});

test('fails', (t) => {
  t.ok(bankAccounts.fails('no_account'), 'valid code filter');
  t.notOk(bankAccounts.fails('foo'), 'invalid code filter');
  t.end();
});