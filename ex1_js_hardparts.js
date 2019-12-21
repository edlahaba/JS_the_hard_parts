// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return `${word}s`;
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  const result = [];

  for(let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  for(let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// see for yourself if your forEach works!
let alphabet = '';
let letters = ['a','b','c','d'];
forEach(letters, (char) => { alphabet += char; });
console.log(alphabet);

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  const result = [];

  forEach(array, value => { result.push(callback(value)); });

  return result;
}

//Extension 2
function reduce(array, callback, initialValue) {
  array.forEach(value => { initialValue = callback(initialValue, value); })
  return initialValue;
}

console.log(reduce([1,2,3], (x,y) => { return x + y; }, 0));
// should log: 6

//Extension 3
function intersection(...arrays) {
  var result = {};

  reduce(arrays, (result, array) => {
    array.forEach(number => {
      result[number] = result[number] || [];
      result[number].push(number)
    });

    return result;
  }, result);

  return Object.keys(result).filter(key => {if (result[key].length == arrays.length) return key});
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
  var result = {};

  reduce(arrays, (result, array) => {
    array.forEach(number => { result[number] = result[number] || true; });

    return result;
  }, result);

  return Object.keys(result);
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  let result = {};

  forEach(array1, (value, key) => {
    if(callback(value) == array2[key]) result[value] = array2[key];
  });

  return result;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  let result = {};

  forEach(arrVals, (value) => {
    result[value] = [];
    forEach(arrCallbacks, (callback) => {
      result[value].push(callback(value));
    });
  });

  return result;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//Extension 7
function objectFilter(obj, callback) {
  const arry = {};

  for(key in obj) {
    if(callback(key) == obj[key]) { arry[key] = obj[key]; }
  }

  return arry;
}

const cities = {
  London: 'LONDON',
  LA: 'Los Angeles',
  Paris: 'PARIS',
};

console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}
