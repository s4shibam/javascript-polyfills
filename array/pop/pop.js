Array.prototype.myPop = function () {
  if (this.length > 0) {
    let lastElement = this[this.length - 1];
    this.length -= 1;
    return lastElement;
  }

  return undefined;
};
