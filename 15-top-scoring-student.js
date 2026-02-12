//  Find Top Scoring Student

let students = [
  { name: "Aman", score: 85 },
  { name: "Riya", score: 92 },
  { name: "John", score: 88 },
  { name: "Sara", score: 95 }
];

let result = students.reduce((top,next) =>
    top.score > next.score ? top : next);
console.log(result);
