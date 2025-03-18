const generateRound = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const question = `${num1} + ${num2}`;
    const correctAnswer = String(num1 + num2);
    return { question, correctAnswer };
  };
  
  export default generateRound;
  