import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  uniqueItems: [],
  uniqueItemsCount: [],
  cartTotal2: 0,

  add(item) {
    var unique = this.get('uniqueItems');
    var counts = this.get('uniqueItemsCount');
    this.get('items').pushObject(item);
    if(!unique.includes(item)) {
      unique.pushObject(item);
      counts.push(1);
    } else {
      counts[unique.indexOf(item)] = counts[unique.indexOf(item)] + 1;
    }
  },
  cartTotal: Ember.computed('items.length', function() {
    var runningTotal = 0;
    this.get("items").forEach(function(item) {
      runningTotal += item.get('cost');
    });
    return runningTotal;
  }),
});
