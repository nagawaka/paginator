'use strict';

import { index } from './../';
import assert from 'assert';


describe('App', function () {
  describe('Should Run', function () {
    it('It returns its name', function () {
      assert.equal(index(), 'index');
    });
  });
});
