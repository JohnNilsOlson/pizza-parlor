//business logic
function Customer (firstName, lastName, address, cart) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
};

function Pizza (size, sauce, cheese, meatToppings, vegToppings, notes, value) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meatToppings = meatToppings;
  this.vegToppings = vegToppings;
  this.notes = notes;
  this.value = value;
  this.delivery = delivery;
  this.totalCost = 0;
};

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

Pizza.prototype.calcTotal = function(pizza) {
  
  this.totalCost = this.value;
  
  switch(this.delivery) {
    case ("delivery"):
      this.totalCost += 3;
      break;
    default:
      this.totalCost += 0;
  }
}

//user interface logic
Customer.prototype.displayName = function(customer) {
  $("#customer-name").text(this.firstName);
}

Pizza.prototype.displayDetails = function(pizza) {
  $("#pizza-value").text(this.value);
  $("#pizza-size").text(this.size);
  $("#pizza-sauce").text(this.sauce);
  $("#pizza-cheese").text(this.cheese);
  $("#pizza-meat-toppings").text(this.meatToppings);
  $("#pizza-veg-toppings").text(this.vegToppings);
  $("#total-cost").text(this.totalCost);
}

$(document).ready(function() {

  const newCustomer = new Customer;
  let pizza = new Pizza;

  $("#build").click(function(event) {
    event.preventDefault();

    newCustomer.firstName = $("input#first-name").val();
    newCustomer.lastName = $("input#last-name").val();
    const street = $("input#street-address").val();
    const city = $("input#city-address").val();
    const state = $("input#state-address").val();
    const zip = $("input#zip-address").val();
    pizza.delivery = $("#delivery").val();

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
    
    pizza.displayDetails();

    $("#sauce-select").hide();
    $("#cheese-select").show();

  });

  $("#choose-meat").click(function() {

    pizza.cheese = $("#cheese").val();

    pizza.calcBaseValue();
    pizza.displayDetails();

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

  $("#checkout").click(function() {
    pizza.calcTotal();
    pizza.displayDetails();

    $("#instructions").hide();
    $("#order").show();
  });
});