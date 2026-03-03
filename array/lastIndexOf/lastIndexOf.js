Array.prototype.myLastIndexOf = function (
  searchElement,
  fromIndex = this.length - 1
) {
  if (fromIndex < 0) {
    fromIndex = this.length + fromIndex;
  }

  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === searchElement) {
      return i;
    }
  }

  return -1;
};
