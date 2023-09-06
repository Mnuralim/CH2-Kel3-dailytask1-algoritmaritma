// Diberikan sebuah string alamat IP yang valid. Untuk setiap tanda . pada alamat IP gantilah menjadi tanda ()

// Petunjuk
// Loop string tersebut dan replace simbol yang di maksud.

function solution(str) {
  // tulis jawabanmu disini
  //tampun result di dalam string kosong atau inisialisasi nilai awal
  let result = "";

  //lakukakn looping untuk cek data satu per satu
  for (let i = 0; i < str.length; i++) {
    //lakukan pengkondisian. mengecek apakah karakter saat ini mengandung titik
    if (str.charAt(i) === ".") {
      result = result + "()"; //jika iya maka karakter titik(.) diganti dengan tanda kurung ((e)) dan menambahkam ke variable result
    } else {
      result = result + str.charAt(i); //jika tidak maka karater saat ini ditambahkan ke variable result
    }
  }
  //return hasilnya
  return result;
}

console.log(solution("1.1.1.1")); // expected output 1()1()1()1()
console.log(solution("192.168.1.1")); // expected output 192()268()1()1()
