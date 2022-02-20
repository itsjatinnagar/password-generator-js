// Callback function to execute when mutations are observed
const rangeCallback = (mutationsList) => {
    const mutation = mutationsList[0];
    if (mutation.attributeName === "min" || mutation.attributeName === "max") {
        slider();
    }
};
