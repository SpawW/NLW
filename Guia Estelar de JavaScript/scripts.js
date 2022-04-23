console.log("Bem vindos ao starter!");
let weight;
console.log("1", "weight type", typeof weight);
let student = {
  name: "João",
  age: 20,
  stars: 4.8,
  weight: 45,
  isSubscribed: true,
};
console.log("2", "student type", typeof student);

let students = {};

console.log("3", "students type", typeof students);

console.log(
  "4",
  `${student.name} tem ${student.age} anos e pesa ${student.weight} kg`
);

students = [];

console.log("5", "students type", typeof students);

students = [student];

console.log("6", "students", students);

console.log("7", "students[0]", students[0]);

students[1] = {
  name: "Maria",
  age: 24,
  stars: 5.0,
  weight: 35,
  isSubscribed: true,
};
console.log("8", "students[1]", students[1]);


console.log("9", "resultado de analise do codigo:", "undefined");

console.log(a);
var a = 1;