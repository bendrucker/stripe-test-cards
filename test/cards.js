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
  t.ok(cards.fails('check'), 'no filter');
  t.notOk(cards.fails('foo'), 'invalid type');
  t.equal(cards.fails('check', {
    checks: [
      'address_zip'
    ]
  }).number, '4000000000000036', 'filter by checks');
  t.equal(cards.fails('charge', {
    code: 'processing_error'
  }).number, '4000000000000119', 'filter by code');
  t.ok(cards.fails('check', {
    checks: [
      'address_zip',
      'address_line1'
    ]
  }), 'filter checks with different order');
  t.end();
});