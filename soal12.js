//tentukan user yang mempunyai nama kurang dari 10 karakter dan umur nya diatas 30 atau gender nya Male dan eyeColor nya brown
const users = require("./data.json");

//fungsi untuk check jumlah karakter nama
const nameLength = (data) => {
  const result = data.length;
  return result;
};

//function checkUser
const checkUser = (data) => {
  //tampung hasil di array result
  const result = [];

  //lakukan looping untuk cek data satu per satu
  for (let i = 0; i < data.length; i++) {
    //jika jumlah karakter nama < 10 dan umur data lebih dari 30 ATAU gender sama dengan "male" dan eyecolor adalah brown maka push data ke array result
    if ((nameLength(data[i].name) < 10 && data[i].age > 30) || (data[i].gender === "male" && data[i].eyeColor === "brown")) {
      result.push(data[i]);
    }
  }
  return result;
};

console.log(checkUser(users));
