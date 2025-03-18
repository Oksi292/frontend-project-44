import readlineSync from 'readline-sync';

// Функция приветствия
export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Функция для генерации раунда
export const generateRound = (question, answer) => ({
  question,
  answer,
});

// Функция для проверки ответа
export const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer.toString();
