// Yudi ingin menarik uang sebanyak X rupiah dari ATM. Mesin ATM hanya akan menerima transaksi jika X kelipatan 5 dan saldo rekening Yudi memiliki cukup uang untuk melakukan transaksi penarikan (termasuk biaya bank). Untuk setiap penarikan yang berhasil, bank mengenakan biaya 0,5 rupiah.
// Diberikan X adalah uang yang ingin yudi tarik dan Y adalah jumlah uang dalam rekening Yudi. Ayo hitung saldo akun Yudi setelah melakukan transaksi!

// Petunjuk
// Cukup lakukan operasi aritmatika biasa.

function solution(x, y) {
  // tulis jawabanmu disini
  let result;
  if (x % 5 !== 0 || x > y) {
    if (x % 5 !== 0) {
      result = `penarikan harus kelipatan 5, sisa saldo Yudi adalah ${y}`;
    } else if (x > y) {
      result = `saldo tidak cukup,sisa saldo Yudi adalah ${y}`;
    }
  } else {
    //asumsikan bank fee 0.5
    const bankFee = 0.5;
    result = `sisa saldo Yudi adalah ${y - x - bankFee}`;
  }
  return result;
}

console.log(solution(30, 120)); // expected output 89.5
console.log(solution(42, 100)); // expected output 100
