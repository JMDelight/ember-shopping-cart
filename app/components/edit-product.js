import Ember from 'ember';

export default Ember.Component.extend({
  editProduct: false,
  actions: {
    editProductShow() {
      this.set('editProduct', true);
    },
    edit(product) {
      product.save();
      this.set('editProduct', false);
      this.transitionTo('admin');
    }
  }
});
