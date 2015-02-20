describe('Pizza', function() {
  describe('toppings', function() {
    it('will start empty', function() {
      var dinner = Object.create(Pizza);
      expect(dinner.toppings).to.eql([]);
    });
  });

  describe('init', function() {
    it('will give an instance of Pizza its own toppings', function() {
        var lunch = Object.create(Pizza);
        lunch.init()
        expect(lunch.toppings).to.eql([]);
    });

    it('will give an instance of Pizza its own diameter', function() {
      var breakfast = Object.create(Pizza);
      breakfast.init();
      expect(breakfast.diameter).to.equal(0);
    });
  });

  describe('slices', function() {
    it('will not slice a pizza with a diameter < 6 inches', function() {
      var snacktime = Object.create(Pizza);
      snacktime.init();
      snacktime.diameter = 4;
      expect(snacktime.slices()).to.equal(1);
    });
    it('will slice pizzas with diameters (6 <= dia <= 12) into six', function() {
      var feedingtime = Object.create(Pizza);
      feedingtime.init();
      feedingtime.diameter = 12;
      expect(feedingtime.slices()).to.equal(6);
    });
    it('will slice pizzas with diameters (12 < dia <= 28) into eight', function() {
      var partytime = Object.create(Pizza);
      partytime.init();
      partytime.diameter = 26;
      expect(partytime.slices()).to.equal(8);
    });
    it('will cut up pizzas with diameters larger than 28 into approx. 4 inch sqs', function() {
      var feedingfrenzy = Object.create(Pizza);
      feedingfrenzy.init();
      feedingfrenzy.diameter = 50;
      expect(feedingfrenzy.slices()).to.equal(36)
    });
  });

});
