const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map(journey => journey.startLocation);
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map(journey => journey.endLocation);
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const filteredJourneys = this.journeys.filter(journey => journey.transport === transport);
  return filteredJourneys;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const filteredJourneys = this.journeys.filter(journey => journey.distance >= minDistance);
  return filteredJourneys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDisctance = this.journeys.reduce((total, currentJourney) => total + currentJourney.distance, 0);
  return totalDisctance;
};

Traveller.prototype.getAllTransport = function () {
  const allModes = this.journeys.map(journey => journey.transport);
  return allModes;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allModes = this.getAllTransport();
  const uniqueItems = Array.from(new Set(allModes));
  return uniqueItems;
};


module.exports = Traveller;
