const isLogged = true;

const firstPromise = new Promise((resolve, reject) => {
  if (isLogged) {
    const randomNumber = Math.random();
    resolve(randomNumber);
  } else {
    reject("User is not logged in");
  }
});

const secondPromise = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject("Error: Number is not greater than 0.5");
    }
  });
};

firstPromise
  .then((randomNumber) => {
    return secondPromise(randomNumber);
  })
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.error(error);
  });
