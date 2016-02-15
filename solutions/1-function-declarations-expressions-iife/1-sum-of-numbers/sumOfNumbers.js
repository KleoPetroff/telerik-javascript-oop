/**
 * Pass an array of number convertible elements and sum them
 * @param array {Array}
 * @returns {number | null}
 */

const sumArray = function (array) {
    let result;

    if (arguments.length === 0) throw Error('No arguments passed');
    else if (array.length === 0) result = null;

    result = array
        .map(item => {
            return typeof item !== 'object' ? parseFloat(item) : null;
        })
        .reduce((prev, curr) => {
            if (typeof prev === 'number' && typeof curr === 'number') {
                return prev + curr;
            }
        });

    if (!result) throw Error('Some elements of the argument is not convertible to Number');

    return result;
};

export default sumArray;
