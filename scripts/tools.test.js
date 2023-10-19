const { ArrayClass } = require('./tools.js');

describe('Given length from ArrayClass ', () => {
  test('Empty array, result should be 0', () => {
    const arrayTools = new ArrayClass();
    const testData = [];
    const expected = 0;
    const result = arrayTools.length(testData);
    expect(result).toBe(expected);
  });

  test('3 items array, result should be 3', () => {
    const arrayTools = new ArrayClass();
    const testData = [1, 4, 7];
    const expected = 3;
    const result = arrayTools.length(testData);
    expect(result).toBe(expected);
  });

  test('3 items array, result should be 3', () => {
    const arrayTools = new ArrayClass();
    const testData = [1, null, undefined];
    const expected = 3;
    const result = arrayTools.length(testData);
    expect(result).toBe(expected);
  });

  test('4 strings array, result shpuld be 4', () => {
    const arrayTools = new ArrayClass();
    const testData = ['Pepe', 'María', 'Luis', 'Carlos'];
    const expected = 4;
    const result = arrayTools.length(testData);
    expect(result).toBe(expected);
  });
});

describe('Given pop from ArrayClass', () => {
  test('3 strings array, result should be Pepe', () => {
    const arrayTools = new ArrayClass();
    const testData = ['Luis', 'Sergio', 'Pepe'];
    const expected = 'Pepe';
    const result = arrayTools.pop(testData);
    expect(result).toBe(expected);
  });

  test('3 numbers array, result should be 7', () => {
    const arrayTools = new ArrayClass();
    const testData = [1, 4, 7];
    const expected = 7;
    const result = arrayTools.pop(testData);
    expect(result).toBe(expected);
  });

  test('3 items array, result should be undefined', () => {
    const arrayTools = new ArrayClass();
    const testData = [1, null, undefined];
    const expected = undefined;
    const result = arrayTools.pop(testData);
    expect(result).toBe(expected);
  });

  test('Empty array , result should be undefined', () => {
    const arrayTools = new ArrayClass();
    const testData = [];
    const expected = undefined;
    const result = arrayTools.pop(testData);
    expect(result).toBe(expected);
  });

  test('Array with empty strings , result should be empty string', () => {
    const arrayTools = new ArrayClass();
    const testData = ['', ''];
    const expected = '';
    const result = arrayTools.pop(testData);
    expect(result).toBe(expected);
  });
});
