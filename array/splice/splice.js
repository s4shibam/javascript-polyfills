Array.prototype.mySplice = function (start, deleteCount, ...items) {
  const removed = [];
  const len = this.length;

  if (start < 0) {
    start = Math.max(len + start, 0);
  } else {
    start = Math.min(start, len);
  }

  if (deleteCount === undefined) {
    deleteCount = len - start;
  } else if (deleteCount < 0) {
    deleteCount = 0;
  } else {
    deleteCount = Math.min(deleteCount, len - start);
  }

  for (let i = start; i < start + deleteCount; i++) {
    removed.push(this[i]);
  }

  const diff = items.length - deleteCount;

  if (diff < 0) {
    for (let i = start + deleteCount; i < len; i++) {
      this[i + diff] = this[i];
    }
    this.length = len + diff;
  } else if (diff > 0) {
    for (let i = len - 1; i >= start + deleteCount; i--) {
      this[i + diff] = this[i];
    }
  }

  for (let i = 0; i < items.length; i++) {
    this[start + i] = items[i];
  }

  if (diff > 0) {
    this.length = len + diff;
  }

  return removed;
};
