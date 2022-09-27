
export default class Deferred {

  constructor() {
    var pro = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject;
    });
    this.then = pro.then.bind(pro);
    this.catch = pro.catch.bind(pro);
    this.promise = pro;
  }

}
