'use strict';

import deepEqual from 'deep-equal';
import applyDefaults from './defaults';
import cards from './cards.json';

export var foo = 'bar';

const defaults = {
  debit: false,
  prepaid: false,
  dispute: false,
  immediate: false,
  error: null,
  checks: true
};

cards = applyDefaults(defaults, cards);

export function all () {
  return cards.slice();
}

export function valid (type) {
  return cards.filter(card => card.valid && (!type || card.issuer === type));
}

export function fails (type, filter) {
  filter = filter || {};
  if (filter.checks) filter.checks.sort();
  return cards
    .filter(card => !card.valid && card.error.type === type)
    .filter(card => contains(card.error, filter));
}

function contains (actual, expected) {
  const keys = Object.keys(expected);
  return !keys.length || !keys
    .filter((key) => {
      return !deepEqual(actual[key], expected[key]);
    })
    .length;
}