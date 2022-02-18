// DOM Elements
const resultDisplay = document.getElementById("result"),
    includeLower = document.getElementById("lower").checked,
    includeUpper = document.getElementById("upper").checked,
    includeNumber = document.getElementById("number").checked,
    includeSymbol = document.getElementById("symbol").checked;

// Array from Range
const arrayFromRange = (lower, upper) => {
    let list = [];
    for (let i = lower; i <= upper; i++) {
        list.push(String.fromCharCode(i));
    }
    return list;
};

const lowerAlphabets = arrayFromRange(97, 122);
const upperAlphabets = arrayFromRange(65, 90);
const numbers = arrayFromRange(48, 57);
const symbols = arrayFromRange(33, 47)
    .concat(arrayFromRange(58, 64))
    .concat(arrayFromRange(91, 96))
    .concat(arrayFromRange(123, 126));

// Generate Password
const generatePassword = () => {
    let totalCount =
            includeLower + includeUpper + includeNumber + includeSymbol,
        characterSet = [],
        index = passRange.value,
        password = "";

    if (totalCount === 0) {
        resultDisplay.value = "Minimum 1 setting required";
        return;
    } else {
        if (includeLower) {
            characterSet = characterSet.concat(lowerAlphabets);
        }
        if (includeUpper) {
            characterSet = characterSet.concat(upperAlphabets);
        }
        if (includeNumber) {
            characterSet = characterSet.concat(numbers);
        }
        if (includeSymbol) {
            characterSet = characterSet.concat(symbols);
        }
    }

    for (let i = 0; i < index; i++) {
        let randInt = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randInt];
    }

    resultDisplay.value = password;
};
