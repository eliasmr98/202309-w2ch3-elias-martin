export const arrayLength = (array) => {
  let count = 0;
  // eslint-disable-next-line no-unused-vars
  for (const _item of array) {
    count++;
  }

  return count;
};

// GRACIAS NITIN
export const arrayPush = (array, ...pushedElement) => {
  const elementsToPush = [...pushedElement];

  for (let index = 0; index < elementsToPush.length; index++) {
    array[array.length] = elementsToPush[index];
  }

  return array.length;
};
// GRACIAS NITIN

export const arrayPop = (array) => {
  if (array.length === 0) return undefined;

  const arrayPopValue = array[array.length - 1];

  array.length -= 1;

  return arrayPopValue;
};

export const arrayShift = (array) => {
  if (array.length === 0) return undefined;

  const arrayParameter = array[array[1]];
  arrayParameter.length -= 1;

  return arrayParameter;

  // REAL RETURN return array[0];
};

console.log(arrayShift(['Pepe', 'Luis', 'Kamilo']));

console.log([].shift());
