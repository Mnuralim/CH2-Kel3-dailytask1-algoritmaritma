// Buat sebuah function yang bisa melakukan fungsi dari fibonacci number di dalam kode Javascript.
// Bisa diskusi dengan teman kelompokmu ya!

//fibonaci : 0,1,1,2,3,5,8,13,21,34...

//function fibonaci
const fibonacci = (n) => {
  //tmapung hasil di array result
  let result = [];

  // Loop untuk menghasilkan urutan hingga ke-n
  for (let i = 0; i < n; i++) {
    if (i <= 0) {
      // Jika i adalah 0, tambahkan 0 ke array
      result.push(0);
    } else if (i === 1) {
      // Jika i adalah 1, tambahkan 1 ke array
      result.push(1);
    } else {
      // jika nilai i lebih besar dari 1, tambahkan elemen baru
      // dengan menjumlahkan dua elemen sebelumnya dalam array
      result.push(result[i - 1] + result[i - 2]);
    }
  }

  //return hasilnya
  return result;
};

console.log(fibonacci(10));
