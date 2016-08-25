import Ember from 'ember';

export function cartItemQuantity(params/*, hash*/) {
  var items = params[0];
  var quantities = params[1];
  var returnString = '';
  for(var i = 0; i < items.length; i++) {
    returnString += "<div class='container'>";
    returnString +=   "<img class='thumbnail' src=" + items[i].get('image') +
                      " alt=" + items[i].get('name') +" />";
    returnString +=   "<h3>" + items[i].get('name') + " Quantity=" + quantities[i] +
                      " Total Price=$" + items[i].get('cost') * quantities[i] + "</h3>";
    returnString += "</div>";
  }
  return Ember.String.htmlSafe(returnString);
}

export default Ember.Helper.helper(cartItemQuantity);
