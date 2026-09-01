# Ingga Web & Business Systems

Website resmi sales dan lead-generation untuk layanan pembuatan website cafe/UMKM, menu digital, sistem POS & inventory, custom ERP, serta sistem asuransi & reasuransi oleh **Ingga Wahmi Widjaya**.

---

## 🎯 Tujuan Project

Website ini terpisah dari portfolio apply kerja (`ingga-portfolio`) dan berfungsi khusus sebagai media promosi jasa, edukasi solusi bisnis, serta konversi calon klien melalui WhatsApp.

Target calon klien:
- Pemilik cafe dan coffee shop di Jabodetabek.
- UMKM makanan/minuman yang membutuhkan menu digital & katalog WhatsApp.
- Bisnis dengan pencatatan stok dan kasir manual.
- Perusahaan yang membutuhkan aplikasi internal kustom (ERP, inventory, approval workflow).
- Perusahaan asuransi, pialang asuransi, dan pialang reasuransi.

---

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Type Checking**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans (`next/font/google`)

---

## 📁 Struktur Route

| Route | Keterangan |
| :--- | :--- |
| `/` | Halaman sales utama yang mencakup seluruh katalog layanan, identifikasi masalah bisnis, rekam jejak, cara kerja, FAQ, dan form konsultasi |
| `/solusi/cafe-umkm` | Landing page khusus cafe, coffee shop, dan UMKM F&B dengan simulasi menu digital & WhatsApp order |
| `/solusi/inventory-pos` | Landing page khusus sistem POS kasir, manajemen stok mutasi, dan audit digital stock opname |
| `/solusi/insurance-erp` | Landing page khusus workflow placing reasuransi, ledger premi multi-mata uang, dan custom ERP |
| `/opengraph-image` | Gambar preview Open Graph otomatis |
| `/robots.txt` | File robots SEO |
| `/sitemap.xml` | Sitemap otomatis seluruh halaman publik |

---

## ⚙️ Cara Mengubah Data & Konfigurasi

### 1. Brand, WhatsApp, Email, & Lokasi
Seluruh data kontak dan brand terpusat di:
```ts
// src/config/business.ts
export const BUSINESS_CONFIG = {
  brand: "Ingga Web & Business Systems",
  owner: "Ingga Wahmi Widjaya",
  whatsapp: "6285215374285",
  email: "widjayaingga@gmail.com",
  location: "Bekasi, Jawa Barat",
  serviceArea: "Jabodetabek & Remote",
};
```

### 2. Layanan & Konten Solusi
- **Katalog Layanan**: `src/data/services.ts`
- **Halaman Solusi Spesifik**: `src/data/solutions.ts`
- **Rekam Jejak Case Studies**: `src/data/caseStudies.ts`
- **FAQ**: `src/data/faq.ts`
- **Pilihan Skala Project**: `src/data/engagement.ts`

---

## 🔒 Kebijakan Kredibilitas & Transparansi

1. **Demo Konsep Cafe**: Berlabel jelas `Demo Konsep • Bukan Proyek Klien`.
2. **Kerahasiaan Enterprise**: Data klien enterprise tetap dianonimkan untuk menghormati NDA, dengan fokus pada cakupan rekayasa teknis dan outcome bisnis nyata.
3. **Zero Fake Metrics**: Tidak menggunakan testimonial palsu, angka kenaikan omzet rekaan, atau logo perusahaan palsu.

---

## 🛠️ Menjalankan Project

### Instalasi Dependensi
```bash
npm install
```

### Menjalankan Server Development
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### Linting
```bash
npm run lint
```

### Production Build
```bash
npm run build
```

### Deployment ke Vercel
1. Hubungkan repository GitHub `ingga-business-solutions` ke akun Vercel Anda.
2. Atur Environment Variable pada dashboard Vercel:
   ```env
   NEXT_PUBLIC_SITE_URL=https://nama-domain-anda.vercel.app
   ```
3. Deploy!
