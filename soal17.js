// Nilai ujian mahasiswa dikategorikan sebagai berikut :
// - A : 91 - 100
// - B : 81 - 90
// - C : 71 - 80
// - D : 61 - 70
// - E : <= 60\
// Diberikan sebuah nilai ujian, tentukan kategori dari nilai tersebut

// Petunjuk
// Check input dan cocokan dengan kategori yang telah dibuat.

function solution(n) {
  // tulis jawabanmu disini
  let result;
  //jika n kurang dari sama dengan 100 dan n lebih dari sama dengan 91 maka result = "A"
  if (n <= 100 && n >= 91) {
    result = "A";
    //jika n kurang dari sama dengan 90 dan n lebih dari sama dengan 81 maka result = "B"
  } else if (n <= 90 && n >= 81) {
    result = "B";
    //jika n kurang dari sama dengan 80 dan n lebih dari sama dengan 71 maka result = "C"
  } else if (n <= 80 && n >= 71) {
    result = "C";
    //jika n kurang dari sama dengan 70 dan n lebih dari sama dengan 61 maka result = "D"
  } else if (n <= 70 && n >= 61) {
    result = "D";
    //jika n kurang dari sama dengan 60 dan n lebih dari sama dengan 0 maka result = "E"
  } else if (n <= 60 && n >= 0) {
    result = "E";
  } else if (n < 0) {
    //jika n kurang dari 0 maka result ="nilai tidak boleh negatif"
    result = "Nilai tidak boleh negatif";
  } else {
    //jika tidak memenuhi semua kondisi diatas maka result = "Nilai tidak boleh lebih dari 100"
    result = "Nilai tidak boleh lebih dari 100";
  }
  return result;
}

console.log(solution(95)); // expected output A
console.log(solution(76)); // expected output C
console.log(solution(71)); // expected output C
