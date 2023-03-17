function getTotalPenjualan(dataPenjualan) {
  // validasi parameter
  if (!Array.isArray(dataPenjualan)) {
    throw new Error("Parameter harus berupa array");
  }

  // inisialisasi totalPenjualan dengan nilai 0
  let totalPenjualan = 0;

  // melakukan iterasi pada setiap objek di dalam array
  for (const obj of dataPenjualan) {
    // validasi apakah objek memiliki properti totalTerjual dengan tipe number
    if (typeof obj.totalTerjual !== "number") {
      throw new Error(
        "Setiap objek harus memiliki properti totalTerjual dengan tipe number"
      );
    }
    // menambahkan nilai totalTerjual pada variabel totalPenjualan
    totalPenjualan += obj.totalTerjual;
  }

  // mengembalikan totalPenjualan
  return totalPenjualan;
}

//contoh penggunaan
const dataPenjualan = [
  { id: 1, nama: "Sepatu A", totalTerjual: 10 },
  { id: 2, nama: "Sepatu B", totalTerjual: 15 },
  { id: 3, nama: "Sepatu C", totalTerjual: 20 },
];

const totalPenjualan = getTotalPenjualan(dataPenjualan);
console.log(totalPenjualan); // output: 45
