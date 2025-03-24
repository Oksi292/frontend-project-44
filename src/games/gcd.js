const getRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export const rules = 'Find the greatest common divisor of given numbers.';

export const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2).toString();
  return { question, answer };
};
