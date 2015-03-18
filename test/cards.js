'use strict';

import test from 'tape';
import {cards} from '../';

test('all', (t) => {
  t.equal(cards.all().length, 28);
  t.end();
});