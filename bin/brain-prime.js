#!/usr/bin/env node

import readlineSync from 'readline-sync';
import isPrime from '../src/isPrime.js'; // Псевдокод для импорта функции для проверки простоты числа

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const playGame = () => {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  
  const userAnswer = readlineSync.question('Your answer: ');

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`Wrong! The correct answer was '${correctAnswer}'.`);
  }
};

playGame();

