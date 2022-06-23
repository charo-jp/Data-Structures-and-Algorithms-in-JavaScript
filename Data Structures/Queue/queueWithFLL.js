// Forward Linked List Queue

class Element {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class FLLqueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  _isEmpty() {
    return !!(this.head === null && this.tail === null);
  }

  enqueue(e) {
    if (this._isEmpty()) {
      this.head = e;
    } else {
      this.tail.next = e;
    }
    this.tail = e;
  }

  dequeue() {
    if (this._isEmpty()) {
      return null;
    }
    const result = this.head;
    if (this.head.next === null) {
      this.tail = null;
    }
    this.head = this.head.next;
    return result;
  }

  display = () => {
    let result = "[ ";

    let nextValue = this.head;
    if (!nextValue) return "[ ]";
    result += nextValue.val + " ";
    while (true) {
      nextValue = nextValue.next;
      if (nextValue) {
        result += nextValue.val + " ";
      } else {
        result += "]";
        break;
      }
    }
    return result;
  };
}

const e1 = new Element(1);
const e2 = new Element(2);
const e3 = new Element(3);
const e4 = new Element(4);
const e5 = new Element(5);
const node1000 = new Element(1000);

const queue = new FLLqueue();
queue.enqueue(e1);
queue.dequeue();
console.log(queue.display());
queue.enqueue(e2);
queue.enqueue(e3);
queue.enqueue(e4);
queue.enqueue(e5);
console.log(queue.display());
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.display());
