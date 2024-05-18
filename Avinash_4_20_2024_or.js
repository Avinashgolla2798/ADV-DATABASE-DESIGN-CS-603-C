//or
db.listingsAndReviews.find({$or: [{amenities: "Kitchen"}, {amenities: "Heating"}]});
