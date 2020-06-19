//business logic
Cart = function(customer, pizzas, delivery) {
  this.customer = customer;
  this.pizzas = pizzas;
  this.delivery = delivery;
};

Customer = function(name, address) {
  this.name = name;
  this.address = address;
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
