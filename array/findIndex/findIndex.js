Array.prototype.myFindIndex = function (predicate) {
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i], i, this)) {
      return i;
    }
  }

  return -1;
};
