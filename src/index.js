module.exports = function toReadable(num) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (num < 20) {
    return ones[num];
  }

  if (num < 100) {
    const t = Math.floor(num / 10);
    const o = num % 10;
    return o ? `${tens[t]} ${ones[o]}` : tens[t];
  }

  if (num < 1000) {
    const h = Math.floor(num / 100);
    const remainder = num % 100;
    let result = `${ones[h]} hundred`;
    if (remainder) {
      result += ` ${toReadable(remainder)}`;
    }
    return result;
  }

  return 'number out of range';
};
