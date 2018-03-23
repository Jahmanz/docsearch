import { bear } from './../js/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = bear;

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.foodLevel = 10;
    fuzzy.name = "Fuzzy";
    fuzzy.setHunger();
  });

  it('should return that the bear ate blueberries and the food level should go up 5', function() {
      expect(fuzzy.eatSmall("blueberries")).toEqual("The bear ate the blueberries! Food level goes up 5!");
      expect(fuzzy.foodLevel).toEqual(15);
    });
});
