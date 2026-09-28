# Penjelasan

## [ButtonOnOff.vue](./src/components/ButtonOnOff.vue)

Komponen `ButtonOnOff.vue` berfungsi untuk menampilkan dan menyembunyikan sebuah teks menggunakan tombol. Teks yang ditampilkan dikirim dari komponen induk (`App.vue`) melalui **props**.

### Kode

```vue
<template>
    <p v-if="compoShowHide">{{ strToHideShow }}</p>
    <button @click="onOff">{{ aksi }}</button>
</template>

<script>
export default {
    name: 'ButtonOnOff',

    data() {
        return {
            aksi: 'sembunyikan',
            terlihat: true
        }
    },

    props: {
        strToHideShow: String
    },

    computed: {
        compoShowHide() {
            if (this.terlihat === true){
                return true
            }else{
                return false
            }
        }
    },

    methods: {
        onOff() {
            if (this.aksi === 'sembunyikan'){
                this.aksi = 'tampilkan'
                this.terlihat = false
            }else{
                this.aksi = 'sembunyikan'
                this.terlihat = true
            }
        }
    }
}
</script>
```

---

## 1. Template

```vue
<p v-if="compoShowHide">{{ strToHideShow }}</p>
<button @click="onOff">{{ aksi }}</button>
```

### Penjelasan

- `v-if="compoShowHide"` digunakan untuk menampilkan paragraf hanya ketika nilainya **true**.
- `{{ strToHideShow }}` menampilkan data yang diterima dari **props**.
- `@click="onOff"` menjalankan method `onOff()` saat tombol diklik.
- `{{ aksi }}` menampilkan tulisan pada tombol secara dinamis.

**Hasil awal:**

```
Universitas Terbuka

[ sembunyikan ]
```

---

## 2. Data

```javascript
data() {
    return {
        aksi: 'sembunyikan',
        terlihat: true
    }
}
```

`data()` menyimpan data lokal milik komponen.

| Variabel | Nilai Awal | Fungsi |
|----------|------------|--------|
| aksi | sembunyikan | Tulisan tombol |
| terlihat | true | Status teks terlihat |

Karena `terlihat` bernilai `true`, maka teks langsung muncul saat aplikasi dijalankan.

---

## 3. Props

```javascript
props: {
    strToHideShow: String
}
```

Props digunakan untuk menerima data dari komponen induk.

Contoh pemanggilan:

```vue
<ButtonOnOff strToHideShow="Universitas Terbuka"/>
```

Nilai `"Universitas Terbuka"` akan disimpan pada variabel `strToHideShow`.

---

## 4. Computed Property

```javascript
computed: {
    compoShowHide() {
        if (this.terlihat === true){
            return true
        }else{
            return false
        }
    }
}
```

Computed menghasilkan nilai berdasarkan variabel `terlihat`.

Logika sederhananya:

```
terlihat = true
        │
        ▼
compoShowHide = true
        │
        ▼
v-if menampilkan teks
```

Kode tersebut sebenarnya dapat dipersingkat menjadi:

```javascript
computed:{
    compoShowHide(){
        return this.terlihat
    }
}
```

Karena `terlihat` sudah bertipe Boolean.

---

## 5. Methods

```javascript
methods: {
    onOff() {
        if (this.aksi === 'sembunyikan'){
            this.aksi = 'tampilkan'
            this.terlihat = false
        }else{
            this.aksi = 'sembunyikan'
            this.terlihat = true
        }
    }
}
```

Method `onOff()` dijalankan ketika tombol ditekan.

### Saat tombol "sembunyikan"

```javascript
this.aksi = 'tampilkan'
this.terlihat = false
```

Hasil:

```
(teks hilang)

[ tampilkan ]
```

### Saat tombol "tampilkan"

```javascript
this.aksi = 'sembunyikan'
this.terlihat = true
```

Hasil:

```
Universitas Terbuka

[ sembunyikan ]
```

---

## Alur Program

```
Klik Tombol
      │
      ▼
Method onOff()
      │
      ▼
aksi berubah
terlihat berubah
      │
      ▼
Computed diperbarui
      │
      ▼
Tampilan otomatis berubah
```

Vue akan memperbarui tampilan secara otomatis karena menggunakan sistem **reactivity**.

---

# [App.vue](./src/App.vue)

`App.vue` merupakan komponen utama yang menggunakan komponen `ButtonOnOff` sebanyak dua kali.

### Kode

```vue
<template>
  <ButtonOnOff strToHideShow="Universitas Terbuka"/>
  <ButtonOnOff strToHideShow="Indonesia"/>
</template>

<script>
import ButtonOnOff from './components/ButtonOnOff.vue';

export default {
  name: 'App',
  components:{
    ButtonOnOff
  }
}
</script>
```

---

## 1. Import Komponen

```javascript
import ButtonOnOff from './components/ButtonOnOff.vue';
```

Kode ini mengimpor komponen `ButtonOnOff` agar dapat digunakan di dalam `App.vue`.

Struktur folder:

```text
src/
│
├── App.vue
│
└── components/
    └── ButtonOnOff.vue
```

---

## 2. Registrasi Komponen

```javascript
components:{
    ButtonOnOff
}
```

Registrasi dilakukan agar Vue mengenali tag:

```vue
<ButtonOnOff />
```

Tanpa registrasi, komponen tidak dapat digunakan.

---

## 3. Mengirim Data dengan Props

```vue
<ButtonOnOff strToHideShow="Universitas Terbuka"/>
<ButtonOnOff strToHideShow="Indonesia"/>
```

Setiap komponen menerima nilai props yang berbeda.

| Komponen | Props |
|----------|-------|
| Pertama | Universitas Terbuka |
| Kedua | Indonesia |

Walaupun menggunakan komponen yang sama, masing-masing memiliki **state** sendiri (`aksi` dan `terlihat`), sehingga tombol pertama tidak memengaruhi tombol kedua.

### Tampilan Awal

```text
Universitas Terbuka
[ sembunyikan ]

Indonesia
[ sembunyikan ]
```

Jika tombol pertama ditekan:

```text
[ tampilkan ]

Indonesia
[ sembunyikan ]
```

Hanya komponen pertama yang berubah.

---

# Kesimpulan

Program ini menerapkan beberapa konsep dasar Vue 3:

| Konsep | Fungsi |
|---------|--------|
| Props | Mengirim data dari parent ke child |
| data() | Menyimpan state lokal komponen |
| computed | Menghasilkan nilai turunan dari data |
| methods | Menangani aksi atau event |
| v-if | Menampilkan atau menyembunyikan elemen |
| @click | Menangani event klik |
| Component | Membuat kode yang dapat digunakan berulang |

Dengan menggunakan komponen, satu file `ButtonOnOff.vue` dapat dipakai berkali-kali dengan data yang berbeda tanpa perlu menulis ulang logika program.