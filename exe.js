function countNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Invalid input");
        return;
    }
    let count = 0;
    for (let i = 0; i <numbers.length; i++) {
        if (typeof numbers[i] === "number") {
            count++;
        }
    }
    return count;
}

console.log(countNumbers([10, 20, 30, 40, 50]));