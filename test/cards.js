'use strict';

import test from 'tape';
import {cards} from '../';

test('all', (t) => {
  t.equal(cards.all().length, 28);
  t.end();
});

test('valid', (t) => {
  t.equal(cards.valid().length, 20);
  t.end();
});

test('fails', (t) => {
  t.equal(cards.fails('check').length, 3, 'no filter');
  t.equal(cards.fails('check', {
    checks: [
      'address_zip'
    ]
  }).length, 1, 'filter');
  t.equal(cards.fails('check', {
    checks: [
      'address_zip',
      'address_line1'
    ]
  }).length, 1, 'filter sort order');
  t.end();
});