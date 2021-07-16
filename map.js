  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums){
  results.push(num * 2);
}

console.log(results);

// Using map()
const multByTwo = function (num) {
  return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) { return num * 2});
console.log(simplified);

// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(arrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

// Return the same as above as objects with the ID and Name still in tact.
const studentsWithIdsAsObj = students.map(function (student) {
  newObj = {"id":student.id, "name":student.name}
  return newObj;
});
console.log(studentsWithIdsAsObj);


// Return identical array but where students have an age as well.
// 32, 26, 28
const newAges = students.map(function (student) {
  switch (student.name) {
    case "Mark": 
      student.age = 32;
      break;
    case "Ariel": 
      student.age = 26;
      break;
    case "Jason": 
      student.age = 28;
      break;
  }
  return student;
});
console.log(newAges);