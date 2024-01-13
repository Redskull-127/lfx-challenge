const filterList = require('./index.js');


test('valid input list', () => {
    const inputList = Array.from({ length: 100 }, (_, index) => (index + 1) * 2);
    const result = filterList(inputList);
    const expected = inputList.filter((_, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);
    expect(result).toEqual(expected);
});

console.log('Running tests...');
console.log('Running InValid Input List Test...');

test('invalid input list', () => {
  const inputList = Array.from({ length: 90 }, (_, index) => (index + 1) * 2);
  expect(() => filterList(inputList)).toThrowError("Error: The input list is not a multiple of 10 in length.");
});
