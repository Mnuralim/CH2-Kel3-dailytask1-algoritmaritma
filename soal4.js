//tentukan user yang mempunya friend bernama Imam dan ada berapa jumlah user nya
const users = require("./data.json");

//fungsi untuk mencari data yang punya teman namanya imam
const checkFriend = (data) => {
  //tampung hasil di array result
  const result = [];

  //lakukan looping untuk cek dara satu per satu
  for (let i = 0; i < data.length; i++) {
    //lakukan chek data teman satu per satu
    let check = false; //initial awal nilai check

    for (let j = 0; j < data[i].friends.length; j++) {
      //jika data mempunyai teman bernama imam, maka nilai check akan bernilai true
      if (data[i].friends[j].name === "Imam") {
        // console.log({ name: data[i].name, friends: data[i].friends[j].name });
        check = true;
      }
    }
    //jika check bernilai data true pada data ke i,maka push data ke array result
    if (check) {
      result.push(data[i]);
    }
  }
  //jumlah data yang punya teman = Imam
  const totalData = result.length;
  //return hasil dan jumlah datanya
  return {
    result,
    totalData,
  };
};

console.log(checkFriend(users));
