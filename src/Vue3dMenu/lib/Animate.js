import Tween from './Tween'
import Deferred from './Deferred'


export default class Animate {
  _enable = true
  _timeBase = +new Date
  _from
  _to
  _duration

  constructor(from, to, duration, stepFn = function () {
  }, endFn = function () {
  }) {
    this._from = from
    this._to = to
    this._duration = duration
    this._stepFn = stepFn
    this._endFn = endFn
  }

  _stepFn


  _endFn

  _step() {
    if (!this._enable) {
      return
    }

    let t = +new Date - this._timeBase
    let ifEnd = false


    if (t > this._duration) {
      t = this._duration
      ifEnd = true
    }


    let result = this.tween(t, this._from, this._to - this._from, this._duration)

    this._stepFn(result)

    if (ifEnd) {
      this._endFn(result)
      this.state = 2
      this.deferred.resolve(result)
    } else {
      setTimeout(this._step.bind(this), 17)
    }
  }


  state = 0


  tween = Tween.Linear


  deferred = new Deferred()


  start() {
    this.state = 1
    this._step()
    return this
  }


  stop() {
    this.state = 2
    this._enable = false
    return this
  }

}
