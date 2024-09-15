import {StringOrNumber} from "../lib/types";
import {isBigger, swap} from "../lib/utils";

export const selectionSort = <T extends StringOrNumber>(arr: T[]): T[] => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i

        for (let j = i + 1; j < arr.length; j++) {
            if (isBigger<T>(arr[minIndex], arr[j])) {
                swap<T>(arr, j, minIndex)
            }
        }
    }

    return arr
}