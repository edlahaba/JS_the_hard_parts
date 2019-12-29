/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');
// ...your code below

console.log('I am at the beginning of the code.)');

setTimeout(() => {console.log('I am in the setTimeout callback function'); }, 0);
// Reason cause this is showed in the last position cause this one waits untils the global
// execution context ends whether you set 3000 or 0 ms

console.log('I am at the end of the code');


console.log('End of Challenge 1');
// */// (do not alter this line)


/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');
// ...your code below

// First approach
// setInterval(()=>{ console.log('Interval hello'); }, 2000);

// Second approach, stopped trying each ID
// var seconds = 0;
// let intervalId = setInterval(() => {
//  seconds++;
//  if (seconds == 10) clearAllIntervals();
//  console.log('Interval Hello!');
// }, 1000)

// Third approach, stopped by ID
 var seconds = 0;
 let intervalId = setInterval(() => {
  seconds++;
  if (seconds == 10) clearInterval(intervalId);
  console.log('Interval Hello!');
 }, 1000)


// ...your code above
function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
console.log('End of Challenge 2');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');
// ...your code below

let sayHowdy = () => {
  console.log('Howdy');
}

function everyXsecsForYsecs(func, interval, endTime) {

  (() => {
    let intervalId = setInterval(() => {
      endTime--;
      if(!endTime) clearInterval(intervalId);
      func();
    }, interval * 1000);
  })();
}


console.log('End of Challenge 3');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');
// ...your code below





console.log('End of Challenge 4');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');
// ...your code below




// ...your code above
document.body.style.background = '#def';
console.log('End of Challenge 3');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 6');
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];

}
// ...your code below



console.log('End of Challenge 6');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 7');
// ...your code below





console.log('End of Challenge 7');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 8 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 8');
// ...your code below






console.log('End of Challenge 8');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 9 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 9');
// ...your code below







console.log('End of Challenge 9');
// */// (do not alter this line)


