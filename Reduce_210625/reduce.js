const numbers = [3, 7, 2, 9, 1, 5];

const max = numbers.reduce((acc, current) => {
    return current > acc ? current : acc;
});

console.log(max); 