"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Star, ShieldCheck, Zap, LayoutGrid, Menu, X, ArrowRight } from 'lucide-react';

const DUMMY_KOST = [
  { id: 1, name: "Kost Mentari Kuningan", location: "Jakarta Selatan", price: "2.500.000", rating: 4.8, type: "Campur", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "D'Residence BSD", location: "Tangerang Selatan", price: "1.800.000", rating: 4.7, type: "Putra", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Griya Asri Dago", location: "Bandung", price: "1.500.000", rating: 4.9, type: "Putri", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Urban Living Setiabudi", location: "Jakarta Selatan", price: "3.200.000", rating: 4.6, type: "Campur", image: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "Kost Green View", location: "Sleman, Yogyakarta", price: "850.000", rating: 4.5, type: "Putri", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=400" },
  { id: 6, name: "Sky High Apartment Kost", location: "Surabaya", price: "2.100.000", rating: 4.7, type: "Campur", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=400" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <span className="text-2xl font-black text-[#4A5568] tracking-tighter">KOS<span className="text-[#94A3B8]">FINDER</span></span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'Kost', 'Tentang'].map((item) => (
              <a key={item} href="#" className="text-sm font-semibold text-gray-500 hover:text-black transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
              </a>
            ))}
            <div className="flex items-center space-x-3 ml-6">
              <button className="text-gray-900 font-bold text-sm px-5">Login</button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-gray-200"
              >
                Register
              </motion.button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const KostCard = ({ data, index }: { data: typeof DUMMY_KOST[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500"
  >
    <div className="relative h-64 overflow-hidden">
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
        src={data.image}
        alt={data.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-800 shadow-sm">
        {data.type}
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">{data.name}</h3>
        <div className="flex items-center bg-gray-50 px-2 py-1 rounded-lg">
          <Star size={14} className="text-yellow-400 fill-yellow-400" />
          <span className="text-gray-900 font-bold text-xs ml-1">{data.rating}</span>
        </div>
      </div>
      <div className="flex items-center text-gray-400 text-sm mb-6">
        <MapPin size={14} className="mr-1.5" />
        {data.location}
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-50">
        <div>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-tight">Mulai dari</p>
          <span className="text-gray-900 font-black text-xl">Rp {data.price}</span>
        </div>
        <motion.button
          whileHover={{ x: 5 }}
          className="bg-gray-900 text-white p-3 rounded-2xl"
        >
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase border border-gray-100 rounded-full">
                #1 Kost Marketplace in Indonesia
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-[1.1]">
                Cari Kost Gak Pake <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400">Ribet & Drama.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-3 rounded-[32px] shadow-2xl shadow-gray-200 border border-gray-100 flex flex-col md:flex-row items-center gap-2 max-w-3xl mx-auto mb-16"
            >
              <div className="flex items-center flex-1 px-6 w-full">
                <Search className="text-gray-400 mr-3" size={20} />
                <input
                  type="text"
                  placeholder="Cari area, kampus, atau nama kost..."
                  className="w-full bg-transparent focus:outline-none text-gray-700 py-4 font-medium"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto bg-black text-white px-10 py-4 rounded-[24px] font-bold flex items-center justify-center transition-all"
              >
                Cari Sekarang
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-50 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-70"></div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: "Instan Konfirmasi", desc: "Tak perlu tunggu lama, booking langsung disetujui owner.", color: "bg-orange-50 text-orange-500" },
              { icon: <ShieldCheck />, title: "Keamanan Terjamin", desc: "Sistem pembayaran escrow yang melindungi dana Anda.", color: "bg-blue-50 text-blue-500" },
              { icon: <LayoutGrid />, title: "Filter Lengkap", desc: "Cari berdasarkan fasilitas, harga, hingga tipe kamar.", color: "bg-purple-50 text-purple-500" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-[32px] border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-8`}>
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Curated Collection</span>
              <h2 className="text-4xl font-black text-gray-900 mt-2">Rekomendasi Terpopuler</h2>
            </div>
            <button className="group flex items-center font-bold text-sm text-gray-900">
              Lihat Semua Properti
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {DUMMY_KOST.map((kost, index) => (
              <KostCard key={kost.id} data={kost} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-gradient-to-br from-gray-500 to-gray-800 rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ingin mencari kost?</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
              Bergabunglah dengan jutaan pengguna yang telah menemukan kost impian mereka dengan mudah dan cepat melalui platform kami yang terpercaya.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-gray-100 transition-all">
                Daftar Sekarang
              </button>
            </div>
          </div>

          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </motion.div>
      </section>

      <footer className="bg-white border-t border-gray-50 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-xs">
              <span className="text-xl font-black tracking-tighter">KOS<span className="text-gray-400">FINDER</span></span>
              <p className="mt-6 text-gray-400 text-sm font-medium leading-relaxed">
                Menyediakan hunian nyaman untuk masa depan yang lebih cerah. Fokus pada transparansi dan kenyamanan.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div>
                <h4 className="font-black text-[11px] uppercase tracking-widest text-gray-900 mb-6">Discovery</h4>
                <ul className="space-y-4 text-gray-400 text-sm font-bold">
                  <li><a href="#" className="hover:text-black transition-colors">Cari Kost</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Area Populer</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Kost Eksklusif</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-[11px] uppercase tracking-widest text-gray-900 mb-6">Support</h4>
                <ul className="space-y-4 text-gray-400 text-sm font-bold">
                  <li><a href="#" className="hover:text-black transition-colors">Bantuan</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Syarat & Ketentuan</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Kebijakan Privasi</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">© 2026 KosFinder International. Crafted with Care.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}