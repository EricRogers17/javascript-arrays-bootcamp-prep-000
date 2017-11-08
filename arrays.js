var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, ele) {
  var newArray = [ele, ...arr];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele);
  return arr;
}
