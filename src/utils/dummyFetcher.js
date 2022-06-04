const getRandomSeconds = () => (Math.round(Math.random() * 5) + 1) * 250;

const randomTimer = (func, args) => (resolve) => {
  setTimeout(() => {
    resolve(func(args));
  }, getRandomSeconds());
};

export const dummyFetcher = async (func, args) => {
  return new Promise(randomTimer(func, args));
};
