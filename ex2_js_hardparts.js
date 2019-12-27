function createFunction() {
  return () => { console.log('Hello') }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
function1();



function createFunctionPrinter(input) {
  let savedValue = input;

  return () => { console.log(savedValue); };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const printSample = createFunctionPrinter('sample');
printSample();
const printHello = createFunctionPrinter('hello');
printHello();



function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();1
// willCounter();2
// willCounter();3

// jasCounter();1
// willCounter();4



function addByX(x) {
  let savedSumQuantity = x;

  return (quantityToAdd) => { return x + quantityToAdd; }
}

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
console.log(addByTwo(1));

// now call addByTwo with an input of 2
console.log(addByTwo(2));


//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let savedCallback = func;
  let savedValue = null;

  return (newValue) => {
    savedValue = savedValue || newValue;
    return savedCallback(savedValue);
  }
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6


function after(count, func) {
  let counter = count;
  let savedFunction = func;

  return () => {
    counter--;

    if(!counter) savedFunction();
  }
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed


function delay(func, wait) {
  return () => { setTimeout(func, wait) };
}

let customDelay = delay(() => { console.log('Hello!'); }, 5000);

customDelay();

function rollCall(names) {
  return () => { console.log(names.pop() || 'veryone accounted for'); };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // -> Should log 'Victoria'
rollCaller() // -> Should log 'Juan'
rollCaller() // -> Should log 'Ruth'
rollCaller() // -> Should log 'Everyone accounted for'
