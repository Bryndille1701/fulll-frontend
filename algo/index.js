var fizzbuzz = function (n) {
  // 15 est divisible par 3 et 5
  if (n % 15 === 0) return 'fizzbuzz';
  if (n % 3 === 0) return 'fizz';
  if (n % 5 === 0) return 'buzz';
  // On retourne la valeur de n sous forme de string
  return String(n);
};
// We make a loop from 1 to 100
for (var i = 1; i <= 100; i++) {
  console.log(fizzbuzz(i));
}
// tsc index.ts && node index.js to run
