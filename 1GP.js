/*jslint plusplus: true */
/*global console*/

/* https://projecteuler.net/problem=1

Find the sum of all the multiples of 3 or 5 below 1000.
*/

(function () {
    'use strict';
    var counter = 0,
        accumulator = 0;
    for (counter = 1; counter < 1000; counter++) {
        console.log("hey");
        if (counter % 3 === 0 || counter % 5 === 0) {
            accumulator = accumulator + counter;
        }

    }
    console.log(accumulator);
}());
