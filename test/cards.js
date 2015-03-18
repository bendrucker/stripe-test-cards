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
  })[0].number, '4000000000000036', 'filter by checks');
  t.equal(cards.fails('charge', {
    code: 'processing_error'
  })[0].number, '4000000000000119', 'filter by code');
  t.equal(cards.fails('check', {
    checks: [
      'address_zip',
      'address_line1'
    ]
  }).length, 1, 'filter checks with different order');
  t.end();
});