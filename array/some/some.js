Array.prototype.mySome = function (predicate) {
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i], i, this)) {
      return true;
    }
  }

  return false;
};
