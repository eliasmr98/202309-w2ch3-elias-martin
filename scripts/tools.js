export class ArrayClass {
  length(array) {
    let count = 0;
    // eslint-disable-next-line no-unused-vars
    for (const _item of array) {
      count++;
    }

    return count;
  }

  pop(array) {
    if (array.length === 0) return undefined;

    const arrayPopValue = array[array.length - 1];

    array.length -= 1;

    return arrayPopValue;
  }
}
