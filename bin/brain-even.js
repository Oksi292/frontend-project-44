#!/usr/bin/env node


import { greeting } from '../src/cli.js'; // Импортируем функцию greeting
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const runGame = () => {
  const name = greeting(); // Приветствие

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const question = Math.floor(Math.random() * 100);
    console.log(`Question: ${question}`);
    
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // Завершаем игру при неправильном ответе
    }
  }

  console.log(`Congratulations, ${name}!`);
};

runGame();
