//tentukan user yang mempunyai teman bernama Grace dan favorit fruit nya apple atau banana
const users = require("./data.json");

//function unutk cek punya teman namanya Grace dan fav fruit banana atau apel
const checkFriendListAndFavFruit = (data) => {
  //tampung hasil di array result
  const result = [];

  //looping untuk cek data satu per satu
  for (let i = 0; i < data.length; i++) {
    let isFriendListGrace = false; //inisialiasi awal apakah data mempunyai teman bernama grace

    //lakukan looping untuk cek satu per satu data friendlist
    for (let j = 0; j < data[i].friends.length; j++) {
      //jika data mempunya teman bernama grace, maka variable isFriendListGrace akan bernilai true
      if (data[i].friends[j].name === "Grace") {
        isFriendListGrace = true;
      }
    }
    //jika data tersebut mempunyai teman bernama grace dan buah favoritnya apel atau jika data tersebut mempunyai teman bernama grace dan buah favoritnya adalah banana, maka push data tersebut ke array result
    if ((isFriendListGrace && data[i].favoriteFruit === "apple") || (isFriendListGrace && data[i].favoriteFruit === "banana")) {
      result.push(data[i]);
    }
  }

  //return hasilnya
  return result;
};

console.log(checkFriendListAndFavFruit(users));
