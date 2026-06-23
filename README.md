# 🍔 Burger Point of Sale (POS) API

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

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
