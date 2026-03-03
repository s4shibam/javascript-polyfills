Array.prototype.myUnshift = function (...items) {
  const oldArray = [...this];
  if (items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      this[i] = items[i];
    }

    for (let i = items.length; i < items.length + oldArray.length; i++) {
      this[i] = oldArray[i - items.length];
    }
  }

  return this.length;
};
