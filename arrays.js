var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, ele) {
  var thisArray = arr;
  var element = ele;
  thisArray.unshift(element);
  return thisArray;
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele);
  return arr;
}
