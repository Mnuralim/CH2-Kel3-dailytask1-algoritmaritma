// Diberikan sebuah angka n, jumlahkanlah masing - masing digit pada angka tersebut.

// Petunjuk
// Gunakan operator modulus untuk mengambil setiap digit dari angka tersebut

function solution(n) {
  // tulis jawabanmu disini
  //konversi parameter n ke string
  const nToString = n.toString();

  //deklarasi niai total awal
  let total = 0;
  //lakukan looping untuk cek satu persatu karakter
  for (let i = 0; i < nToString.length; i++) {
    total += parseInt(nToString.charAt(i)); //tambahkan total dengan karakter saat ini yang sudah diparse ke number
  }

  //return hasil total
  return total;
}

console.log(solution(2022)); // expected output 6
console.log(solution(1001)); // expected output 2
