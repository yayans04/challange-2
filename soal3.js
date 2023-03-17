function checkEmail(email) {
  if (typeof email !== "string") {
    throw new TypeError("Parameter harus berupa string");
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return "VALID";
  } else {
    return "INVALID";
  }
}

console.log(checkEmail("apranata@binar.co.id")); // OUTPUT yang keluar => "VALID"
console.log(checkEmail("apranata@binar.com")); // OUTPUT yang keluar => "VALID"
console.log(checkEmail("apranata@binar")); // OUTPUT yang keluar => "INVALID"
console.log(checkEmail("apranata")); // ERROR : Jelaskan Kenapa Ini Error ?menghasilkan error karena input bukan alamat email yang valid.
console.log(checkTypeNumber(checkEmail(3322))); // ERROR : Jelaskan Kenapa Ini Error? menghasilkan error karena parameter yang diberikan bukan string.

console.log(checkEmail()); // ERROR : Jelaskan Kenapa Error? menghasilkan error karena tidak ada parameter yang diberikan saat memanggil fungsi.
