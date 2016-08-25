import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  testingItem: 0,
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
      // this.set("testingItem", this.get('testingItem') + 1);
      // console.log("hi ", this.get('testingItem'));
      // var product = this.get('product');
      // product.set('quantity', product.get('quantity') + 1);
      // product.save();
    },
    save(params) {
      this.sendAction('save', params);
    },
  },
  availableItems: Ember.computed('shoppingCart.items.length', function() {
    console.log("working");
    var numberInCart = 0;
    var currentItem = this.get('product');
    console.log(currentItem.get('quantity'));
    this.get('shoppingCart.items').forEach(function(item) {
      if (item === currentItem) {
        numberInCart ++;
      }
    });
    return (currentItem.get('quantity') - numberInCart);
  }),
});
