import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['averageRating:desc'],
  sortedProducts: Ember.computed.sort('products', 'sortBy'),
});
