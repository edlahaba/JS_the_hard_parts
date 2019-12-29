// Challenge 2

// Write code that will log to the console "Interval Hello!" every 2 seconds (see setInterval).
// Use the given clearAllIntervals function to clear all the messages when you have this
// functionality working.

// setInterval(()=>{ console.log('Interval hello'); }, 2000);
// clearAllIntervals();

// Next, modify your code so that the "Interval Hello!" messages will automatically stop after
// 10 seconds.

 let seconds = 0;

 let intervalId = setInterval(() => {
  seconds++;
  if (seconds === 10) clearInterval(intervalId);
  console.log('Interval Hello!');
 }, 1000)

// Then, modify your code again so that the "Interval Hello!" messages will automatically stop
// after 10 seconds without use of the clearAllIntervals function, and using clearInterval only once.
// Perform research if you are unsure how to do this.

 seconds = 0;
 intervalId = setInterval(() => {

  seconds++;
  if (seconds === 10) clearInterval(intervalId);
  console.log('Interval Hello!');
 }, 1000)


function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}

