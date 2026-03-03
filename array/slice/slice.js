Array.prototype.mySlice = function (start = 0, end = this.length) {
  const arr = [];

  if (start < 0) {
    start = this.length + start;
  }

  for (let i = start; i < end && i < this.length; i++) {
    arr.push(this[i]);
  }

  return arr;
};
