const isPrime = (number) => {
    let iterator;

    for (iterator = 2; iterator <= Math.sqrt(number); iterator++) {
        if (number % iterator === 0) return false;
    }

    return true;
};

const prime = (min, max) => {
    let result = [],
        iterator;

    if (max === 1) return null;

    for (iterator = min; iterator <= max; iterator++) {
        if (isPrime(iterator) && iterator > 1) result.push(iterator);
    }

    return result;
};


export { prime, isPrime } ;
