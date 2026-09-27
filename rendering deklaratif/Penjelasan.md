# Rendering Declaratif Vue 3

## Apa itu Rendering Declaratif?

Rendering deklaratif adalah cara Vue menampilkan data dari JavaScript ke HTML menggunakan sintaks `{{ }}` (Mustache).

## Contoh Kode

```html
<div id="app">
  Hallo {{ name }}, detik berjalan: {{ counter }}
</div>
```

- `{{ name }}` menampilkan nilai `name`
- `{{ counter }}` menampilkan nilai `counter`

## Data Vue

```javascript
data() {
  return {
    name: "Vue",
    counter: 0
  }
}
```

Data di dalam `data()` bersifat **reactive**, sehingga ketika nilainya berubah, tampilan akan ikut berubah otomatis.

## Lifecycle `mounted()`

```javascript
mounted() {
  setInterval(() => {
    this.counter++
  }, 1000)
}
```

`mounted()` dijalankan setelah komponen tampil di halaman. Pada contoh ini, `counter` bertambah setiap 1 detik.

## Hasil

Saat halaman dibuka:

```text
Hallo Vue, detik berjalan: 0
```

Setelah beberapa detik:

```text
Hallo Vue, detik berjalan: 5
```

Vue akan memperbarui angka secara otomatis tanpa mengubah HTML secara manual.