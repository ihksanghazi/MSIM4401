## Penjelasan Singkat

Program ini menjalankan **dua fungsi sekaligus** saat tombol diklik: menambah jumlah klik dan menghitung nilai faktorial.

### 1. Data

```javascript
data() {
  return {
    klik: 0,
    faktorial: 1
  }
}
```

- `klik` menyimpan jumlah klik.
- `faktorial` menyimpan hasil faktorial dari nilai `klik`.

### 2. Event Handler

```html
<button @click="tambahklik(), factorial(klik)">
  Klik untuk menambah 1
</button>
```

Saat tombol diklik, Vue menjalankan dua fungsi secara berurutan:

1. `tambahklik()` → Menambah nilai `klik`.
2. `factorial(klik)` → Menghitung faktorial dari `klik`.

### 3. Fungsi

```javascript
tambahklik() {
  this.klik += 1
}
```

Menambah jumlah klik sebanyak 1.

```javascript
factorial(number) {
  // menghitung faktorial
}
```

Menghitung faktorial menggunakan perulangan, lalu menyimpan hasilnya ke `faktorial`.

## Hasil

| Klik | Faktorial |
|---:|---:|
| 1 | 1 |
| 2 | 2 |
| 3 | 6 |
| 4 | 24 |

**Kesimpulan:** Satu event `@click` dapat menjalankan lebih dari satu fungsi sekaligus.