function checkTypeNumber(number) {
  if (!number) {
    return "Bro where is the parameter?";
  }
  if (typeof number !== "number" || isNaN(number)) {
    return "Invalid data type";
  }
  if (number % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
}

console.log(checkTypeNumber(10)); // Output: "GANJIL"
console.log(checkTypeNumber(3)); // Output: "GENAP"
console.log(checkTypeNumber("3")); // Output: "Invalid data type"
console.log(checkTypeNumber({})); // Output: "Invalid data type"
console.log(checkTypeNumber([])); // Output: "Invalid data type"
console.log(checkTypeNumber()); // Output: "Bro where is the parameter?"
