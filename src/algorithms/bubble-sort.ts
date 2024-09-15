import {StringOrNumber} from "../lib/types";
import {isBigger, swap} from "../lib/utils";

export const bubbleSort = <T extends StringOrNumber>(arr: T[]): T[] => {
    for (let i = 0; i < arr.length; i ++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (isBigger<T>(arr[j], arr[j + 1])) {
                swap<T>(arr, j, j + 1)
            }
        }
    }

    return arr
}