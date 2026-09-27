## Penjelasan Singkat

Program ini membuat **kalkulator perkalian sederhana**. Pengguna memasukkan dua angka, kemudian Vue menghitung hasilnya menggunakan sebuah fungsi.

### 1. Input dengan `v-model`

```html
<input v-model="angka1" @change="hitung(angka1, angka2)">
<input v-model="angka2" @change="hitung(angka1, angka2)">
```

- `v-model` menghubungkan nilai input dengan variabel `angka1` dan `angka2`.
- `@change` memanggil fungsi `hitung()` saat nilai input berubah.

### 2. Data

```javascript
data() {
  return {
    angka1: 0,
    angka2: 0,
    hasil: 0
  }
}
```

Tiga variabel digunakan untuk menyimpan angka pertama, angka kedua, dan hasil perkalian.

### 3. Fungsi `hitung()`

```javascript
methods: {
  hitung(a, b) {
    this.hasil = a * b
  }
}
```

Fungsi menerima dua nilai, lalu mengalikan keduanya dan menyimpan hasilnya ke variabel `hasil`.

## Hasil

Jika pengguna memasukkan:

- Angka 1 = **5**
- Angka 2 = **4**

Maka akan tampil:

```text
5 X 4 = 20
```

**Kesimpulan:** `v-model` digunakan untuk mengambil input pengguna, sedangkan `methods` digunakan untuk menjalankan fungsi saat event terjadi.