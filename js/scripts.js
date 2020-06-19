//business logic
Customer = function(firstName, lastName, address, cart) {
  this.firstName = firstName;
  this.lastName = lastName;
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

  const newCustomer = new Customer;
  const cart = new Cart;
  let pizzaOne = new Pizza;

  $("#build").click(function(event) {
    event.preventDefault();

    newCustomer.firstName = $("input#first-name").val();
    newCustomer.lastName = $("input#last-name").val();
    const street = $("input#street-address").val();
    const city = $("input#city-address").val();
    const state = $("input#state-address").val();
    const zip = $("input#zip-address").val();
    newCustomer.delivery = $("#delivery").val();

    newCustomer.address = [];
    newCustomer.address.push(street, city, state, zip);
    console.log(newCustomer);

    $("#customer-info").hide();
    $("#size-select").show();
  });

  $("#choose-sauce").click(function() {

    pizzaOne.size = $("#size").val();

    $("#size-select").hide();
    $("#sauce-select").show();

    console.log(pizzaOne);
  });

  $("#choose-cheese").click(function() {

    pizzaOne.sauce = $("#sauce").val();

    $("#sauce-select").hide();
    $("#cheese-select").show();

    console.log(pizzaOne);
  });

  $("#choose-meat").click(function() {

    pizzaOne.cheese = $("#cheese").val();

    $("#cheese-select").hide();
    $("#meat-select").show();

    console.log(pizzaOne);
  });
});