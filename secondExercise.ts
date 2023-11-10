interface dataKaryawan {
  nama: string;
  umur: number;
  nik: number;
  tanggalLahir: string;
  departemen: string;
  divisi: string;
  jabatan: string;
  grade: string;
  noNpwp: number;
  NoRekening: number;
  namaPemegangRekening: string;
}

const namaKaryawan: dataKaryawan = {
  nama: "Lutfi",
  umur: 24,
  nik: 17389298126,
  tanggalLahir: "12 Agustus 1998",
  departemen: "web development",
  divisi: "FE developer",
  jabatan: "junior developer",
  grade: "B",
  noNpwp: 193730171307,
  NoRekening: 301031,
  namaPemegangRekening: "Lutfi",
};

const firstNum: number = 10;
const secondNum: number = 5;

const divideNum: number = firstNum / secondNum;
console.log("Hasil pembagian:", divideNum);

const sumNum: number = firstNum + secondNum;
const redNum: number = firstNum - secondNum;
console.log("Hasil penjumlahan:", sumNum);
console.log("Hasil pengurangan:", redNum);

console.log(namaKaryawan);
