import DS from 'ember-data';

export default DS.Model.extend({
  product: DS.belongsTo('product', {async: true}),
  userName: DS.attr(),
  rating: DS.attr('number'),
  feedback: DS.attr(),
  date: DS.attr('number')
});
