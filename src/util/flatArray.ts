export function flatArray<T = never>(arr: T[][]): T[] {
    return arr.reduce((acc, val) => acc.concat(val), []);
}
