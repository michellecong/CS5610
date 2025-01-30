let user;
do {
  user = prompt("Enter your name: ");
} while (isNaN(user) == false || user.length === 1);

console.log(user);

let students = [
  {
    name: "Cristian",
    age: 30,
    location: "Vancouver",
  },
  {
    name: "James",
    age: 40,
    location: "Toronto",
  },
  {
    name: "Garry",
    age: 20,
    location: "Vancouver",
  },
];

function findStudentInVancouver(students) {
  let vancouverStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].location === "Vancouver") {
      console.log(`Student ${students[i].name} is in Vancouver`);
      vancouverStudents.push(students[i].name);
    }
  }
  return vancouverStudents;
}

const returnedArray = findStudentInVancouver(students);
console.log(returnedArray);
