class Queue {

  constructor() {
    this.items = [];
    this.count = 0;
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count += 1;

    return this.count - 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }

    for (let i = 1; i < this.items.length; i++) {
      this.items[i - 1] = this.items[i];
    }
    this.count -= 1;

    return this.items;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.items = [];
    this.count = 0;
  }
}

module.exports = Queue;
