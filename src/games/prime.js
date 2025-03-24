const getRandomNumber = (min = 1, max = 100) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  
  export const generateRound = () => {
    const number = getRandomNumber(2, 100);
    const question = number.toString();
    const answer = isPrime(number) ? 'yes' : 'no';
  
    return { question, answer };
  };
  