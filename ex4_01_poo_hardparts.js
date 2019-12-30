// Challenge 1

/*
   Create a function that accepts two inputs (name and age) and returns an object.
   Let's call this function makePerson. This function will:
   create an empty object
   add a name property to the newly created object with its value being the 'name' argument passed into the function
   add an age property to the newly created object with its value being the 'age' argument passed into the function
   return the object
*/

const makePerson = (name, age) => {
  let obj = {};
  obj.name = name;
  obj.age = age;

  return obj;
}

const vicky = makePerson('Vicky', 24);

console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24
