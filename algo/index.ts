const fizzbuzz = (n: number) => {
  // 15 is divisible by 3 and 5
  if (n % 15 === 0) return 'fizzbuzz';
  if (n % 3 === 0) return 'fizz';
  if (n % 5 === 0) return 'buzz';
  // We return the value as a string
  return String(n);
};

// We make a loop from 1 to 100
for (let i = 1; i <= 100; i++) {
  console.log(fizzbuzz(i));
}

export {};

// tsc index.ts && node index.js to run
