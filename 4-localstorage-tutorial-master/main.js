//create DOM var
let container = document.getElementById("StudentForm"),
  text = container["name"],
  age = container["number"],
  roll = container["roll"],
  btn = document.querySelector("button"),
  div = document.querySelector(".students");

const studentData = (name, age, roll) => {
  students.push({ name, age, roll });
  localStorage.setItem("student", JSON.stringify(students));
  return { name, age, roll };
};
const students = JSON.parse(localStorage.getItem("student")) || [];
console.log(students);
const createStudent = (student) => {
  let newStudent = document.createElement("div"),
    newName = document.createElement("h3"),
    newAge = document.createElement("p"),
    newRoll = document.createElement("p");
  newName.innerText = "name: " + student.name;
  newAge.innerText = "age: " + student.age;
  newRoll.innerText = "roll: " + student.roll;

  newStudent.append(newName, newAge, newRoll);
  div.appendChild(newStudent);
  div.style.display = localStorage.length === 0 ? "none" : "block";
};
div.style.display = localStorage.length === 0 ? "none" : "block";
console.log(students.length);
students.forEach(createStudent);
container.onsubmit = (e) => {
  e.preventDefault();
  const addStudent = studentData(text.value, age.value, roll.value);
  createStudent(addStudent);
};
