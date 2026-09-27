# Struktur Kendali (Vue 3)

## Penjelasan Singkat

Program ini menunjukkan penggunaan **`v-if`** untuk menampilkan atau menyembunyikan elemen berdasarkan nilai boolean.

### `v-if`

```html
<p v-if="terlihat">Universitas Terbuka</p>
```

Teks hanya akan tampil jika nilai `terlihat` adalah `true`.

### `data()`

```javascript
data() {
  return {
    terlihat: true,
    aksi: "Sembunyikan"
  }
}
```

- `terlihat` mengatur apakah teks ditampilkan.
- `aksi` mengubah tulisan pada tombol.

### `methods`

```javascript
onOff() {
  this.terlihat = !this.terlihat
}
```

Saat tombol diklik, fungsi `onOff()` mengubah nilai `terlihat` sehingga teks bergantian **muncul** dan **menghilang**. Tulisan tombol juga berubah sesuai kondisi.