
export default class Queue {


  list = [];

  add(fn) {
    this.list.push(fn);
  }

  clear() {
    this.list = [];
  }

  dequeue() {
    while (this.list.length) {
      let item = this.list.shift();
      item();
    }
  }
}
