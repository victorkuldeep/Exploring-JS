console.log("Exploring Java Script")
// Defining an Object
let student  = {
    firstName : "Kuldeep",
    lastName : "Singh",
    city : "Noida"
}
// console.log(student.city); // One way of accessing
// console.log(student["city"]); // Another way of accessing
// console.log(typeof student);
const heros = [1,2,3,4,5]
let newHeros = [...heros]
newHeros.push(6,7,8)
console.log(newHeros);
newHeros.pop()
