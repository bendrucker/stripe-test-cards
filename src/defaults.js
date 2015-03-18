'use strict';

import extend from 'xtend';

export default function applyDefaults (defaults, items) {
  return items.map(item => extend(defaults, item));
}