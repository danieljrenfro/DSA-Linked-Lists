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
    // checking to see if the list is empty. Is the head's value === to null
    if (this.head === null) {
      // if the list is empty, we are inserting an item as if it's at the beginning of the list.
      this.insertFirst(item);
    }
    else {
      // otherwise, we are creating a tempNode that is equal to the head.
      let tempNode = this.head;
      // as long as the tempNode is not the last item in the list, meaning its next isn't pointing at null, execute this loop.
      while (tempNode.next !== null) {
        // each time it loops through it's going to move the tempNode one place further through the list by reassigning it's value to the value of it's next node.
        tempNode = tempNode.next;
      }
      // when the tempNode's next pointer is at null, then we reassign that value to be a new node that has the value of item and is pointing at null.
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // start at the head of the list
    let currNode = this.head;
    // check whether the list is empty, if so return null
    if (!this.head === null) {
      return null;
    }
    // loop through the linked list items until the currNode === the item that we are looking for.
    while (currNode.value !== item) {
      // if the current node's next value is null or the end of the list, then return null
      if (currNode.next === null) {
        return null;
      }
      // else, increment the currNode value to the next node and re-evaluate the loop conditions.
      else {
        currNode = currNode.next;
      }
    }
    // if the loop ends without returning something, that will mean we have found the node that we are looking for. Return that node.
    return currNode;
  }

  remove(item) {
    // If the list is empty, return null.
    if (!this.head) {
      return null;
    }
    // If the item to be removed is the first item in the list, set head to equal the next node from HEAD. Return nothing.
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start the current node off at head.
    let currNode = this.head;
    // Keep track of the previous node as well and start it off at head.
    let previousNode = this.head;
    // Start a loop. As long as the currNode is not at the end of the list or hasn't found the item to delete, run the loop.
    while ((currNode !== null) && (currNode.value !== item)) {
      // Set the previous node to the currNode.
      previousNode = currNode;
      // Set the currNode to the currNode.next value
      currNode = currNode.next;
    }
    // if the currNode is null than the item wasn't found. Console log item not found and return nothing.
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    // Otherwise, if the correct node was found set the previousNode next pointer to the currNode's next point, thus skipping over the node that is to be deleted.
    previousNode.next = currNode.next;
  }
}