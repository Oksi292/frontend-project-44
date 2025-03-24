const getRandomNumber = (min = 1, max = 100) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  
  const generateProgression = (start, step, length) => {
    return Array.from({ length }, (_, i) => start + i * step);
  };
  
  export const rules = 'What number is missing in the progression?';
  
  export const generateRound = () => {
    const start = getRandomNumber(1, 50);
    const step = getRandomNumber(1, 10);
    const length = getRandomNumber(5, 10);
    const progression = generateProgression(start, step, length);
  
    const hiddenIndex = getRandomNumber(0, length - 1);
    const correctAnswer = progression[hiddenIndex].toString();
    const question = progression
      .map((num, idx) => (idx === hiddenIndex ? '..' : num))
      .join(' ');
  
    return { question, answer: correctAnswer };
  };
  