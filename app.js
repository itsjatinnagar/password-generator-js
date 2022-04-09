// DOM Elements
const resultDisplay = document.getElementById("result"),
    includeLower = document.getElementById("lower").checked,
    includeUpper = document.getElementById("upper").checked,
    includeNumber = document.getElementById("number").checked,
    includeSymbol = document.getElementById("symbol").checked;

// Shuffle Array Elements
const shuffle = (list) => {
    let shuffledPassword = [];
    let length = list.length;
    while (length > 0) {
        let randInt = Math.floor(Math.random() * length);
        shuffledPassword.push(list[randInt]);
        list.splice(randInt, 1);
        length--;
    }
    return shuffledPassword;
};

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
        password = [];

    if (totalCount === 0) {
        resultDisplay.value = "Minimum 1 setting required";
        return;
    } else {
        if (includeLower) {
            characterSet = characterSet.concat(lowerAlphabets);
            // Ensure one lower alphabet is included
            let randInt = Math.floor(Math.random() * lowerAlphabets.length);
            password.push(lowerAlphabets[randInt]);
            index--;
        }
        if (includeUpper) {
            characterSet = characterSet.concat(upperAlphabets);
            // Ensure one upper alphabet is included
            let randInt = Math.floor(Math.random() * upperAlphabets.length);
            password.push(upperAlphabets[randInt]);
            index--;
        }
        if (includeNumber) {
            characterSet = characterSet.concat(numbers);
            // Ensure one number is included
            let randInt = Math.floor(Math.random() * numbers.length);
            password.push(numbers[randInt]);
            index--;
        }
        if (includeSymbol) {
            characterSet = characterSet.concat(symbols);
            // Ensure one symbol is included
            let randInt = Math.floor(Math.random() * symbols.length);
            password.push(symbols[randInt]);
            index--;
        }
    }

    for (let i = 0; i < index; i++) {
        characterSet = shuffle(characterSet);
        let randInt = Math.floor(Math.random() * characterSet.length);
        password.push(characterSet[randInt]);
    }

    resultDisplay.value = password.join("");
};
