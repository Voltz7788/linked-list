class Node {
  constructor(value = null, nextNode = null) {
    (this.value = value), (this.nextNode = nextNode);
  }
}

class LinkedList {
  constructor() {
    this.list = null;
  }

  //   Methods
  append(value) {
    const newNode = new Node(value, null);
    if (this.list === null) {
      this.list = newNode;
    } else if (this.list.nextNode === null) {
      this.list.nextNode = new Node(value);
    } else {
      const lastNode = this.findLastNode(this.list);
      lastNode.nextNode = newNode;
    }
  }

  prepend(value) {
    this.list =
      this.list === null ? new Node(value, null) : new Node(value, this.list);
  }

  size(count = 0) {
    if (this.list === null) return count;
    return this.list.nextNode === null
      ? (count += 1)
      : this.findSize(this.list, count + 1);
  }

  tail() {
    return this.list === null ? "Empty list" : this.findLastNode(this.list);
  }

  head() {
    return this.list === null ? "Empty list" : this.list;
  }

  at(index) {
    return this.findSpecificNode(this.list, this.size() - index);
  }

  pop() {
    const secondLastNode = this.at(this.size() - 2);
    secondLastNode.nextNode = null;
  }

  // Recursive functions
  findLastNode(node = this.list) {
    if (node.nextNode === null) {
      return node;
    } else {
      return this.findLastNode(node.nextNode);
    }
  }

  findSize(node, count) {
    if (node.nextNode === null) {
      return count;
    } else {
      return this.findSize(node.nextNode, count + 1);
    }
  }

  findSpecificNode(node, count) {
    const listSize = this.size();
    if (count === listSize) {
      return node;
    } else if (node.nextNode === null) {
      return "Node doesn't exist";
    } else {
      return this.findSpecificNode(node.nextNode, count + 1);
    }
  }
}

const list = new LinkedList();
list.append("node 1");
list.append("node 2");
list.append("node 3");
list.append("node 4");
list.append("node 5");
list.append("node 6");
list.append("node 7");
list.prepend("node 0");
console.log(list.head());
console.log(list.tail());
console.log(list.size());
console.log(list.at(6));
list.pop();
list.pop();
list.pop();
console.log(list.head());
