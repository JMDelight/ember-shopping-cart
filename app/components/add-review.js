import Ember from 'ember';

export default Ember.Component.extend({
  addReview: false,
  actions: {
    addReviewShow() {
      this.set('addReview', true);
    },
    save() {
      var params = {
        userName: this.get('userName'),
        date: Date.now(),
        rating: parseInt(this.get('rating')),
        feedback: this.get('feedback'),
        product: this.get('product')
      };
      this.set('addReview', false);
      this.sendAction('save',params);
    },
  },
});
