module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const thousands = ["", "thousand"];

    function getHundreds(num) {
        let result = "";
        if (num > 99) {
            result += units[Math.floor(num / 100)] + " hundred ";
            num %= 100;
        }
        if (num > 10 && num < 20) {
            result += teens[num - 10] + " ";
        } else {
            if (num >= 10) {
                result += tens[Math.floor(num / 10)] + " ";
                num %= 10;
            }
            if (num > 0) {
                result += units[num] + " ";
            }
        }
        return result.trim();
    }

    if (number === 0) {
        return "zero";
    }

    let result = "";
    let thousandPart = Math.floor(number / 1000);
    let hundredPart = number % 1000;

    if (thousandPart > 0) {
        result += getHundreds(thousandPart) + " thousand ";
    }
    if (hundredPart > 0) {
        result += getHundreds(hundredPart);
    }

    return result.trim();
};
