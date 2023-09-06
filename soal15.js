//rubah user yang gender female address nya menjadi laut, dan user yang gender male address nya gunung
const users = require("./data.json");

//function change address
const changeAddress = (data) => {
  // Buat salinan data parameter agar tidak mengubah data asli
  const result = [...data];

  //looping untuk cek data satu persatu
  for (let i = 0; i < result.length; i++) {
    //jika gender user adalah female,maka address user ganti menjadi laut,jika tidak maka address user ganti menjadi gunung
    if (result[i].gender === "female") {
      result[i].address = "laut"; //ganti address
    } else {
      result[i].address = "gunung"; //ganti address
    }
  }

  //return hasilny disini
  return result;
};

console.log(changeAddress(users));
