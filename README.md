# 🍔 Burger Point of Sale (POS) API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

Sistem *Point of Sale* (POS) berbasis RESTful API yang dirancang khusus untuk manajemen operasional dan transaksi penjualan pada bisnis restoran atau kedai Burger. Sistem ini memastikan proses pemesanan yang cepat, aman, dan pencatatan kas yang akurat.

## ✨ Fitur Utama

*   **Autentikasi Kasir & Admin:** Keamanan akses menggunakan **JWT** untuk membedakan hak akses antara Admin (manajemen menu) dan Kasir (operasional transaksi).
*   **Manajemen Menu (`Produk`):** Pengelolaan detail item menu (Burger, *Side Dish*, Minuman, *Add-ons*), pengaturan harga, dan ketersediaan stok bahan.
*   **Sistem Pemesanan Cepat (`Transaksi`):** Endpoint khusus untuk memproses pesanan pelanggan, menghitung total harga secara otomatis (termasuk pajak/diskon), dan mencetak struk digital.
*   **Laporan Penjualan harian:** Pencatatan setiap transaksi yang terstruktur untuk memudahkan analisis *cash flow* dan perhitungan *Break Even Point* (BEP) bisnis.

## 🛠️ Tech Stack

*   **Runtime Environment:** Node.js
*   **Framework:** Express.js
*   **Security:** JSON Web Token (JWT) & Bcrypt
*   **Arsitektur:** RESTful API (MVC Pattern)

## 🚀 Cara Menjalankan Secara Lokal (Local Setup)

Ikuti langkah-langkah berikut untuk menjalankan server POS ini di komputer Anda:

1. **Clone repository ini:**
```bash
   git clone [https://github.com/username-anda/burger-pos-system.git](https://github.com/username-anda/burger-pos-system.git)
