//tentukan user yang gender female ATAU user yang eyeColor nya brown dan ada berapa jumlah user nya
const users = require("./data.json");

const checkGenderOrEyeColor = (data) => {
  //buat array kosong untuk penampungan hasil
  const result = [];

  //lakukan looping untuk cek data satu per satu
  for (let i = 0; i < data.length; i++) {
    //eliminasi data, jika gender="female" atau eyeColor="brown",push data ke array result
    if (data[i].gender === "female" || data[i].eyeColor === "brown") {
      result.push(data[i]); //method push
    }
  }

  //tampung jumlah data yang memenuhi
  const totalData = result.length;

  //return result dan jumlah data nya
  return { result, totalData };
};

//tampung function dengan argumennya didalam variable data
const data = checkGenderOrEyeColor(users);

//hasil data
const resultData = data.result;

//jumlah data
const totalData = data.totalData;

console.log({ resultData });
console.log({ totalData });
