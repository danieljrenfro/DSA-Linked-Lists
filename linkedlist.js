class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }

    let currNode = this.head;

    while (currNode.next !== null) {
      currNode = currNode.next;
    }

    currNode.next = new _Node(item, null);
  }

  find(item) {
    let currNode = this.head;
    
    if (this.head === null) {
      console.log('List is empty. Could not find item.');
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }

    return currNode;
  }

  remove(item) {
    let currNode = this.head;
    let prevNode = this.head;

    if (this.head === null) {
      console.log('List empty, could not find item to remove');
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Could not find item to remove');
      return null;
    }

    prevNode.next = currNode.next;
  }

  insertBefore(item, key) {
    let currNode = this.head;
    let prevNode = this.head;

    if (this.head === null) {
      console.log(`List is empty. Could not insert before '${key}'`);
      return;
    }

    while (currNode.value !== key && currNode !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log(`Could not find '${key}' to insert before`);
      return;
    }

    prevNode.next = new _Node(item, currNode);
  }

  insertAfter(item, key) {
    let currNode = this.head;
    let nextNode = this.head;

    if (this.head === null) {
      console.log(`List is empty. Could not insert after '${key}'`);
      return;
    }

    while (currNode.value !== key && currNode !== null) {
      currNode = currNode.next;
      nextNode = currNode.next;
    }

    if (currNode === null) {
      console.log(`Could not find '${key}' to insert after`);
      return;
    }

    if (nextNode === null) {
      this.insertLast(item);
      return;
    }

    currNode.next = new _Node(item, nextNode);
  }

  insertAt(item, index) {
    let counter = 1;
    let currNode = this.head;
    let prevNode = this.head;

    if (index === 0) {
      this.insertFirst(item);
      return;
    }

    if (this.head === null) {
      console.log(`List is empty. Could not insert at ${index} index`);
      return;
    }

    while (counter < index) {
      if (currNode === null) {
        console.log(`No item at index ${index}`);
        return;
      }
      
      counter += 1;
      prevNode = currNode;
      currNode = currNode.next;
    }

    prevNode.next = new _Node(item, currNode);
  }
}

function display(list) {
  let currNode = list.head;
  let listDisplayed = 'Head:';

  while (currNode !== null) {
    listDisplayed += ` ${currNode.value},`;
    currNode = currNode.next;
  }

  listDisplayed += ' null';
  console.log(listDisplayed);
  return listDisplayed;
}

function size(list) {
  let sizeOfList = 0;

  if (list.head === null) {
    return sizeOfList;
  }

  let currNode = list.head;

  while (currNode !== null) {
    sizeOfList += 1;
    currNode = currNode.next;
  }

  return sizeOfList;
}

function isEmpty(list) {
  if (list.head === null) {
    return true;
  } else {
    return false;
  }
}

function findPrevious(list, item) {
  if (list.head === null) {
    console.log(`List is empty. Could not find node before ${item}`);
    return `List: ${list.head}`;
  }

  let currNode = list.head;
  let prevNode = list.head;

  while (currNode.value !== item && currNode !== null) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  if (currNode === null) {
    console.log(`Could not find item: ${item}`);
    return;
  }

  return prevNode;
}

function findLast(list) {
  if (list.head === null) {
    console.log('List is empty');
    return `List: ${list.head}`;
  }

  let currNode = list.head;

  while (currNode.next !== null) {
    currNode = currNode.next;
  }

  return currNode;
}

// This function takes a list as an argument.
function removeDuplicates(lst) {
  // Sets the 'current' variable to the head of the list.
  let current = lst.head;
  // As long as the current node does not equal null, the loop will run. 
  while (current !== null) {
    // We are setting a new node to the current node.
    let newNode = current;
    // Starting another loop inside of the first loop. As long as the newNode isn't null run the loop.
    while (newNode.next !== null) {
      // if the newNode's next value === the current Node's value run the block of code.
      if (newNode.next.value === current.value) {
        // set the newNode's next pointer to equal the node to places ahead of newNode
        newNode.next = newNode.next.next;
      }
      // otherwise, if newNode.next.value is not equal to the current.value then just increment newNode to the next Node.
      else {
        newNode = newNode.next;
      }
    }
    // Then we are going to increment next again and run through the loop again for that node and it's value.
    current = current.next;
  }

  // SUMMARY: This function removes duplicates from a Linked List. Starting at the head of a linked list it searches through a list to see if any of the other nodes matches that value. If there is a match then they cut that node out. They do that for all matching nodes. Then move onto the next item in the list, check to make sure there are no matches and on and on.

  // The time complexity for this function is O(n^2) since you are doing a loop through the list for every item of the list.
}

function main() {
  let SLL = new LinkedList;
  let emptySLL = new LinkedList;

  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);

  removeDuplicates(SLL);
  display(emptySLL);
  display(SLL);
  console.log(size(SLL));
  console.log(size(emptySLL));
  console.log(isEmpty(SLL));
  console.log(isEmpty(emptySLL));
  console.log(findPrevious(SLL, 'Starbuck'));
  console.log(findPrevious(emptySLL, 'Starbuck'));
  console.log(findLast(SLL));
  console.log(findLast(emptySLL));
}

main();