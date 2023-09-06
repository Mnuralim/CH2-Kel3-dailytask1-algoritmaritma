//setiap nama dari user tukar nama belakang dan depan nya, contoh = "imam taufiq" menjadi "taufiq imam"
const users = require("./data.json");

//function untuk tukar nama
const changePositiionName = (data) => {
  // Buat salinan data parameter agar tidak mengubah data asli
  const result = [...data];

  //lakukan looping untuk cek data satu persatu
  for (let i = 0; i < result.length; i++) {
    // Pisahkan nama pengguna menjadi array kata-kata
    let splitName = result[i].name.split(" ");

    // Jika panjang hasil pemisahan nama adalah 2 (nama depan dan belakang),
    // maka tukar posisi nama depan dan belakang
    if (splitName.length === 2) {
      const firstName = splitName[0]; //
      const lastName = splitName[1];
      result[i].name = `${lastName} ${firstName}`;
    }
  }
  // Kembalikan hasil data dengan nama yang telah ditukar
  return result;
};

console.log(changePositiionName(users));
