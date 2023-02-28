const getRandomDelay = (maxDelay) => {
  return (Math.floor(Math.random() * maxDelay)) * 1000;
};

const getAsyncNumbers = () => {
  var successDelay = getRandomDelay(10);
  console.log(successDelay)
  return new Promise((resolve) => {
    setTimeout(
      () => resolve([1, 3, 5, 6, 4, 2]), 
      successDelay
    );
  });
};

const racer1 = getAsyncNumbers();
const racer2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    reject(new Error("KONIEC CZASU, wygrał error"))
  },3000)
})

Promise.race([racer1,racer2])
    .then((wynik) => {
      console.log(wynik + " KONIEC CZASU, wygrała tablica")
    })
    .catch((err) => {
      console.log(err.message)
    })

