import readlineSync from 'readline-sync';  // Импортируем модуль для работы с вводом пользователя
import { getRandomInt } from '../utils.js';  // Импортируем функцию для генерации случайных чисел

// Функция, которая генерирует случайное число и правильный ответ
const getQuestionAnswer = () => {
  const number = getRandomInt(1, 100);  // Генерируем случайное число от 1 до 100
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';  // Определяем правильный ответ
  return { number, correctAnswer };  // Возвращаем число и правильный ответ
};

// Основная функция игры
const runEvenGame = () => {
  console.log('Welcome to the Brain Games!');  // Приветствие игрока
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');  // Правила игры

  const name = readlineSync.question('May I have your name? ');  // Запрашиваем имя пользователя
  console.log(`Hello, ${name}!\n`);  // Приветствуем пользователя по имени

  const rounds = 3;  // Количество раундов
  for (let i = 0; i < rounds; i++) {
    const { number, correctAnswer } = getQuestionAnswer();  // Генерируем число и правильный ответ
    console.log(`Question: ${number}`);  // Выводим вопрос с числом
    const userAnswer = readlineSync.question('Your answer: ');  // Запрашиваем ответ у пользователя

    if (userAnswer !== correctAnswer) {  // Если ответ неверный
      console.log(`'${userAnswer}' is wrong. Correct answer was '${correctAnswer}'.`);  // Сообщаем о ошибке
      console.log(`Let's try again, ${name}!`);  // Предлагаем попробовать снова
      return;  // Завершаем игру
    }

    console.log('Correct!');  // Если ответ правильный, сообщаем игроку
  }

  console.log(`Congratulations, ${name}!`);  // Если игрок прошёл все раунды, поздравляем его
};

export default runEvenGame;  // Экспортируем функцию игры
