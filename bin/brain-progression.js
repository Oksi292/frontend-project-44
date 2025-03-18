#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length = 10) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  console.log('What number is missing in the progression?\n');

  let correctAnswers = 0;
  const roundsToWin = 3;

  while (correctAnswers < roundsToWin) {
    const start = getRandomNumber(1, 50);
    const step = getRandomNumber(2, 10);
    const progression = generateProgression(start, step);
    
    const hiddenIndex = getRandomNumber(0, progression.length - 1);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

playGame();