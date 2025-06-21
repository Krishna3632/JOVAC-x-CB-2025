function greet(name) {
  return `Hello, ${name}!`;
}

function processUserInput(callback) {
  const name = "Krishna";
  console.log(callback(name));
}

processUserInput(greet);

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5));

