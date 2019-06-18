const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  indextoRemove = this.dinosaurCollection.indexOf(dinosaur);
  this.dinosaurCollection.splice(indextoRemove, 1);
};

Park.prototype.mostPopularDinosaur = function () {
mostPopular = 0;
  for (i=0; i < this.dinosaurCollection.length; i++) {
    if (this.dinosaurCollection[i].guestsAttractedPerDay > mostPopular) {
      mostPopular = this.dinosaurCollection[i].guestsAttractedPerDay;
    }
  }
  for (dinosaur of this.dinosaurCollection) {
    if (mostPopular === dinosaur.guestsAttractedPerDay)
// if there were multiple dinos with same guests attracted I could add these to an empty array.
    return dinosaur.species;
  }
}

module.exports = Park;
