Trips = new Meteor.Collection("trips");

Meteor.methods({
	createTrip: function(options) {
		return Trips.insert({
	      owner: this.userId,
	      title: options.title,
	      description: options.description,
	      public: true,
	      imgLinks: options.imgLinks,
	      listedUsers: []
    	});
	}
});