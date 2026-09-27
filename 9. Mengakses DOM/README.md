## Penjelasan Singkat

Program ini memeriksa apakah pengguna sudah mengisi **input teks** sebelum menekan tombol **Kirim**.

### 1. Input dengan `v-model`

```html
<input v-model="isianTeks" placeholder="Ketikkan sesuatu">
```

`v-model` menghubungkan isi input dengan variabel `isianTeks`.

### 2. Mengirim Event

```html
<button @click="cekIsianTeks($event)">Kirim</button>
```

`$event` mengirim objek event DOM ke fungsi `cekIsianTeks()` sehingga kita dapat mengakses informasi dari tombol yang diklik.

### 3. Fungsi Validasi

```javascript
cekIsianTeks(event) {
  if (this.isianTeks === "") {
    event.preventDefault()
    alert("Isikan teks terlebih dahulu")
  } else {
    alert("Terima kasih sudah mengisi teks")
  }
}
```

- Jika input kosong, muncul pesan **"Isikan teks terlebih dahulu"**.
- Jika input terisi, muncul pesan **"Terima kasih sudah mengisi teks"**.

**Kesimpulan:** `v-model` mengambil data dari input, sedangkan `$event` digunakan untuk mengakses objek event pada DOM.