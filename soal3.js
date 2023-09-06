//tentukan user yang registered pada tahun 2014 sampai dengan 2018 dan ada berapa jumlah user nya
const users = require("./data.json");

//fungsi untuk mengambil data tahunnya saja
const getYearData = (time) => {
  const year = time.split("-", 1)[0];
  return year;
};

//fungsi untuk check data tahun register
const checkUserYearRegister = (data) => {
  //array result untuk menanmpung hasil;
  const result = [];

  //lakukan loooping untuk cek data satu per satu
  for (let i = 0; i < data.length; i++) {
    //jika user register pada tahun 2014-2018 maka push data ke array result
    if (getYearData(data[i].registered) >= "2014" && getYearData(data[i].registered) <= "2018") {
      result.push(data[i]); //push data
    }
  }
  //jumlah data yang regsiter tahun 2014-2018
  const totalData = result.length;

  //return hasil dan total datanya
  return { result, totalData };
};

console.log(checkUserYearRegister(users));
