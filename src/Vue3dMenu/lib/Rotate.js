import Queue from './Queue';

export default class Rotate {


  itemList = [];

  queue = new Queue();


  constructor(itemList) {
    this.itemList = itemList;
  }


  goUp() {
    this.attach(() => this.itemList[this.itemList.length - 1].goUp());
  }

  goDown() {
    this.attach(() => this.itemList[0].goDown());
  }

  attach(fn) {
    this.queue.clear();
    this.queue.add(fn);
    Promise.all(this.itemList.map(item => item.stop()))
      .then(() => this.queue.dequeue());
  }

}
