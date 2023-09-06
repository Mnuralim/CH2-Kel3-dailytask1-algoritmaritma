//tentukan user yang berumur dibawah 30 dan registered sesudah tahun 2018 dan berapa jumlah nya
const users = require("./data.json");

//fungsi untuk mengambil data tahunnya saja
const getYearData = (time) => {
  const year = time.split("-", 1)[0];
  return year;
};

//fungsi untuk cek umur dan tahun register
const checkAgeAndRegisterYear = (data) => {
  //tampung hasil di array result;
  const result = [];

  //lakukan looping untuk cek satu per satu data
  for (let i = 0; i < data.length; i++) {
    //check apakah user berusia dibawah 30 tahun dan apakah dia resgitered sesudah 2018, jika iya maka push data ke result
    if (data[i].age <= 30 && getYearData(data[i].registered) >= 2018) {
      result.push(data[i]);
    }
  }

  //jumlah data yang memenuhi
  const totalData = result.length;

  //return hasil/result dan jumlah datanya
  return { result, totalData };
};

console.log(checkAgeAndRegisterYear(users));
