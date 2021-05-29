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

// Get Randoms
const getLowerAlpha = () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 97);

const getUpperAlpha = () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 65);

const getNumber = () => Math.floor(Math.random() * 10);

const getSymbol = () => {
    const symbols = "`-=~!@#$%^&*()_+[]\\{}|;':\",./<>?";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

// Generate Password
const generatePassword = () => {
    let hasLower = lowerInput.checked,
        hasUpper = upperInput.checked,
        hasNumber = numberInput.checked,
        hasSymbol = symbolInput.checked,
        totalCount = hasLower + hasUpper + hasNumber + hasSymbol,
        index = passRange.value,
        password = "";

    if (totalCount === 0) {
        resultDisplay.value = "Minimum 1 setting required";
        return;
    }

    while (index > 0) {
        let randNum = Math.floor(Math.random() * 4);
        if (randNum == 0 && hasLower) password += getLowerAlpha();
        else if (randNum == 1 && hasUpper) password += getUpperAlpha();
        else if (randNum == 2 && hasNumber) password += getNumber();
        else if (randNum == 3 && hasSymbol) password += getSymbol();
        else continue;

        index--;
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
