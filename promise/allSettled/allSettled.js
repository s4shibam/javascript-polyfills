Promise.myAllSettled = function (promises = []) {
  const results = [];
  let settledPromiseCount = 0;

  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    }

    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];

      Promise.resolve(promise)
        .then((value) => {
          results[i] = { status: 'fulfilled', value };
        })
        .catch((err) => {
          results[i] = { status: 'rejected', reason: err };
        })
        .finally(() => {
          settledPromiseCount++;

          if (settledPromiseCount === promises.length) {
            resolve(results);
          }
        });
    }
  });
};
