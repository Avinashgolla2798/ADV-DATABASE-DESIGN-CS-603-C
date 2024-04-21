//elementsMatch equal operator
db.listingsAndReviews.find({amenities: {$elemMatch: {$eq: "Wifi"}}});