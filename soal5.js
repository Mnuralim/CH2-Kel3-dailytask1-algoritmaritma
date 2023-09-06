//tentukan user yang eyeColor nya blue dan ada berapa jumlah nya
const users = require("./data.json");

//buat function untuk mencari data user yang eyeColor = blue. return data nya dan jumlahnya
const eyeColorBlue = (data) => {
  //buat array kosong untuk penampungan hasil
  const result = [];

  //lakukan looping untuk cek data satu per satu
  for (let i = 0; i < data.length; i++) {
    //lakukan eliminasi jika ada user punya eyeColor ="blue",maka kita push data tersebut ke array result
    if (data[i].eyeColor === "blue") {
      result.push(data[i]); //gunakan method push data
    }
  }
  //kita buat variable untuk menampung jumlah data yang eyeColor = "blue"
  const eyeColorBlueCount = result.length;
  //kita return data result dan data jumlah nya
  return {
    result,
    eyeColorBlueCount,
  };
};

//tampung data funtion
const data = eyeColorBlue(users);

//tampung data result
const result = data.result;
//tampung data jumlah eyeColor = "blue"
const totalEyeBlueColor = data.eyeColorBlueCount;

console.log({ result });
console.log({ totalEyeBlueColor });
