import {StringOrNumber} from "./types";

export const swap = <T extends StringOrNumber>(arr: T[], a: number, b: number): void => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

export const isBigger = <T extends StringOrNumber>(a: T, b: T): boolean => {
    return a > b
}