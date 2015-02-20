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
