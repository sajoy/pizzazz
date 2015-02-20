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
      expect(feedingfrenzy.slices()).to.equal(36);
    });
    it('will cut up pizzas into 2in sticks or slices depending on the cut selected', function() {
      var feedingfrenzy = Object.create(Pizza);
      feedingfrenzy.init();
      feedingfrenzy.diameter = 9;
      feedingfrenzy.sticks = true;
      expect(feedingfrenzy.slices()).to.equal(5);
    });
    it('cut sticks longer than 10in in half, so there\'s twice as many', function() {
      var feedingfrenzy = Object.create(Pizza);
      feedingfrenzy.init();
      feedingfrenzy.diameter = 15;
      feedingfrenzy.sticks = true;
      expect(feedingfrenzy.slices()).to.equal(16);
    });
    it('cut sticks longer than 10in in half, so there\'s twice as many', function() {
      var feedingfrenzy = Object.create(Pizza);
      feedingfrenzy.init();
      feedingfrenzy.diameter = 26;
      feedingfrenzy.sticks = true;
      expect(feedingfrenzy.slices()).to.equal(26);
    });
    it('cut sticks longer than 30in in thirds, so there\'s three times as many', function() {
      var feedingfrenzy = Object.create(Pizza);
      feedingfrenzy.init();
      feedingfrenzy.diameter = 35;
      feedingfrenzy.sticks = true;
      expect(feedingfrenzy.slices()).to.equal(54);
    });
    it('will continue the pattern of slicing large pizza sticks approx 10in long', function() {
      var superfeedingfrenzy = Object.create(Pizza);
      superfeedingfrenzy.init();
      superfeedingfrenzy.diameter = 50;
      superfeedingfrenzy.sticks = true;
      expect(superfeedingfrenzy.slices()).to.equal(125);
    });
  });

});
