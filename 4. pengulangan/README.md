# Pengulangan (Vue 3)

## Penjelasan Singkat

Program ini menampilkan daftar mata kuliah menggunakan **`v-for`**. Data yang ada di JavaScript akan diulang secara otomatis menjadi beberapa elemen HTML.

### `v-for`

```html
<li v-for="mk in daftarMK" v-bind:key="mk.text">
  {{ mk.text }}
</li>
```

`v-for` digunakan untuk mengulang setiap data di dalam array `daftarMK` dan membuat satu `<li>` untuk setiap mata kuliah.

### `data()`

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

Array `daftarMK` berisi tiga objek, masing-masing memiliki properti `text` yang akan ditampilkan.

## Hasil

1. Algoritma dan Pemrograman
2. Pemrograman Perangkat Bergerak
3. Sistem Terdistribusi