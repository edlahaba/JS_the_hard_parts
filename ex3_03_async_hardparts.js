// Challenge 3

// Write a function everyXsecsForYsecs that will accept three arguments: a function, an interval
// time in seconds, and a total time in seconds. everyXsecsForYsecs should invoke the given
// function every X times 1000 milliseconds, but then stop invoking the function after Y
// times 1000 milliseconds.

// Write function sayHowdy that will log "Howdy" to the console. Then test your everyXsecsForYsecs
// function by using it to invoke sayHowdy every 1 second for 5 seconds.

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

everyXsecsForYsecs(sayHowdy, 1, 5);

// Now, modify your everyXsecsForYsecs function so it does not use setInterval, but still keeps
// the same functionality.

function everyXsecsForYsecs(func, interval, endTime) {
 for(let i = 1; i <= endTime; i++){
   if(i % interval === 0) setTimeout(func, i * 1000);
 }
}

everyXsecsForYsecs(sayHowdy, 1, 5);

