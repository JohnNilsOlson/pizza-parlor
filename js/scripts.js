Cart = function(customer, pizzas, delivery) {
  this.customer = customer;
  this.pizzas = pizzas;
  this.delivery = delivery;
};

Customer = function(name, address) {
  this.name = name;
  this.address = address;
};

Pizza = function(size, meatToppings, vegToppings) {
  this.size = size;
  this.meatToppings = meatToppings;
  this.vegToppings = vegToppings;
};

