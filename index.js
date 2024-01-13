function filterList(inputList) {
    if (inputList.length % 10 !== 0) {
        throw new Error("Error: The input list is not a multiple of 10 in length.");
    }

    const filteredList = inputList.filter((_, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);
    return filteredList;
}

module.exports = filterList;


try {
    const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterList(inputList);
    console.log("Filtered list:", result);
} catch (error) {
    console.error(error.message);
}

