import {bubbleSort} from "./algorithms/bubble-sort";
import {selectionSort} from "./algorithms/selection-sort";

const arr = [6, 1, 59, 14, 887, 19, 3, 99, 47, 502]

console.log(bubbleSort<(typeof arr)[number]>(arr), 'BUBBLE SORT')
console.log(selectionSort<(typeof arr)[number]>(arr), 'SELECTION SORT')