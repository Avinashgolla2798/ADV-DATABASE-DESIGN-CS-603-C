//GreaterThan
db.grades.find({ "products.score": { $gt:44  } })