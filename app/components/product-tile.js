import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
      var product = this.get('product');
      product.set('quantity', product.get('quantity') - 1);
      product.save();
    },
    save(params) {
      this.sendAction('save', params);
    }
  }
});
