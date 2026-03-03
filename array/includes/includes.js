Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
  if (fromIndex < 0) {
    fromIndex = this.length + fromIndex;
  }

  if (fromIndex < 0) {
    fromIndex = 0;
  }

  for (let i = fromIndex; i < this.length; i++) {
    if (Object.is(this[i], searchElement) || this[i] === searchElement) {
      return true;
    }
  }

  return false;
};
