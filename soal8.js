function getInfoPenjualan(dataPenjualan) 
  // validasi parameter
  if (!Array.isArray(dataPenjualan)) {
    throw new Error('Parameter harus berupa array');
  }

  // inisialisasi variabel-variabel untuk menyimpan informasi penjualan
  let totalKeuntungan = 0;
  let totalModal = 0;
  let bukuTerlaris = {};
  let penulisTerlaris = {};
  let totalTerjual = 0;

  // melakukan iterasi pada setiap objek di dalam array
  for (const obj of dataPenjualan) {
    // validasi apakah objek memiliki properti yang diperlukan
    if (
      typeof obj.modal !== 'number' ||
      typeof obj.hargaJual !== 'number' ||
      typeof obj.jumlahTerjual !== 'number' ||
      typeof obj.penulis !== 'string'
    ) {
      throw new Error('Setiap objek harus memiliki properti yang diperlukan dengan tipe data yang sesuai');
    }

    // menghitung total modal dan total keuntungan
    const modal = obj.modal * obj.jumlahTerjual;
    const hargaJual = obj.hargaJual * obj.jumlahTerjual;
    const keuntungan = hargaJual - modal;
    totalModal += modal;
    totalKeuntungan += keuntungan;
    totalTerjual += obj.jumlahTerjual;

    // mencari buku terlaris
    if (!bukuTerlaris[obj.judul]) {
      bukuTerlaris[obj.judul] = 0;
    }
    bukuTerlaris[obj.judul] += obj.jumlahTerjual;

    // mencari penulis terlaris
    if (!penulisTerlaris[obj.penulis]) {
      penulisTerlaris[obj.penulis] = 0;
    }
    penulisTerlaris[obj.penulis] += obj.jumlahTerjual;
  }

  // mencari buku terlaris berdasarkan jumlah terjual
  let maxTerjual = 0;
  let produkBukuTerlaris = '';
  for (const [judul, terjual] of Object.entries(bukuTerlaris)) {
    if (terjual > maxTerjual) {
      maxTerjual = terjual;
      produkBukuTerlaris = judul;
    }
  }
