//business logic
Customer = function(name, address, cart) {
  this.name = name;
  this.address = address;
  this.cart = cart;
  this.delivery = delivery;
};

Cart = function(pizzas, delivery) {
  this.pizzas = pizzas;
};

Pizza = function(size, sauce, cheese, meatToppings, vegToppings,) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meatToppings = meatToppings;
  this.vegToppings = vegToppings;
};

Pizza.prototype.addSauce = function(pizza) {

};

Pizza.prototype.addCheese = function(pizza) {

};

Pizza.prototype.addMeat = function(pizza) {

};

Pizza.prototype.addVeg = function(pizza) {

};

//user interface logic
$(document).ready(function() {

  let customer = new Customer;

  $("#build").click(function){

  }
});