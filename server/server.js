Meteor.publish("trips", function (tripId) {
  return Trips.find({_id: tripId});
});