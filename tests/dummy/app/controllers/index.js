import Ember from 'ember';

export default Ember.Controller.extend({
  counter: 0,

  incrementCounter() {
    this.set('counter', this.get('counter') + 1);
  }
});
