const getRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

export const rules = 'What is the result of the expression?';

export const generateRound = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${a} ${operator} ${b}`;
  const answer = calculate(a, b, operator).toString();

  return { question, answer };
};


  