module.exports = (defaultString, n) => {  
  /* Remove spaces and divide/insert values into an array */
  const stringWithoutSpaces = defaultString.replace(/ /g, '');
  const array = stringWithoutSpaces.split(',');

  /* Find values ​​of the array to find matches with the value n */
  for (let mainIndex in array) for (let restOfValues in array) {
    let matches = parseInt(array[mainIndex]) + parseInt(array[restOfValues]);

    /* Important: mainIndex and restOfValues are synchronized once for each iteration */
    if(mainIndex != restOfValues && matches === n) return true;
  }
  
  return false;
}