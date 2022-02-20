const rangeWrapper = document.querySelector(".range-wrapper"),
    passRange = document.getElementById("slider"),
    passLen = document.getElementById("length"),
    generatePassBtn = document.getElementById("generate"),
    copyBtn = document.getElementById("copy-btn");

// Slider Styling
const slider = () => {
    rangeWrapper.dataset.min = passRange.getAttribute("min");
    rangeWrapper.dataset.max = passRange.getAttribute("max");

    let passRangeMin = passRange.getAttribute("min"),
        passRangeMax = passRange.getAttribute("max");

    passLen.innerText = passRange.value;
    const gradPerc =
        (100 * (passRange.value - passRangeMin)) /
        (passRangeMax - passRangeMin);
    passRange.style.background = `linear-gradient(to right, hsl(237, 53%, 55%) ${gradPerc}%, hsla(0, 0%, 100%, 0.314) ${gradPerc}%)`;
};

// DOM Events
window.addEventListener("load", () => {
    slider();
    generatePassword();
});

// Password Length Slider
passRange.addEventListener("input", slider);

// Generate Password Button
generatePassBtn.addEventListener("click", generatePassword);

// Copy To Clipboard
copyBtn.addEventListener("click", () => {
    copyBtn.classList.remove("far");
    copyBtn.classList.add("fas");
    setTimeout(() => {
        copyBtn.classList.remove("fas");
        copyBtn.classList.add("far");
    }, 2000);

    navigator.clipboard.writeText(resultDisplay.value);
});

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Range Slider Observer
const rangeObserver = new MutationObserver(rangeCallback);
rangeObserver.observe(passRange, config);
