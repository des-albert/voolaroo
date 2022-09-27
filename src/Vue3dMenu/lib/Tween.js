/**
 * Tween
 */
export default {

  Linear: function (t, b, c, d) {
    return c * t / d + b;
  },

  BackEaseOut: function (t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  }
};
