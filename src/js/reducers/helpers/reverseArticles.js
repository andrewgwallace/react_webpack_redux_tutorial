export const reverse = (array) => {
    let j = array.length - 1;
    for (let i = 0; i < Math.floor(array.length/2); i++) {
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
      j--;
    }
    return array;
  }