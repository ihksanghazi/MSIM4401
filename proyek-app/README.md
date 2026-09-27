# Penjelasan Kode

## [main.js](./src/main.js)

`main.js` adalah file utama yang menjalankan aplikasi Vue.

### Kode

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

### Penjelasan Singkat

- `createApp` → Membuat aplikasi Vue.
- `App.vue` → Komponen utama aplikasi.
- `router` → Mengatur navigasi antar halaman.
- `mount('#app')` → Menampilkan aplikasi pada `<div id="app">`.

**Kesimpulan:** File ini berfungsi untuk membuat dan menjalankan aplikasi Vue beserta sistem navigasinya.

## [Awal.vue](./src/components/Awal.vue)

Komponen ini menampilkan halaman **Awal**. Isi halamannya berupa teks sederhana sebagai halaman utama aplikasi.

```vue
<template>
  <p>Halaman <b>Awal</b></p>
</template>
```

---

## [Tentang.vue](./src/components/Tentang.vue)

Komponen ini menampilkan halaman **Tentang**. Halaman ini digunakan untuk menampilkan informasi tentang aplikasi.

```vue
<template>
  <p>Halaman <b>Tentang</b></p>
</template>
```

## [Department.vue](./src/components/Departemen.vue)

Komponen ini menampilkan nama **department** yang diambil dari parameter URL menggunakan `{{ $route.params.departemen }}`.

```vue
<template>
  <p>
    Anda Mengakses Halaman Department
    <b>{{ $route.params.departemen }}</b>
  </p>
</template>
```

## [index.js](./src/router/index.js)

File ini digunakan untuk mengatur **navigasi** antar halaman pada aplikasi Vue.

### Kode Utama

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import Awal from '@/components/Awal.vue'
import Tentang from '@/components/Tentang.vue'
```

Mengimpor Vue Router dan dua halaman: **Awal** dan **Tentang**.

### Daftar Route

```javascript
const routes = [
  { path: '/', component: Awal },
  { path: '/tentang', component: Tentang }
]
```

- `/` → Menampilkan halaman **Awal**.
- `/tentang` → Menampilkan halaman **Tentang**.

### Membuat Router

```javascript
const router = createRouter({
  history: createWebHistory(),
  routes
})
```

Membuat router dengan URL yang rapi (tanpa tanda `#`) dan menggunakan daftar route yang telah dibuat.

**Kesimpulan:** File `router/index.js` menentukan halaman apa yang ditampilkan berdasarkan URL yang dikunjungi.

## [App.vue](./src/App.vue)

Kode ini membuat menu navigasi menggunakan **nama route** yang telah didefinisikan di Vue Router.

### Kode

```vue
<template>
  <nav id="nav">
    <router-link :to="{ name: 'Awal' }">Awal</router-link> |
    <router-link :to="{ name: 'Tentang' }">Tentang</router-link>
  </nav>

  <router-view/>
</template>
```

### Penjelasan Singkat

- **`router-link`** digunakan untuk berpindah halaman.
- **`:to="{ name: 'Awal' }"`** menuju route yang bernama **Awal**.
- **`:to="{ name: 'Tentang' }"`** menuju route yang bernama **Tentang**.
- **`router-view`** menampilkan halaman yang sedang aktif.

> **Catatan:** Menggunakan `name` lebih fleksibel karena tidak bergantung pada alamat URL (`path`), sehingga jika path berubah, navigasi tetap berfungsi selama nama route tidak berubah.

