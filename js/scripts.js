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

Pizza.prototype.addSauce = function {

};

Pizza.prototype.addCheese = function {

};

Pizza.prototype.addMeat = function {

};

Pizza.prototype.addVeg = function {

};

//user interface logic
