# [Binding untuk Class & Style](./index.html)

## Penjelasan Singkat

Program ini menunjukkan cara mengubah **class CSS** dan **style** secara dinamis menggunakan `v-bind`.

### 1. Data

```javascript
data() {
  return {
    title: "Daftar Pemrograman",
    isactive: true,
    activeColor: "blue",
    fontSize: 22
  }
}
```

Data digunakan untuk mengatur judul, warna teks, ukuran font, dan status class.

### 2. Binding Class

```html
<div :class="{ active: isactive }">
  <b>{{ title }}</b>
</div>
```

Jika `isactive` bernilai `true`, maka class `active` akan ditambahkan sehingga background menjadi **cyan**.

### 3. Binding Style

```html
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
```

Warna teks diambil dari `activeColor`, sedangkan ukuran huruf diambil dari `fontSize`.

### 4. Pengulangan Data

```html
<li v-for="prg in proglang">
  {{ prg }}
</li>
```

`v-for` menampilkan setiap bahasa pemrograman yang ada di dalam array `proglang`.

## Hasil

Judul memiliki background **cyan**, daftar berwarna **biru**, dan ukuran teks **22px**.