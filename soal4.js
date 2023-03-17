function isValidPassword(givenPassword) {
  // validasi tipe data parameter
  if (typeof givenPassword !== "string") {
    throw new Error("Parameter harus berupa string");
  }

  // validasi kriteria password
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return regex.test(givenPassword);
}

console.log(isValidPassword("Meong2021")); // true
console.log(isValidPassword("meong2021")); //false
console.log(isValidPassword("&eong")); //false
console.log(isValidPassword("Meong2")); //false
console.log(isValidPassword(0)); //eror karena parameter harus berupa string
console.log(isValidPassword()); //eror karena tidak memiliki nilai input
