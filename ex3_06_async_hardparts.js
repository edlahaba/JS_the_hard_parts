// Challenge 6

// In this challenge we are going to simulate an AJAX call to get information from a server.
// This is not a real AJAX call, but the asynchonicity is similar.

// Modify the function ajaxSimulate to take an id and a callback function as input.
// After the database array, set a timer that will pass the element of database whose
// index matches id to the callback function after 0 ms.

// Create a second function storeData (outside of ajaxSimulate) that takes data as
// input and assigns it to the dataReceived variable already defined.

// Invoke the ajaxSimulate function with an id of 1 and the storeData function as the callback.
// Immediately after, log to the console the value of dataReceived. What do you expect it to be?

// Without changing anything else, copy-paste the console.log statement somewhere where it will
// log with the info we need.

var dataReceived;

const storeData = (data) => {
  dataReceived = data;
}

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];
  setTimeout(callback(database[id]), 0);
}

ajaxSimulate(1, storeData);

console.log(dataReceived);
