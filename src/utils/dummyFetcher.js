const getRandomSeconds = () => (Math.round(Math.random() * 5) + 1) * 250;

const randomTimer = (func, args) => (resolve) => {
  setTimeout(() => {
    resolve(func(args));
  }, getRandomSeconds());
};

/**
 * fetch 함수기능을 모방한 dummyfetcher 함수
 * @param {Function} func 내가받고 싶은 데이터를 반환하는 함수
 * @param {Array} args 함수의 매개변수
 * @returns
 */
const dummyFetcher = async (func, args) => {
  return new Promise(randomTimer(func, args));
};

export default dummyFetcher;
