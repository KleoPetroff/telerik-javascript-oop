const isPrime = (number) => {
  for (let iterator = 2; iterator <= Math.sqrt(number); iterator++) {
    if (number % iterator === 0) return false;
  }

  return true;
};

const prime = (min, max) => {
  const result = [];

  if (max === 1) return null;

  for (let iterator = min; iterator <= max; iterator++) {
    if (isPrime(iterator) && iterator > 1) result.push(iterator);
  }

  return result;
};

export {prime, isPrime};
