const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
  indextoRemove = this.dinosaurCollection.indexOf(dinosaur);
  this.dinosaurCollection.splice(indextoRemove, 1);
}

Park.prototype.mostPopularDinosaur = function () {
 let mostPopular = 0;
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

// These three functions need refactoring as there is a lot of repeated code!

Park.prototype.totalVisitorsPerDay = function () {
  let total=0;
  for (dinosaur of this.dinosaurCollection) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.totalVisitorsPerYear = function () {
  let total=0;
  for (dinosaur of this.dinosaurCollection) {
    total += dinosaur.guestsAttractedPerDay;
  }
  annualTotal = total * 365;
  return annualTotal
  // this.dinosaurCollection.totalVisitorsPerDay();
  // let totalPerYear = totalPerDay * 365;
}

Park.prototype.totalAnnualRevenue = function () {
  let total=0;
  for (dinosaur of this.dinosaurCollection) {
    total += dinosaur.guestsAttractedPerDay;
  }
  const annualTotal = total * 365;
  const annualRevenue = annualTotal * this.ticketPrice;
  return annualRevenue;
}



module.exports = Park;
