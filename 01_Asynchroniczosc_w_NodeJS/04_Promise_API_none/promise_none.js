async function promiseNone(arg) {
    const values = await Promise.allSettled(arg);

    const isFulfilled = values.some((x) => {
        console.log(x);
        return x.status === 'fulfilled';
    });

    return new Promise((resolve, reject) => {
        if (isFulfilled) {
            reject("Heheh no i coś tam jednak jest resolved");
        }

        resolve("Wszystko źle więc dobrze");
    });
}

promiseNone([Promise.reject(), Promise.reject(), Promise.resolve()])
    .then((res) => {
        console.log("All failed :)", res);
    })
    .catch((err) => {
        console.log("Something succeeded :(", err);
    });