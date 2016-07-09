import Ember from 'ember';

export default Ember.Controller.extend({
  counter: 0,

  incrementCounter(amount) {
    this.set('counter', this.get('counter') + amount);
  }
});
