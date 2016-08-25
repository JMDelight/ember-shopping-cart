import Ember from 'ember';

export default Ember.Component.extend({
    shoppingCart: Ember.inject.service(),
    actions: {
      checkout() {
        if (confirm('Buy these items for the stated price?')) {
          var items = this.get('shoppingCart.uniqueItems');
          var quantities = this.get('shoppingCart.uniqueItemsCount');
          for(var i = 0; i < items.length; i ++) {
            var workingItem = items[i];
            for (var j = 0; j < this.get('products.length'); j ++) {
              var checkedProduct = this.get('products').toArray()[j];
              if(workingItem === checkedProduct) {
                checkedProduct.set('quantity', (checkedProduct.get('quantity') - quantities[i]));
                checkedProduct.save();
              }
            }
          }
          this.set('shoppingCart.uniqueItems', []);
          this.set('shoppingCart.uniqueItemsCount', []);
          this.set('shoppingCart.items', []);
        }
      },
      nextAction() {

      },
    }
});
