// Challenge 1

/* Write code that will log to the console, 'I am at the beginning of the code'.  Beneath that
   console log, set a timer (see setTimeout) that will log to the console 'I am in the setTimeout
   callback function' after 3 seconds (3000 ms) Next, add code to the end of the challenge to log '
   I am at the end of the code'.

   Now re-run the code.  Make sure the 'console' and 'output' panes are showing (click the tabs
   above if not) and then run your code with the 'Run with JS' button.  Clear the console.
   Change the delay time in the time from 3000 ms to 0.  Think hard about how the order
   should change and then run the code again. */


console.log('I am at the beginning of the code.)');

setTimeout(() => {console.log('I am in the setTimeout callback function'); }, 0);
// Reason cause this is showed in the last position cause this one waits untils the global
// execution context ends whether you set 3000 or 0 ms

