// https://leetcode.com/problems/number-complement/description/?source=submission-ac

function findComplement(decimalValue: number): number {
  const powersOfTwoDescending: number[] = [];
  let currentPower = 1;
  let remainingValue = decimalValue;

  while (currentPower <= decimalValue) {
    powersOfTwoDescending.push(currentPower);
    currentPower *= 2;
  }

  powersOfTwoDescending.reverse();

  const binaryDigits: number[] = powersOfTwoDescending.map((power) => {
    if (power <= remainingValue) {
      remainingValue -= power;
      return 1;
    }
    return 0;
  });

  const invertedBinaryDigits = binaryDigits.map((bit) => (bit === 0 ? 1 : 0));

  let complement = 0;
  for (let i = 0; i < invertedBinaryDigits.length; i++) {
    complement += invertedBinaryDigits[i] * powersOfTwoDescending[i];
  }

  return complement;
}

console.log(findComplement(5))
