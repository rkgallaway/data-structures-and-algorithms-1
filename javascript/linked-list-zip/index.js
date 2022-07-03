'use strict';

function zipLists(listOne, listTwo) {
  if (arguments.length !== 2) {
    return 'Enter two lists as arguments';
  }
  if (!listOne.head && !listTwo.head) {
    return 'Both lists are empty';
  }

  let currentOne = listOne.head;
  let currentTwo = listTwo.head;

  while (currentOne && currentTwo) {
    let nextOne = currentOne.next;
    let nextTwo = currentTwo.next;
    if (nextOne) {
      currentTwo.next = nextOne;
    }
    currentOne = nextOne;
    currentTwo = nextTwo;
  }
  return listOne.head ? listOne : listTwo;
}

module.exports = zipLists;
