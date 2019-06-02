class Queue {
  constructor() {
    this.queue = [];
  };

  enqueue(item) {
    this.queue.push(item);
  };
}

module.exports = { Queue };