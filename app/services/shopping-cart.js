import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  cartTotal2: 0,

  add(item) {
    this.get('items').pushObject(item);
  },
  cartTotal: Ember.computed('items.length', function() {
    var runningTotal = 0;
    this.get("items").forEach(function(item) {
      runningTotal += item.get('cost');
    });
    return runningTotal;
  }),
});
