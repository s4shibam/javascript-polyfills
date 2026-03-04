Promise.myAll = function (promises = []) {
  const results = [];
  let completedPromiseCount = 0;

  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    }

    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];

      Promise.resolve(promise)
        .then((value) => {
          completedPromiseCount++;
          results[i] = value;

          if (completedPromiseCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    }
  });
};
