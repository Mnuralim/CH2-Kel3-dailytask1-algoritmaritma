//tentukan user yang company huruf depan nya berawal L dan ada berapa jumlah user nya
const users = require("./data.json");

//buat function untuk cek karakter pertama
const checkFirstCharacterOfCommpany = (data) => {
  //array result unutk menampung hasil
  const result = [];

  //looping untuk cek data satu per satu
  for (let i = 0; i < data.length; i++) {
    //jika nama company diawali huruf "L" maka push data ke result
    if (data[i].company.charAt(0) === "L") {
      result.push(data[i]);
    }
  }

  //jumlah data yang memenuhi
  const totalData = result.length;

  //return hasil/result dan jumlah datanya
  return { result, totalData };
};

//tampung function dengan argumennya didalam variable data
const data = checkFirstCharacterOfCommpany(users);

//hasil data
const resultData = data.result;

//jumlah data
const totalData = data.totalData;

console.log({ resultData });
console.log({ totalData });
