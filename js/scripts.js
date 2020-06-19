//business logic
Customer = function(firstName, lastName, address, cart) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.cart = cart;
};

Cart = function(pizzas, delivery) {
  this.pizzas = pizzas;
  this.delivery = delivery;
};

Pizza = function(size, sauce, cheese, meatToppings, vegToppings, notes, value) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meatToppings = meatToppings;
  this.vegToppings = vegToppings;
  this.notes = notes;
  this.value = value;
};

Cart.prototype.addDeliveryValue = function(cart) {
  switch(this.delivery) {
    case(true):
    this.total += 3;
    break;
  default:
    this.total += 0;
  }
}

Cart.prototype.addPizza = function(cart) {
  this.pizzas.push(pizza);
}

Pizza.prototype.calcBaseValue = function(pizza) {
  switch(this.size) {
    case ("small"):
      this.value = 10;
      break;
    case ("medium"):
      this.value = 11;
      break;
    case ("large"):
      this.value = 12;
      break;
    case ("party"):
      this.value = 13;
  }

  switch(this.cheese) {
    case ("extra"):
      this.value += 1;
      break;
    case ("vegan"):
      this.value += 1;
      break;
    case ("vegan-extra"):
      this.value += 2;
      break;
    default:
      this.value += 0;
  }
}

Pizza.prototype.addMeatValue = function(pizza) {
  for (i = 1; i < this.meatToppings.length; i++) {
    this.value += 1;
  }
}

Pizza.prototype.addVegValue = function(pizza) {
  for (i = 2; i < this.vegToppings.length; i++) {
    this.value += 1;
  }
}

//user interface logic
Customer.prototype.displayName = function(customer) {
  $("#customer-name").text(this.firstName);
}

Pizza.prototype.displayDetails = function(pizza) {
  $("#pizza-value").text(this.value);
}

$(document).ready(function() {

  const newCustomer = new Customer;
  const cart = new Cart;
  let pizza = new Pizza;

  console.log(cart);

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

    $("#customer-info").hide();
    $("#size-select").show();
  });

  $("#choose-sauce").click(function() {

    pizza.size = $("#size").val();

    newCustomer.displayName();
    pizza.calcBaseValue();
    pizza.displayDetails();

    $("#size-select").hide();
    $("#sauce-select").show();
    $("#order").show();
  });

  $("#choose-cheese").click(function() {

    pizza.sauce = $("#sauce").val();   

    $("#sauce-select").hide();
    $("#cheese-select").show();

  });

  $("#choose-meat").click(function() {

    pizza.cheese = $("#cheese").val();

    pizza.calcBaseValue();
    pizza.display();

    $("#cheese-select").hide();
    $("#meat-select").show();

  });

  $("#choose-veg").click(function() {

    pizza.meatToppings = [];

    $("input:checkbox[name=meats]:checked").each(function() {
      const meat = $(this).val();
      pizza.meatToppings.push(meat);
    });

    pizza.addMeatValue();
    pizza.displayDetails();

    $("#meat-select").hide();
    $("#veg-select").show();
 
  });

  $("#choose-intructions").click(function() {
    
    pizza.vegToppings = [];

    $("input:checkbox[name=vegetables]:checked").each(function() {
      const veg = $(this).val();
      pizza.vegToppings.push(veg);
    });

    $("#veg-select").hide();
    $("#instructions").show();

    pizza.addVegValue();
    pizza.displayDetails();
  });

  $("#repeat").click(function() {

    $("#instructions").hide();
    $("#size-select").show();

    console.log(cart);
  });

  $("#checkout").click(function() {

    $("#instructions").hide();
    $("#order").show();

    console.log(cart);
  });
});