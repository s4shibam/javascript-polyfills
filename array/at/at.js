Array.prototype.myAt = function (index) {
  if (index < 0) {
    index = this.length + index;
  }

  return this[index];
};


