/*jslint plusplus: true */
/*global console*/

/* https://projecteuler.net/problem=1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

(function () {
    'use strict';
    var counter = 0,
        accumulator = 0;
    for (counter = 1; counter < 10; counter++) {
        console.log("hey");
        if (counter % 3 === 0 || counter % 5 === 0) {
            accumulator = accumulator + counter;
        }

    }
    console.log(accumulator);
}());
