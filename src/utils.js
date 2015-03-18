'use strict';

import extend from 'xtend';
import deepEqual from 'deep-equal';

export function applyDefaults (defaults, items) {
  return items.map(item => extend(defaults, item));
}

export function contains (actual, expected) {
  const keys = Object.keys(expected);
  return !keys.length || !keys
    .filter((key) => {
      return !deepEqual(actual[key], expected[key]);
    })
    .length;
}