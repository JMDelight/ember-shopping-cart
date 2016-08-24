import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    save(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('admin');
    }
  }
});
