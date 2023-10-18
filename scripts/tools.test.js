const { arrayLength } = require('./tools');
const { arrayPush } = require('./tools');
const { arrayPop } = require('./tools');
const { arrayShift } = require('./tools');

describe('Given arrayLength', () => {
  test('Empty array, result should be 0', () => {
    const testData = [];
    const expected = 0;
    const result = arrayLength(testData);
    expect(result).toBe(expected);
  });

  test('3 items array, should be 3', () => {
    const testData = [1, 4, 7];
    const expected = 3;
    const result = arrayLength(testData);
    expect(result).toBe(expected);
  });

  test('3 items array, should be 3', () => {
    const testData = [1, null, undefined];
    const expected = 3;
    const result = arrayLength(testData);
    expect(result).toBe(expected);
  });
});

describe('Given arrayPush', () => {
  test('Empty array, result should be 1', () => {
    const testData = [];
    const expected = 1;
    const result = arrayPush(testData);
    expect(result).toBe(expected);
  });

  test('Array length 3, should be 4', () => {
    const testData = [1, 4, 7];
    const expected = 4;
    const result = arrayPush(testData);
    expect(result).toBe(expected);
  });

  test('3 items array, should be 4', () => {
    const testData = [1, null, undefined];
    const expected = 4;
    const result = arrayPush(testData);
    expect(result).toBe(expected);
  });
});

describe('Given arrayPop', () => {
  test('Empty array, result should be Pepe', () => {
    const testData = ['Luis', 'Sergio', 'Pepe'];
    const expected = 'Pepe';
    const result = arrayPop(testData);
    expect(result).toBe(expected);
  });

  test('Numbers array, result should be 7', () => {
    const testData = [1, 4, 7];
    const expected = 7;
    const result = arrayPop(testData);
    expect(result).toBe(expected);
  });

  test('3 items array, should be undefined', () => {
    const testData = [1, null, undefined];
    const expected = undefined;
    const result = arrayPop(testData);
    expect(result).toBe(expected);
  });
});

describe('Given arrayShift', () => {
  test('Empty array, result should be Luis', () => {
    const testData = ['Luis', 'Sergio', 'Pepe'];
    const expected = 'Luis';
    const result = arrayShift(testData);
    expect(result).toBe(expected);
  });

  test('Numbers array, result should be 1', () => {
    const testData = [1, 4, 7];
    const expected = 1;
    const result = arrayShift(testData);
    expect(result).toBe(expected);
  });

  test('3 items array, should be 1', () => {
    const testData = [1, null, undefined];
    const expected = 1;
    const result = arrayShift(testData);
    expect(result).toBe(expected);
  });
});
