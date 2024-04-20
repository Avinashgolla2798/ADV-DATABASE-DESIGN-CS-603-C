// this is query for and operator
db.listingsAndReviews.find({$and: [{amenities: "Kitchen"}, {amenities: "Heating"}]});