const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 10);
    dino1 = new Dinosaur('T-Rex', 'Carnivore', 50);
    dino2 = new Dinosaur('Raptor', 'Carnivore', 40);
  });


  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurCollection
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dino1)
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.removeDinosaur(dino2);
    const expected = [dino1];
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    const actual = park.mostPopularDinosaur()
    assert.strictEqual(actual, "T-Rex")
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
