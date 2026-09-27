# Interaksi dengan Pemakai (Vue 3)

## Penjelasan Singkat

Program ini menunjukkan bagaimana Vue merespons aksi pengguna. Ketika tombol **Balik String** diklik, teks **"Universitas Terbuka"** akan dibalik menjadi **"akubreT satisrevinU"**.

### `data()`

```javascript
data() {
  return {
    pesan: "Universitas Terbuka"
  }
}
```

Menyimpan data `pesan` yang akan ditampilkan di halaman.

### `v-on:click`

```html
<button v-on:click="reverseStr">Balik String</button>
```

`v-on:click` digunakan untuk menjalankan fungsi `reverseStr()` saat tombol diklik.

### `methods`

```javascript
methods: {
  reverseStr() {
    this.pesan = this.pesan.split("").reverse().join("")
  }
}
```

Fungsi ini membalik urutan karakter pada string, lalu memperbarui nilai `pesan`. Karena data Vue bersifat **reactive**, teks di halaman berubah secara otomatis tanpa mengubah HTML.