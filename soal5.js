function getSplitName(personName) {
  // Validasi tipe data parameter
  if (typeof personName !== "string") {
    throw new TypeError("Parameter harus berupa string");
  }

  // Memecah nama menjadi array kata
  const nameArray = personName.split(" ");

  // Validasi jumlah suku kata
  if (nameArray.length > 3) {
    throw new Error("Nama lengkap tidak boleh lebih dari 3 suku kata");
  }

  // Inisialisasi variabel untuk menyimpan nama depan, tengah, dan belakang
  let firstName = null;
  let middleName = null;
  let lastName = null;

  // Mengisi variabel nama depan, tengah, dan belakang
  if (nameArray.length === 1) {
    firstName = nameArray[0];
  } else if (nameArray.length === 2) {
    firstName = nameArray[0];
    lastName = nameArray[1];
  } else if (nameArray.length === 3) {
    firstName = nameArray[0];
    middleName = nameArray[1];
    lastName = nameArray[2];
  }

  // Membuat object dengan nama depan, tengah, dan belakang
  const result = {
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
  };

  // Mengembalikan object hasil
  return result;
}

console.log(getSplitName("Aldi Daniela Pranata"));
// Output: { firstName: 'Aldi', middleName: 'Daniela', lastName: 'Pranata' }

console.log(getSplitName("Dwi Kuncoro"));
// Output: { firstName: 'Dwi', middleName: null, lastName: 'Kuncoro' }

console.log(getSplitName("Aurora"));
// Output: { firstName: 'Aurora', middleName: null, lastName: null }

console.log(getSplitName("Aurora Aureliya Sukma Jaya"));
// Output: Error: Nama lengkap tidak boleh lebih dari 3 suku kata

console.log(getSplitName(0));
// Output: TypeError: Parameter harus berupa string
