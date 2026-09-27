## Penjelasan Singkat

Program ini menggunakan **event modifier** `.once`, sehingga tombol hanya dapat menjalankan fungsi **satu kali**.

### Kode

```html
<button @click.once="tampilPesan">
  Klik Sekali saja
</button>
```

Saat tombol diklik pertama kali, fungsi `tampilPesan()` dijalankan dan menampilkan alert. Klik berikutnya tidak akan memberikan efek.

```javascript
methods: {
  tampilPesan() {
    alert("Hanya boleh sekali klik")
  }
}
```

## Jenis-Jenis Event Modifier

| Modifier | Fungsi |
|----------|--------|
| `.stop` | Menghentikan penyebaran event ke elemen induk. |
| `.prevent` | Mencegah aksi bawaan browser, seperti submit form. |
| `.capture` | Menjalankan event dari elemen induk terlebih dahulu. |
| `.self` | Event hanya berjalan jika elemen itu sendiri yang diklik. |
| `.once` | Event hanya dijalankan satu kali. |
| `.passive` | Memberi tahu browser bahwa event tidak memanggil `preventDefault()`, cocok untuk scroll. |

### Contoh Singkat

```html
<button @click.stop="aksi">Stop</button>
<form @submit.prevent="simpan"></form>
<div @click.self="tutupModal"></div>
<button @click.once="pesan"></button>
```

**Kesimpulan:** Event modifier membuat penanganan event lebih mudah tanpa harus menulis kode JavaScript tambahan seperti `event.stopPropagation()` atau `event.preventDefault()`.