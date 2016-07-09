import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | ignore children');

test('Events directly on own element are propagated', function(assert) {
  visit('/');
  click('.outer');
  andThen(function() {
    assert.equal(find('.counter').text().trim(), '1');
  });
});

test('Events on child elements are not propagated', function(assert) {
  visit('/');
  click('.inner');
  andThen(function() {
    assert.equal(find('.counter').text().trim(), '0');
  });
});

test('Additional curried values can be passed through', function(assert) {
  visit('/second-test');
  click('.outer');
  andThen(function() {
    assert.equal(find('.counter').text().trim(), '42');
  });
});
