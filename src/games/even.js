//import readlineSync from 'readline-sync';

// Функция для генерации случайного числа
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для генерации одного раунда игры
const generateRound = () => {
  const number = getRandomInt(1, 100); // Генерируем случайное число от 1 до 100
  const answer = number % 2 === 0 ? 'yes' : 'no'; // Определяем правильный ответ
  const question = `Question: ${number}`; // Формируем вопрос
  return { question, answer };
};

export default generateRound;
