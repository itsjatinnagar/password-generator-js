// DOM Elements
const resultDisplay = document.getElementById("result"),
    passRange = document.getElementById("slider"),
    passLen = document.getElementById("length"),
    lowerInput = document.getElementById("lower"),
    upperInput = document.getElementById("upper"),
    numberInput = document.getElementById("number"),
    symbolInput = document.getElementById("symbol"),
    generatePassBtn = document.getElementById("generate");

// Slider Styling
const slider = () => {
    passLen.innerText = passRange.value;
    let gradPerc = (100 * (passRange.value - 8)) / (38 - 8);
    passRange.style.background = `linear-gradient(to right, hsl(237, 53%, 55%) ${gradPerc}%, hsla(0, 0%, 100%, 0.314) ${gradPerc}%)`;
};

// Array from Range
const arrayFromRange = (lower, upper) => {
    let list = [];
    for (let i = lower; i <= upper; i++) {
        list.push(i);
    }
    return list;
};

// Get Randoms
const lowerAlphaCodes = arrayFromRange(97, 122);

const upperAlphaCodes = arrayFromRange(65, 90);

const numberCodes = arrayFromRange(48, 57);

const symbolCodes = arrayFromRange(33, 47)
    .concat(arrayFromRange(58, 64))
    .concat(arrayFromRange(91, 96))
    .concat(arrayFromRange(123, 126));

// Generate Password
const generatePassword = () => {
    let hasLower = lowerInput.checked,
        hasUpper = upperInput.checked,
        hasNumber = numberInput.checked,
        hasSymbol = symbolInput.checked,
        totalCount = hasLower + hasUpper + hasNumber + hasSymbol,
        includeCodes = [],
        index = passRange.value,
        password = "";

    if (totalCount === 0) {
        resultDisplay.value = "Minimum 1 setting required";
        return;
    } else {
        if (hasLower) {
            includeCodes = includeCodes.concat(lowerAlphaCodes);
        }
        if (hasUpper) {
            includeCodes = includeCodes.concat(upperAlphaCodes);
        }
        if (hasNumber) {
            includeCodes = includeCodes.concat(numberCodes);
        }
        if (hasSymbol) {
            includeCodes = includeCodes.concat(symbolCodes);
        }
    }

    for (let i = 0; i < index; i++) {
        let randInt = Math.floor(Math.random() * includeCodes.length);
        password += String.fromCharCode(includeCodes[randInt]);
    }

    resultDisplay.value = password;
};

// DOM Events
window.addEventListener("load", () => {
    slider();
    generatePassword();
});
passRange.addEventListener("input", slider);
generatePassBtn.addEventListener("click", () => {
    generatePassword();
});

// Copy To Clipboard
const copyBtn = document.getElementById("copy-btn");
copyBtn.addEventListener("click", () => {
    copyBtn.classList.remove("far");
    copyBtn.classList.add("fas");
    setTimeout(() => {
        copyBtn.classList.remove("fas");
        copyBtn.classList.add("far");
    }, 2000);

    navigator.clipboard.writeText(resultDisplay.value);
});
