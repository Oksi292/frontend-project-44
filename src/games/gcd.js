import runGame from '../index.js';
import getRandom from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return [question, answer];
};

export default () => runGame(description, generateRound);
