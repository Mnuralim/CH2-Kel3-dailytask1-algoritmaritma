// Diberikan sebuah string s. Tentukan apakah terdapat karakter `a` dan `b` yang jarak  `a ke b` atau `b ke a` yang memiliki jarak minimal 3 karakter.
// Return "YES" jika ya dan "NO" jika tidak.

// Petunjuk
// Check tiap karakter kemudian check 4 karakter setelahnya.

function solution(str) {
  // tulis jawabanmu disini

  //inisialisai default resultnya adalah NO
  let result = "NO";
  //lakukan looping untuk mengitterasi setiap karakter
  for (let i = 0; i < str.length; i++) {
    //cek karakter saat ini adalah a atau b
    if (str[i] === "a" || str[i] === "b") {
      //cek 3 karakter selanjutnya/sebelumnya dari karakter saat ini
      for (let j = i + 4; j < str.length; j++) {
        //jika karakter saat ini a dan 3 karakter selanjutnya/sebelumnya adalah b, atau jika karakter saat ini adalah b dan 3 karakter selanjutnya/sebelumnya adalah a maka result di set menjadi "YES"
        if ((str[i] === "a" && str[j] === "b") || (str[i] === "b" && str[j] === "a")) {
          result = "YES";
        }
      }
    }
  }
  //Return hasilnya disini
  return result;
}

console.log(solution("acdebae")); // expected output YES
console.log(solution("cdaecba")); // expected output NO
