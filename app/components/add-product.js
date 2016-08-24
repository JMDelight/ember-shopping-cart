import Ember from 'ember';

export default Ember.Component.extend({
  addProduct: false,
  actions: {
    addProductShow() {
      this.set('addProduct', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        cost: parseInt(this.get('cost')),
        quantity: parseInt(this.get('quantity')),
        image: this.get('image')
      };
      this.set('addProduct', false);
      this.sendAction('save', params);
    }
  }
});
