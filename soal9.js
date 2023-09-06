//tentukan user yang company huruf belakang nya berawal E dan ada berapa jumlah user nya
const users = require("./data.json");

//buat function untuk cek karakter pertama
const checkLastCharacter = (data) => {
  //array result unutk menampung hasil
  const result = [];

  //looping untuk cek data satu per satu
  for (let i = 0; i < data.length; i++) {
    const lengthOfNameCompany = data[i].company.length;
    //jika nama company diakhiri huruf "L" maka push data ke result
    if (data[i].company.charAt(lengthOfNameCompany - 1) === "E") {
      result.push(data[i]);
    }
  }

  //jumlah data yang memenuhi
  const totalData = result.length;

  //return hasil/result dan jumlah datanya
  return { result, totalData };
};

//tampung function dengan argumennya didalam variable data
const data = checkLastCharacter(users);

//hasil data
const resultData = data.result;

//jumlah data
const totalData = data.totalData;

console.log({ resultData });
console.log({ totalData });
