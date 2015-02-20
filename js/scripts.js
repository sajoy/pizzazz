var Order = {
  size: 0,
  pizzas: []
};

var Pizza = {
  toppings: [],
  diameter: 0,

  init: function() {
    this.toppings = [];
    this.diameter = 0;
  },

  slices: function() {
    var dia = this.diameter;
    var slices = 1;
    if (dia < 6) {
      return slices;
    } else if (dia <= 12) {
      slices = 6;
    } else if (dia <= 28) {
      slices = 8;
    } else {
      slices = (Math.floor(Math.pow((Math.floor(dia / 4) / 2), 2)));
    }
    return slices;
  }
};

$(function(){

  var order = Object.create(Order);

  $('#sizeForm').submit(function(event) {
    event.preventDefault();
    var numOfPizza = parseInt($('#orderSize').val());

    for( var i = 0; i < numOfPizza; i++ ) {
      $('#pizzas').append(
        '<div class="onePizza">' +
          '<label for="inches">How many inches of Pizzazz?</label>' +
          '<input type="number" class="inches">' +
          '<label for="cheese">Add cheese?</label>' +
          '<input type="checkbox" value="cheese" class="cheese">' +
          '<label for="pepperoni">Add pepperoni?</label>' +
          '<input type="checkbox" value="pepperoni" class="pepperoni">' +
        '</div>'
      );
    }

    $('#orderForm').show();
    $(this).hide();

  });

  $('#orderForm').submit(function(event) {
    event.preventDefault();
    $('.onePizza').each(function() {
      var newPizza = Object.create(Pizza);
      newPizza.init();

      var inputtedInches = parseInt($(this).find('input.inches').val());
      newPizza.diameter = inputtedInches;

      if($(this).find('.cheese').is(':checked')) {
        newPizza.toppings.push($('.cheese').val());
      }
      if ($(this).find('.pepperoni').is(':checked')) {
        newPizza.toppings.push($('.pepperoni').val());
      }

      order.pizzas.push(newPizza);
    });
  });



});
