#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const roundsCount = 3;

for (let i = 0; i < roundsCount; i++) {
  const number = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    process.exit(1);
  }
}

console.log(`Congratulations, ${name}!`);
