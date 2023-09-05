class Node {
  constructor(value = null, nextNode = null) {
    (this.value = value), (this.nextNode = nextNode);
  }
}

class LinkedList {
  constructor() {
    this.list = null;
  }

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
    const newNode = new Node(value, this.list);
    this.list = newNode;
  }

  size() {}

  findLastNode(node) {
    if (node.nextNode === null) {
      return node;
    } else {
      return this.findLastNode(node.nextNode);
    }
  }

  tail() {
    if (this.list === null) {
      console.log("Empty list");
      return;
    } else {
      return this.findLastNode(this.list);
    }
  }

  head() {
    if (this.list === null) {
      console.log("Empty list");
      return;
    } else {
      return this.list;
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
