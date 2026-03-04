const STATE = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

class MyPromise {
  value = undefined;
  state = STATE.PENDING;
  thenCbs = [];
  catchCbs = [];

  constructor(cb) {
    try {
      cb(this.onResolve.bind(this), this.onReject.bind(this));
    } catch (error) {
      this.onReject(error);
    }
  }

  runCallbacks() {
    if (this.state === STATE.FULFILLED) {
      this.thenCbs.forEach((thenCb) => {
        thenCb(this.value);
      });

      this.thenCbs = [];
    }

    if (this.state === STATE.REJECTED) {
      this.catchCbs.forEach((catchCb) => {
        catchCb(this.value);
      });

      this.catchCbs = [];
    }
  }

  onResolve(value) {
    queueMicrotask(() => {
      if (this.state != STATE.PENDING) {
        return;
      }

      if (value instanceof MyPromise) {
        value.then(this.onResolve.bind(this), this.onReject.bind(this));
        return;
      }

      this.value = value;
      this.state = STATE.FULFILLED;

      this.runCallbacks();
    });
  }

  onReject(value) {
    queueMicrotask(() => {
      if (this.state != STATE.PENDING) {
        return;
      }

      if (value instanceof MyPromise) {
        value.then(this.onResolve.bind(this), this.onReject.bind(this));
        return;
      }

      if (this.catchCbs.length === 0) {
        throw new UncaughtPromiseError(value);
      }

      this.value = value;
      this.state = STATE.REJECTED;

      this.runCallbacks();
    });
  }

  then(thenCb, catchCb) {
    return new MyPromise((resolve, reject) => {
      this.thenCbs.push((result) => {
        if (!thenCb) {
          resolve(result);
          return;
        }

        try {
          resolve(thenCb(result));
        } catch (error) {
          reject(error);
        }
      });

      this.catchCbs.push((result) => {
        if (!catchCb) {
          reject(result);
          return;
        }

        try {
          resolve(catchCb(result));
        } catch (error) {
          reject(error);
        }
      });

      this.runCallbacks();
    });
  }

  catch(catchCb) {
    return this.then(undefined, catchCb);
  }

  finally(cb) {
    return this.then(
      (value) => {
        cb();
        return value;
      },
      (reason) => {
        cb();
        throw reason;
      }
    );
  }
}

class UncaughtPromiseError extends Error {
  constructor(error) {
    super(error);
    this.stack = `(in promise) ${error.stack}`;
  }
}

export default MyPromise;
