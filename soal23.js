// Ada sebuah potongan array seperti di bawah.

// Buatlah perhitungan untuk menentukan dari nilai kelulusan dari siswa dengan aturan:
// Nilai di bawah 50 maka tidak lulus
// Nilai di atas 50 dan di bawah 70 maka remedial
// Nilai di atas 70 maka lulus

// Bisa diskusi dengan kelompokmu ya!

const students = [
  { name: "Peter", score: 30 },
  { name: "Parker", score: 50 },
  { name: "Harry", score: 70 },
  { name: "Eva", score: 79 },
  { name: "Justin", score: 60 },
  { name: "Bieber", score: 90 },
  { name: "Evan", score: 55 },
  { name: "Rowling", score: 90 },
];

//function cek passedExam
const passedExam = (data) => {
  const lulus = []; //menampung data yang lulus
  const remedial = []; //menampung data yang remedial
  const tidakLulus = []; //menampung data yang tidak lulus

  //lakukan looping untuk cek data satu per satu
  for (let i = 0; i < data.length; i++) {
    //jika score data saat ini sama dengan 70 maka simpan data tersebut pada array lulus
    if (data[i].score >= 70) {
      lulus.push(data[i]);
      //jika score data saat ini diatas sama dengan 50 dan dibawah 70 maka simpan data tersbut di array remedial
    } else if (data[i].score < 70 && data[i].score >= 50) {
      remedial.push(data[i]);
      //jika score data saat ini berada di bawah 50 maka simpan data terebut di array tidak lulus
    } else if (data[i].score < 50) {
      tidakLulus.push(data[i]);
    }
  }
  //return data lulus,remedial dan tidak lulus
  return { lulus, tidakLulus, remedial };
};

console.log(passedExam(students));
