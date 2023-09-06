//rubah setiap company user menjadi binar dan pada email setiap user berubah menjadi @binar.org, contoh = imam@fsw2.com menjadi imam@binar.org
const users = require("./data.json");

//function ganti name company dan email
const changeCompanyAndEmail = (data) => {
  // Buat salinan data parameter agar tidak mengubah data asli
  const result = [...data];

  //lakukan looping untuk cek data satu persatu
  for (let i = 0; i < result.length; i++) {
    // Pisahkan nama pengguna menjadi array kata-kata,pisahkan dengan karakter @
    const splitEmail = result[i].email.split("@"); //setelah di split akan muncul array bagian email, ex : ["imam","fsw.com"]
    const firstPartOfEmail = splitEmail[0]; //kita ambil index ke 0 nya saja, karena index kedua akan diganti dengan binar.org
    result[i].email = `${firstPartOfEmail}@binar.org`; //kita ganti email user dengan index ke 0 ditambah @binar.org

    //ganti semua nama company menjadi "BINAR"
    result[i].company = "BINAR";
  }

  //return hasilnya disini
  return result;
};

console.log(changeCompanyAndEmail(users));
