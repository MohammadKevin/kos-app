"use client";

import React, { useState } from 'react';
import { Search, MapPin, Star, ShieldCheck, Zap, LayoutGrid, Menu, X } from 'lucide-react';

const DUMMY_KOST = [
  {
    id: 1,
    name: "Kost Mentari Kuningan",
    location: "Jakarta Selatan",
    price: "2.500.000",
    rating: 4.8,
    type: "Campur",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "D'Residence BSD",
    location: "Tangerang Selatan",
    price: "1.800.000",
    rating: 4.7,
    type: "Putra",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "Griya Asri Dago",
    location: "Bandung",
    price: "1.500.000",
    rating: 4.9,
    type: "Putri",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    name: "Urban Living Setiabudi",
    location: "Jakarta Selatan",
    price: "3.200.000",
    rating: 4.6,
    type: "Campur",
    image: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 5,
    name: "Kost Green View",
    location: "Sleman, Yogyakarta",
    price: "850.000",
    rating: 4.5,
    type: "Putri",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 6,
    name: "Sky High Apartment Kost",
    location: "Surabaya",
    price: "2.100.000",
    rating: 4.7,
    type: "Campur",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=400",
  },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#547A95] tracking-tight">KosFinder</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#091558] transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-[#091558] transition-colors">Kost</a>
            <a href="#" className="text-gray-600 hover:text-[#091558] transition-colors">Tentang</a>
            <div className="flex items-center space-x-4 ml-4">
              <button className="text-gray-700 font-medium px-4 py-2">Login</button>
              <button className="bg-[#547A95] text-white px-5 py-2 rounded-full font-medium hover:bg-[#73A5CA] transition-all shadow-md shadow-blue-200">
                Register
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4">
          <a href="#" className="block text-gray-600">Home</a>
          <a href="#" className="block text-gray-600">Kost</a>
          <a href="#" className="block text-gray-600">Tentang</a>
          <div className="flex flex-col space-y-3">
            <button className="text-gray-700 font-medium border border-gray-200 py-2 rounded-lg">Login</button>
            <button className="bg-[#8a8d9e] text-white py-2 rounded-lg font-medium hover:bg-[#0a1868] transition-all shadow-md shadow-blue-200">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const KostCard = ({ data }: { data: typeof DUMMY_KOST[0] }) => (
  <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={data.image} 
        alt={data.name} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
        {data.type}
      </div>
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-gray-900 text-lg leading-tight">{data.name}</h3>
        <div className="flex items-center text-yellow-500">
          <Star size={16} fill="currentColor" />
          <span className="text-gray-600 text-sm ml-1">{data.rating}</span>
        </div>
      </div>
      <div className="flex items-center text-gray-500 text-sm mb-4">
        <MapPin size={14} className="mr-1" />
        {data.location}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[#091558] font-bold text-lg">Rp {data.price}</span>
          <span className="text-gray-400 text-xs ml-1">/ bulan</span>
        </div>
        <button className="bg-gray-50 group-hover:bg-[#091558] group-hover:text-white text-gray-600 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
          Detail
        </button>
      </div>
    </div>
  </div>
);


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#606668] mb-6 tracking-tight">
              Temukan Kost Nyaman <br />
              <span className="text-[#BBD5DA]">dengan Mudah</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Ribuan pilihan kost terbaik di lokasi strategis. Booking aman, proses cepat, dan transparan tanpa biaya tambahan.
            </p>

            <div className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center gap-2 max-w-2xl mx-auto">
              <div className="flex items-center flex-1 px-4 w-full border-b md:border-b-0 md:border-r border-gray-100 py-3 md:py-0">
                <MapPin className="text-[#091558] mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Cari lokasi atau nama kost..."
                  className="w-full bg-transparent focus:outline-none text-gray-700"
                />
              </div>
              <div className="flex items-center px-4 w-full py-3 md:py-0">
                <LayoutGrid className="text-blue-500 mr-2" size={20} />
                <select className="w-full bg-transparent focus:outline-none text-gray-600 cursor-pointer">
                  <option>Semua Harga</option>
                  <option>Di bawah 1 Juta</option>
                  <option>1 - 3 Juta</option>
                  <option>Di atas 3 Juta</option>
                </select>
              </div>
              <button className="w-full md:w-auto bg-[#547A95] hover:bg-[#73A5CA] text-white px-8 py-3 rounded-xl md:rounded-full font-bold flex items-center justify-center transition-all">
                <Search size={18} className="mr-2" />
                Cari
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4">
          <div className="w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        </div>
      </section>

      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 text-[#547A95] rounded-2xl flex items-center justify-center mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Mudah Digunakan</h3>
              <p className="text-gray-500">Antarmuka intuitif memudahkan Anda menemukan kost idaman dalam hitungan detik.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <LayoutGrid size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Banyak Pilihan</h3>
              <p className="text-gray-500">Tersedia ribuan properti dari kost eksklusif hingga kost hemat di seluruh Indonesia.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Booking Cepat</h3>
              <p className="text-gray-500">Proses pemesanan langsung melalui aplikasi dengan sistem verifikasi yang aman.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Rekomendasi Terpopuler</h2>
              <p className="text-gray-500">Pilihan kost yang paling banyak dicari minggu ini.</p>
            </div>
            <button className="text-blue-600 font-semibold hover:underline hidden md:block">Lihat Semua</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DUMMY_KOST.map((kost) => (
              <KostCard key={kost.id} data={kost} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#547A95] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap Menemukan Kost Baru?</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                Daftar sekarang dan dapatkan potongan harga hingga Rp 200.000 untuk booking pertama Anda.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-[#547A95] border border-white px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                  Mulai Cari Kost
                </button>
                <button className="bg-[#0f86db] text-white border border-[#547A95] px-8 py-4 rounded-xl font-bold hover:bg-[#73A5CA] transition-colors">
                  Daftar Akun
                </button>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-bold text-blue-600">KosFinder</span>
              <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                Platform penyedia info kost terbesar di Indonesia dengan fokus pada kenyamanan dan keamanan transaksi.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-blue-600">Cari Kost</a></li>
                <li><a href="#" className="hover:text-blue-600">Promo Menarik</a></li>
                <li><a href="#" className="hover:text-blue-600">Pusat Bantuan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-blue-600">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-blue-600">Karir</a></li>
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <p className="text-gray-500 text-sm mb-2">Email: support@kosfinder.com</p>
              <p className="text-gray-500 text-sm">WhatsApp: +62 812-3456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2026 KosFinder. All rights reserved.</p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}