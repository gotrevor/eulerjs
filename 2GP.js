/*global console*/
/* https://projecteuler.net/problem=2
 Sum of the even-valued Fibonacci terms 1 to 4 million.
 */

(function () {
    'use strict';
    var accumulator = 0;
    var fibTermA = 1;
    var fibTermB = 2;
    var sumTempHolder = 0;

    while (fibTermB <= 4000000){
        if (fibTermB %2 === 0){
            accumulator = accumulator + fibTermB;
        }
        sumTempHolder = fibTermA + fibTermB;
        fibTermA = fibTermB;
        fibTermB = sumTempHolder;
    }
    console.log("Sum off even fib terms to 4 million: " + accumulator);
}());
