import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  cost: DS.attr('number'),
  image: DS.attr(),
  reviews: DS.hasMany('review', {async: true}),
  quantity: DS.attr('number'),
  averageRating: Ember.computed('reviews', function() {
    var runningTotal = 0;
    var numberOfReviews = 0;
    this.get('reviews').forEach(function(review) {
      runningTotal += review.get('rating');
      numberOfReviews ++;
    });
    if (runningTotal === 0) {
      return 0;
    } else {
      return (runningTotal/numberOfReviews).toFixed(2);
    }
  })
});
