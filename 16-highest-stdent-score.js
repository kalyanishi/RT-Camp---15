let students = [
  { name: "Aman", score: 85 },
  { name: "Riya", score: 92 },
  { name: "John", score: 92 },
  { name: "Sara", score: 80 }
];

let maxScore = Math.max(...students.map(s => s.score));

let topStudents = students.filter(s => s.score === maxScore);

console.log(topStudents);
