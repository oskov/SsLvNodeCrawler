import {flatArray} from "./flatArray";

test('test flatArray #1', () => {
    const input = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
    expect(flatArray(input)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
})
