interface Siswa {
  name: string;
  score: number;
  class: string;
}

interface HasilKategori {
  lulus: Siswa[];
  gagal: Siswa[];
}

function kategorikanDanFilterSiswa(dataSiswa: Siswa[]): HasilKategori {
  // Membuat objek untuk menyimpan data siswa yang lulus dan gagal
  const hasilKategori: HasilKategori = {
    lulus: [],
    gagal: [],
  };

  // Loop melalui setiap siswa dalam input data
  for (const siswa of dataSiswa) {
    // Memeriksa jika nilai siswa di atas 75, maka masukkan ke kategori "lulus", jika tidak, masukkan ke kategori "gagal"
    if (siswa.score > 75) {
      hasilKategori.lulus.push(siswa);
    } else {
      hasilKategori.gagal.push(siswa);
    }
  }

  // Menggunakan fungsi filter untuk menyaring data siswa yang lulus dengan nilai minimal 75
  const siswaLulus = dataSiswa.filter((siswa) => siswa.score >= 75);

  console.log("Hasil Kategori:", hasilKategori);
  console.log("Siswa Lulus:", siswaLulus);

  return hasilKategori;
}

// Contoh penggunaan
const dataSiswa: Siswa[] = [
  { name: "Andre", score: 80, class: "KelasA3" },
  { name: "Robi", score: 60, class: "KelasA3" },
  { name: "Juan", score: 90, class: "KelasA3" },
  // Tambahkan siswa lainnya sesuai kebutuhan
];

kategorikanDanFilterSiswa(dataSiswa);
