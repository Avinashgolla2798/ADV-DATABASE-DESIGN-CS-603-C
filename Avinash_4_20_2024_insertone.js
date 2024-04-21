//insertone
  db.grades.insertOne({
  student_id: 6545621,
  products: [
    {
      type: "exam",
      score: 80,
    },
    {
      type: "homework",
      score: 69,
    },
    {
      type: "quiz",
      score: 85,
    },
    {
      type: "homework",
      score: 98,
    },
  ],
  class_id: 250,
})