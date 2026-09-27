## Penjelasan Singkat

Program ini menunjukkan cara menangani **event klik** menggunakan `@click`. Setiap kali tombol ditekan, nilai `klik` akan bertambah 1.

### 1. Data

```javascript
data() {
  return {
    klik: 0
  }
}
```

Variabel `klik` menyimpan jumlah klik dan dimulai dari **0**.

### 2. Menampilkan Data

```html
<p>Jumlah Klik : {{ klik }}</p>
```

`{{ klik }}` digunakan untuk menampilkan nilai `klik` di halaman.

### 3. Event `@click`

```html
<button @click="klik += 1">
  Klik untuk tambah 1
</button>
```

`@click` akan dijalankan saat tombol diklik, lalu `klik += 1` menambahkan nilai `klik` sebanyak **1**.

## Hasil

- Klik pertama → **1**
- Klik kedua → **2**
- Klik ketiga → **3**

Nilai akan terus bertambah setiap tombol ditekan.