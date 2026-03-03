Array.prototype.myPush = function (...items) {
  let length = this.length;

  for (let i = 0; i < items.length; i++) {
    this[length] = items[i];
    length++;
  }

  this.length = length;

  return length;
};
