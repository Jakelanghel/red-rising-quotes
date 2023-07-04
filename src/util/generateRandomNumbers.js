export const generateRandomNumbers = (array, length) => {
  const randomNumbers = [];
  const maxIndex = array.length - 1;

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (maxIndex + 1));
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
};
