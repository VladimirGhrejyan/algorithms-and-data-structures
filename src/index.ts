import {bubbleSort} from "./algorithms/bubble-sort";

const arr = [6, 1, 59, 14, 887, 19, 3, 99, 47, 502]

console.log(bubbleSort<(typeof arr)[number]>(arr))