# Komponen Dasar (Vue 3)

## Penjelasan Singkat

Program ini memperkenalkan **komponen** di Vue. Komponen adalah bagian HTML yang dapat dibuat sendiri agar kode menjadi lebih rapi dan bisa digunakan berulang kali.

### 1. Data Mata Kuliah

```javascript
data() {
  return {
    daftarMK: [
      { text: "Algoritma dan Pemrograman" },
      { text: "Pemrograman Perangkat Bergerak" },
      { text: "Sistem Terdistribusi" }
    ]
  }
}
```

Data mata kuliah disimpan dalam array `daftarMK`.

### 2. Membuat Komponen

```javascript
app.component("daftar-mk", {
  props: ["mk"],
  template: "<li>{{ mk.text }}</li>"
})
```

Komponen **`daftar-mk`** dibuat untuk menampilkan satu mata kuliah. Data diterima melalui `props` dengan nama `mk`.

### 3. Menggunakan Komponen

```html
<daftar-mk
  v-for="mkDitawarkan in daftarMK"
  v-bind:mk="mkDitawarkan"
  v-bind:key="mkDitawarkan.id">
</daftar-mk>
```

`v-for` mengirim setiap data mata kuliah ke komponen `daftar-mk`, sehingga setiap item ditampilkan sebagai satu `<li>`.

## Hasil

- Algoritma dan Pemrograman
- Pemrograman Perangkat Bergerak
- Sistem Terdistribusi

**Kesimpulan:** Komponen membuat tampilan lebih modular, mudah dibaca, dan dapat digunakan kembali di berbagai bagian aplikasi.