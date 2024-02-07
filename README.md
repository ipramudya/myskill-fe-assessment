# Assessment MySkill.id Front-End

## Run Application

Aplikasi dapat dijalankan melalui dua buah metode, yaitu melalui:

-   Node.js Server
-   Docker Container

### Node.js Server

1. Pastikan node.js telah terinstall pada komputer anda
2. Jalankan perintah `npm install` untuk menginstall depedencies
3. Build aplikasi dengan perintah `npm run build`
4. Ketika proses build telah selesai, jalankan perintah `npm start`
5. Aplikasi akan berjalan pada port `:3000`, silahkan buka browser dan kunjungi alamat `http://localhost:3000`

### Docker Container

Apabila anda tidak memiliki environtment node.js pada komputer anda, terdapat cara alternatif dalam menjalankan aplikasi melalui `Docker`

1. Pastikan docker telah terinstall pada komputer anda, anda dapat mengecek melalui perintah `docker version`. Apabila telah terinstall, akan muncul informasi terkait docker engine dan server.
2. Build docker image dengan menjalankan perintah `docker build . -t myskill-assessment`.
3. Ketika proses build image telah selesai, jalankan container dengan perintah `docker run -d -p 3000:3000 myskill-assessment`
4. Anda dapat mengecek container yang telah berjalan melalui perintah `docker ps`
5. Ketika docker container telah dijalankan, aplikasi dapat dikunjungi melalui web browser pada alamat `http://localhost:3000`

## Schema

Bentuk skema data yang digunakan untuk menyimpan data pada halaman portfolio berupa:

-   name (tipe data string), merepresentasikan nama pengguna
-   possition (tipe data string), merepresentasikan posisi atau jabatan pengguna
-   description (tipe data string), merepresentasikan deskripsi profil pengguna
-   portfolio (tipe data array of objects), merepresentasikan kelompok portfolio pengguna
    -   id (tipe data string), unique identifier data portofolio pengguna
    -   name (tipe data string), nama portofolio
    -   possition (tipe data string), jabatan pengguna sebelumnya pada portofolio
    -   company (tipe data string), perusahaan tempat pengguna bekerja sebelumnya
    -   startDate (tipe data string), tanggal mulai bekerja
    -   endDate (tipe data string), tanggal berakhir bekerja
    -   description (tipe data string), deskripsi pekerjaan sebelumnya

Seluruh informasi tersebut serta `constraint` terkait dapat dikunjungi pada [halaman ini](https://github.com/ipramudya/myskill-fe-assessment/blob/main/src/utils/form-schema.ts)

Mekanisme penyimpanan data dilakukan dengan cara mengubah `object` data menjadi `string` dengan memanfaatkan API javascript `JSON.stringify` sebelum disimpan ke dalam browser `localStorage`. Ketika ingin mengakses data telah berada pada `localStorage`, dapat memanfaatkan API `JSON.parse`. `localStorage` dipilih karena data tidak dapat expired serta fungsionalitas aplikasi tetap dapat digunakan secara offline.

Proses `stringify-parse` dipilih karena skema data yang disusun terbilang kompleks, sebagai contoh transformasi `blob` File image menuju `base64 string` yang disimpan berbentuk objek. Implementasi ini dapat dikunjungi pada [bagian ini](https://github.com/ipramudya/myskill-fe-assessment/blob/main/src/hooks/use-store-portfolio.ts).

### Library yang Digunakan

-   Style system - menggunakan [tailwindcss](https://tailwindcss.com/), diimplementasikan untuk membangun abstraksi reusable & type-safe [component](https://github.com/ipramudya/myskill-fe-assessment/blob/main/src/components/Button.tsx) dengan lebih cepat.
-   Manajemen data input pada form dengan memanfaatkan `react context API` menggunakan library [react-hook-form](https://react-hook-form.com/).
-   Schema & data validation menggunakan pada input pengguna menggunakan [zod](https://zod.dev/).
-   State management menggunakan [jotai](https://jotai.org/), untuk menghindari passing prop yang terlalu dalam pada component, jotai dimanfaatkan sebagai atomic state yang dapat dibagikan ke berbagai komponen (shareable) melalui pemanggilan hooks yang sederhana.

## Tweaking Design

Sedikit perubahan yang saya lakukan terhadap referensi design diantaranya:

Memberikan `max-width` sebesar `768px` (untuk screen-size `768px`) dan `576px` (untuk screen-size dibawah `768px`) pada elemen kontainer sebagai induk pembungkus. Hal ini dilakukan dengan tujuan agar mempermudah pengguna dalam membaca komten agar tidak terlalu lebar secara horizontal. Hal tersebut juga membuat gambar cover di-render tidak terlalu besar, sehingga gambar terlihat tidak pecah serta menghemat file-size"

Memindahkan tombol `Tambah portfolio` dan `Simpan perubahan` yang semula pada bagian atas form, kini pada bagaian bawah form (halaman edit portfolio). Hal tersebut dilakukan agar memudahkan akses pengguna ketika ingin menambahkan portfolio baru, sehingga alih-alih melakukan scroll menuju bagian awal halaman, pengguna dapat langsung menambahkan portfolio baru seusai mengisi informasi portfolio sebelumnya. Demikian juga pada saat menyimpan perubahan.

Menambahkan fitur minimize/maximize portfolio form. Ketika pengguna telah menambahkan banyak sekali portfolio, halaman akan menjadi sangat panjang. Hal tersebut menurut saya kurang membuat penggunaan aplikasi menjadi tidak nyaman. Ketika pengguna telah mengisi informasi portfolio baru, pengguna dapat menutup form tersebut tanpa perlu kehilangan data yang telah ditambahkan -- tanpa melakukan form submission dengan memanfaatkan API `useFieldArray` react-hook-form -- sehingga diharapkan dapat mempermudah pengguna dalam mengakses aplikasi.
