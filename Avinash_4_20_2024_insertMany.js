//insertMany
 db.grades.insertMany([
  {
    student_id: 546788,
    products: [
      {
        type: "quiz",
        score: 56,
      },
      {
        type: "homework",
        score: 80,
      },
      {
        type: "quiz",
        score: 76,
      },
      {
        type: "exam",
        score: 90,
      },
    ],
    class_id: 556,
  },
  {
    student_id: 777799,
    products: [
      {
        type: "exam",
        score: 88,
      },
      {
        type: "quiz",
        score: 58,
      },
      {
        type: "quiz",
        score: 78,
      },
      {
        type: "quiz",
        score: 68,
      },
    ],
    class_id: 570,
  },
  {
    student_id: 229944,
    products: [
      {
        type: "exam",
        score: 85,
      },
      {
        type: "homework",
        score: 89,
      },
      {
        type: "quiz",
        score: 50,
      },
      {
        type: "homework",
        score: 98,
      },
    ],
    class_id: 451,
  },
])

