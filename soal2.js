//tentukan user yang gender female dan ada berapa jumlah user nya

const users = require("./data.json");

//buat fungsi check gender

const checkGender = (data) => {
  //tampung hasil di array result
  const result = [];

  //lakukan looping untuk cek satu per satu data
  for (let i = 0; i < data.length; i++) {
    //jika data gender = female,maka data push data tersebut ke array result
    if (data[i].gender === "female") {
      result.push(data[i]); //push
    }
  }
  //jumlah data gender = female
  const totalData = result.length;
  return {
    result,
    totalData,
  };
};

console.log(checkGender(users));
