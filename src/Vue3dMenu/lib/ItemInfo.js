import Deferred from './Deferred';
import Animate from './Animate';
import Tween from './Tween';

const upDuration = 300;
const upInvokeNum = -90;
const downDuration = 700;
const downInvokeNum = -90;

export default class ItemInfo {


  constructor(title, click = function () {
  }) {
    this.title = title;
    this.click = click;
  }


  title;

  click;


  prev = null;
  next = null;

  onUpdate = function () {
  };

  open = false;

  animate = null;

  disabled = false;

  done = Promise.resolve();

  goUp() {
    this.disabled = false;
    if (!this.open) {
      this.done = Promise.resolve();
      this.prev && this.prev.goUp();
      return;
    }
    let dfd = new Deferred();
    this.done = dfd.promise;
    let hasInvoked = false;
    this.animate = new Animate(0, -180, upDuration,
      num => {
        this.onUpdate(num);
        if (num < upInvokeNum && !hasInvoked && !this.disabled) {
          hasInvoked = true;
          this.prev && this.prev.goUp();
        }
      },
      () => {
        this.open = false;
        dfd.resolve();
      });
    this.animate.start();
  }

  goDown() {
    this.disabled = false;
    if (this.open) {
      this.done = Promise.resolve();
      this.next && this.next.goDown();
      return;
    }
    let dfd = new Deferred();
    this.done = dfd.promise;
    let hasInvoked = false;
    this.animate = new Animate(-180, 0, downDuration,
      num => {
        this.onUpdate(num);
        if (num > downInvokeNum && !hasInvoked && !this.disabled) {
          hasInvoked = true;
          this.next && this.next.goDown();
        }
      },
      () => {
        this.open = true;
        dfd.resolve();
      });
    this.animate.tween = Tween.BackEaseOut;
    this.animate.start();
  }

  stop() {
    this.disabled = true;
    return this.done;
  }

}
