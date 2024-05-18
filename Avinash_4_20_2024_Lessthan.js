//LessThan
  db.grades.find({ "products.score": { $lt: 56  } })