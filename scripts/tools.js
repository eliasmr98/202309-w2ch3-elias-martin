export const arrayLength = (array) => {
  let count = 0;
  // eslint-disable-next-line no-unused-vars
  for (const _item of array) {
    count++;
  }

  return count;
};

export const arrayPush = (array) => {
  const arrayLengthValue = arrayLength(array);
  const arrayPushValue = arrayLengthValue + 1;
  return arrayPushValue;
};

export const arrayPop = (array) => {
  const arrayPopLast = array[array.length - 1];
  const arrayPopValue = arrayPopLast;
  return arrayPopValue;
};

export const arrayShift = (array) => {
  const arrayShiftFirst = array[0];
  const arrayShiftValue = arrayShiftFirst;
  return arrayShiftValue;
};
