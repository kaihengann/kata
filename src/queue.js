class Queue {
  constructor() {
    this.queue = [];
  };

  enqueue(item) {
    this.queue.push(item);
  };

  dequeue() {
    this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }
}

module.exports = { Queue };