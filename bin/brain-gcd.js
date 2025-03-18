#!/usr/bin/env node

import { greeting, generateRound, checkAnswer } from '../src/index.js';

const gcd = (a, b) => {
  // Вычисление НОД с использованием алгоритма Евклида
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const runGcdGame = () => {
  greeting('Find the greatest common divisor of given numbers.');

  const roundsCount = 3;

  for (let round = 1; round <= roundsCount; round++) {
    // Генерация случайных чисел для игры
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = gcd(num1, num2); // Вычисление НОД

    // Показать вопрос пользователю
    const question = `Question: ${num1} ${num2}`;
    const userAnswer = generateRound(question);

    // Проверить ответ пользователя
    const result = checkAnswer(userAnswer, correctAnswer);

    if (!result) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again!`);
      return;
    }

    console.log('Correct!');
  }

  console.log('Congratulations, you won!');
};

runGcdGame();
