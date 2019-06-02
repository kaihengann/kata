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
}

module.exports = { Queue };