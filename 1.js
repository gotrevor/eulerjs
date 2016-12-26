'use strict';

let i;
let accum = 0;
for (i=0; i < 1000; i++) {
  if ((i % 3 === 0) || (i % 5 === 0)) {
    accum += i;
  }
}

console.log('done');
console.log(accum);
