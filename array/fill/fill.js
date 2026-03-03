Array.prototype.myFill = function (value, start = 0, end = this.length) {
  if (start < 0) {
    start = this.length + start;
  }

  for (let i = start; i < end && i < this.length; i++) {
    this[i] = value;
  }

  return this;
};
