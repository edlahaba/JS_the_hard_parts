// Using Object.create
// Inside personStore object, create a property greet where the value is a function that logs "hello".

const personStore = {
  greet: ()=> { console.log('Hello'); }
};

personStore.greet(); // -> Logs 'hello'

// Create a function personFromPersonStore that takes as input a name and an age. When called,
// the function will create person objects using the Object.create method on the personStore object.

function personFromPersonStore(name, age) {
  let obj = Object.create(personStore);
  obj.name = name;
  obj.age = age;

  return obj;
}

let sandra = personFromPersonStore('Sandra', 26);

console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

// Without editing the code you've already written, add an introduce method to the personStore
// object that logs "Hi, my name is [name]".


sandra = Object.create(sandra, {
  introduce: {
    value: () => { console.log(`Hi! my name is ${sandra.name}`); }
  }
});

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'
