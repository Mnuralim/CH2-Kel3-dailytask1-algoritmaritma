//tentukan user yang tidak mempunya teman bernama Irfi dan Adella dan ada berapa jumlah nya
const users = require("./data.json");

//buat function untuk mengecek list friendnya
const checkFriendList = (data) => {
  //buat array result unutk menampung data;
  const result = [];

  //lakukakn looping untuk cek data satu per satu;
  for (let i = 0; i < data.length; i++) {
    //deklarasi awal apakah data saat ini punya terman bernama Adella
    let checkAdella = false;
    //deklarasi awal apakah data saat ini punya terman bernama Adella
    let checkIrfi = false;

    //lakukan looping untuk cek friendlist data tersebut
    for (let j = 0; j < data[i].friends.length; j++) {
      //cek apakah data saat ini punya teman bernama Adella,jika iya maka variable checkAdella akan bernilai true
      if (data[i].friends[j].name === "Adella") {
        checkAdella = true;
      }
      //cek apakah data saat ini punya teman bernama Irfi,jika iya maka variable checkIrfi akan bernilai true
      if (data[i].friends[j].name === "Irfi") {
        checkIrfi = true;
      }
    }
    //check apakah data tersebut punya teman bernama Adella dan Ifri,cek dari variable checkAdella dan variable checkIfri,
    //jika tidak memenuhi keduanya maka push data ke result
    if (!checkAdella && !checkIrfi) {
      result.push(data[i]);
    }
  }
  const totalData = result.length;
  return { result, totalData };
};

console.log(checkFriendList(users));
// checkFriendList(users);
