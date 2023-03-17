function getAngkaTerbesarKedua(dataNumbers) {
  // validasi parameter
  if (!Array.isArray(dataNumbers)) {
    throw new Error("Parameter harus berupa array");
  }

  // menghapus nilai duplikat dari array dan melakukan sorting secara descending
  const uniqueSortedNumbers = Array.from(new Set(dataNumbers)).sort(
    (a, b) => b - a
  );

  // jika array memiliki 1 atau kurang nilai, maka tidak ada angka terbesar kedua
  if (uniqueSortedNumbers.length <= 1) {
    throw new Error("Array harus memiliki minimal 2 angka");
  }

  // nilai kedua pada array setelah di-sorting adalah angka terbesar kedua
  return uniqueSortedNumbers[1];
}

//contoh penggunaan

const dataNumbers = [2, 3, 5, 6, 6, 4];
const angkaTerbesarKedua = getAngkaTerbesarKedua(dataNumbers);
console.log(angkaTerbesarKedua); // output: 5

function getAngkaTerbesarKedua(personName) {}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
