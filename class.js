class Karyawan {
  constructor(nama, jabatan, gaji) {
    this.nama = nama;
    this.jabatan = jabatan;
    this.gaji = gaji;
  }

  getInformation() {
    return `Nama karyawan adalah ${this.nama}, dengan jabatan ${this.jabatan} memiliki gaji ${this.gaji}`;
  }
}

const karyawan1 = new Karyawan("Budi", "Manager", 10000000);
console.log(karyawan1.getInformation());
