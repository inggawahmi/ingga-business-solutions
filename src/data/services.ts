export interface MainService {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  highlighted?: boolean;
}

export const MAIN_SERVICES: MainService[] = [
  {
    id: "website-bisnis",
    badge: "Company Profile & Layanan",
    title: "Website Bisnis",
    subtitle: "Untuk company profile, jasa profesional, bisnis lokal, dan personal brand.",
    description: "Tampilkan kredibilitas usaha Anda secara profesional. Lengkap dengan informasi layanan, portofolio, lokasi, dan formulir kontak yang langsung terhubung ke WhatsApp.",
    features: [
      "Tampilan profesional & terpercaya",
      "Mobile-friendly & loading cepat",
      "Informasi layanan, harga & lokasi",
      "Integrasi kontak langsung ke WhatsApp"
    ],
    ctaText: "Pelajari Website Bisnis",
    ctaHref: "#kontak"
  },
  {
    id: "website-cafe-umkm",
    badge: "Kuliner & Retail",
    title: "Website Cafe & UMKM",
    subtitle: "Untuk cafe, coffee shop, restoran, bakery, dan usaha makanan/minuman.",
    description: "Bantu pelanggan menemukan menu lengkap, harga transparan, jam operasional, lokasi Google Maps, dan tombol pemesanan WhatsApp tanpa potongan komisi aplikasi.",
    features: [
      "Menu & katalog digital interaktif",
      "Informasi lokasi Maps & jam operasional",
      "Galeri produk & highlight menu favorit",
      "Pesan atau reservasi langsung via WhatsApp"
    ],
    ctaText: "Lihat Solusi Cafe & UMKM",
    ctaHref: "/solusi/cafe-umkm",
    highlighted: true
  },
  {
    id: "sistem-bisnis-custom",
    badge: "Operasional & Enterprise",
    title: "Sistem Bisnis Custom",
    subtitle: "Untuk POS, inventory, operasional internal, insurance, dan reinsurance.",
    description: "Sistem aplikasi internal yang dirancang khusus mengikuti alur kerja (SOP) perusahaan Anda untuk merapikan pencatatan penjualan, stok gudang, atau transaksi keuangan.",
    features: [
      "Disesuaikan persis dengan workflow Anda",
      "Pengaturan role dan hak akses pengguna",
      "Dashboard monitoring & laporan otomatis",
      "Dukungan integrasi API & database privat"
    ],
    ctaText: "Lihat Solusi Sistem",
    ctaHref: "/solusi/inventory-pos"
  }
];
