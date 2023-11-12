function Median(num: number[]): { median: number; total: number; modus?: number } {
  num.sort((a, b) => a - b);
  const medianLength = num.length;

  const middle = Math.floor(medianLength / 2);
  // Fungsi untuk mencari modus
  const cariModus = (arr: number[]): number | undefined => {
    const frekuensi: { [key: number]: number } = {};

    // Hitung frekuensi setiap angka dalam array
    arr.forEach((angka) => {
      frekuensi[angka] = (frekuensi[angka] || 0) + 1;
    });

    let modus: number | undefined;
    let maxFrekuensi = 0;

    // Temukan angka dengan frekuensi tertinggi (modus)
    for (const key in frekuensi) {
      if (frekuensi[key] > maxFrekuensi) {
        maxFrekuensi = frekuensi[key];
        modus = parseInt(key);
      }
    }

    // Jika tidak ada modus (semua angka muncul dengan frekuensi yang sama)
    if (maxFrekuensi === 1 || modus === undefined) {
      return undefined;
    }
    return modus;
  };

  const median = medianLength % 2 !== 0 ? num[middle] : (num[middle - 1] + num[middle]) / 2;

  const total = num.reduce((totalNum, totalAll) => totalNum + totalAll, 0);

  const modus = cariModus(num);

  return { median, total, modus };
}

const arrayOfNumber: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const hasil = Median(arrayOfNumber);
console.log(`Median : ${hasil.median} Total : ${hasil.total}, Modus : ${hasil.modus}`);
