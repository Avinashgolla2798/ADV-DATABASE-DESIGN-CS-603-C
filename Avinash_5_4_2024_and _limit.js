 // limit
  db.listingsAndReviews
  .find({bed_type: "Real Bed"}, {property_type: "Kitchen"})
  .sort({name: -1})
  .limit(3);