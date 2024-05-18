//LessThanequalto
 db.grades.find({ "products.score": { $lt: 49  } })