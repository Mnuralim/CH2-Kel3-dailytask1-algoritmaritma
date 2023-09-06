// Buatlah sebuah function untuk melakukan format sorting array di dalam kode Javascript.
// Bisa diskusi dengan teman kelompokmu ya!

const dummy = [2, 4, 1, 9, 3, 5, 11];

const sortingArrayAsc = (data) => {
  //data sementara
  const result = [...data];

  //lakukan looping untuk mengatur jumlah iterasi
  for (let i = 0; i < result.length - 1; i++) {
    //looping untuk pertukaran atau swap
    for (let j = 0; j < result.length - 1 - i; j++) {
      //jika data saat ini lebih besar dari data setelahnya,maka tukarkan posisinya
      if (result[j] > result[j + 1]) {
        let temp = result[j]; //data saat ini
        result[j] = result[j + 1]; //ubah data saat ini menjadi data setelahnya
        result[j + 1] = temp; //ubah data setelahnya menjadi data sebelumnya
      }
    }
  }
  //return hasilnya
  return result;
};

console.log(sortingArrayAsc(dummy));
