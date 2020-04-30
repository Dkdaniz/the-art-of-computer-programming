/*
  Mathematical induction: is a mathematical technique which is used to prove a
  statement, a formula or a theorem is true for every natural number.
*/

let loop = 0;
var proof;

/*
  Let P(n) be some statement about the integer n; for exemple,
  P(n) might be "n times (n + 3) is an even number," or "If n >= 10, then 2**n > n ** 3".
*/

//a) n times (n + 3) is an even number => FALSE;

loop = 10;

console.log(`\n\n loop = ${loop} \n\n n times (n + 3) is an even number \n\n`);

const evenNumber = (i) => { return i % 2 === 0 ? true : false; }

proof = (n) => { return evenNumber((n + 3)) }

for (let index = 0; index <= loop; index++) {
  console.log(`${index} is ${proof(index) ? `even` : `odd`} number`);
}

//a) If n >= 10, then 2**n > n ** 3 => TRUE;

loop = 100;

console.log(`\n\n loop = ${loop} \n\n If n >= 10, then 2**n > n ** 3 \n\n`);

proof = n => {
   return 2 ** n > n ** 3;
};

for (let index = 0; index <= loop; index++) {
  console.log(`2**${index} > ${index} ** 3 => ${proof(index)}`);
}

/*
  Problem: Suppose that we want prove that P(n) is true all positive integers n,
  an important way to do this is:
*/

// a) Give proof that P(1) is true. => TRUE
const P = (n) => { return n > 0; };

// b) Give a proof that "If all of P(1), P(2), P(3) are true, then P(n+1) is also true";
// this proof should be valid for any positive integer n. => TRUE

loop = 10;

console.log(
  `\n\n loop = ${loop} \n\n P(n) is true all positive integers n \n\n`,
);

proof = n => {
  return n+1;
};

for (let index = -10; index <= loop; index++) {
  //P(n+1)
  console.log(`P(${index}) => ${P(proof(index))}`);
}
