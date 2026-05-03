"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard, Search, Heart, ReceiptText, User, LogOut,
    Bell, MapPin, Star, Filter, ArrowRight, X, Menu, Settings,
    CheckCircle2, Clock, Trash2, SlidersHorizontal
} from 'lucide-react';

const DUMMY_USER = {
    name: "Mohammad Kevin",
    email: "kevin@dev.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin",
    stats: {
        saved: 12,
        rented: 2,
        notifications: 4
    }
};

const DUMMY_KOST = [
    { id: 1, name: "The Prime Kuningan", location: "Jakarta Selatan", price: "4.500.000", rating: 4.9, type: "Campur", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Sanctuary BSD", location: "Tangerang", price: "3.800.000", rating: 4.8, type: "Putra", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Dago Heritage", location: "Bandung", price: "3.500.000", rating: 4.9, type: "Putri", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "Urban Suite", location: "Jakarta Selatan", price: "3.200.000", rating: 4.6, type: "Campur", image: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&q=80&w=800" },
];

const DUMMY_HISTORY = [
    { id: 1, name: "Griya Asri Dago", date: "12 May 2026", status: "Aktif", price: "1.500.000" },
    { id: 2, name: "Sky High Residence", date: "10 Jan 2025", status: "Selesai", price: "2.100.000" },
];

const SidebarItem = ({ icon: Icon, label, active, onClick }: any) => (
    <motion.button
        whileHover={{ x: 5 }}
        onClick={onClick}
        className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all ${active ? 'bg-gray-900 text-white shadow-xl shadow-gray-200' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
            }`}
    >
        <Icon size={20} />
        <span className="text-sm font-bold tracking-tight">{label}</span>
    </motion.button>
);

const KostCard = ({ data, onFavoriteRemove, isFavoriteView }: any) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -8 }}
        className="bg-white rounded-[32px] border border-gray-100 p-3 shadow-sm hover:shadow-xl hover:shadow-gray-100 transition-all group"
    >
        <div className="relative aspect-square overflow-hidden rounded-[24px]">
            <img src={data.image} alt={data.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-800">
                {data.type}
            </div>
            <button
                onClick={() => isFavoriteView && onFavoriteRemove(data.id)}
                className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-colors ${isFavoriteView ? 'bg-red-50 text-red-500' : 'bg-white/80 text-gray-400 hover:text-red-500'}`}
            >
                {isFavoriteView ? <Trash2 size={16} /> : <Heart size={16} />}
            </button>
        </div>
        <div className="p-4">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800 text-lg tracking-tight line-clamp-1">{data.name}</h3>
                <div className="flex items-center text-yellow-500 bg-yellow-50 px-2 py-1 rounded-lg">
                    <Star size={12} fill="currentColor" />
                    <span className="text-[10px] font-black ml-1">{data.rating}</span>
                </div>
            </div>
            <div className="flex items-center text-gray-400 text-xs mb-4">
                <MapPin size={12} className="mr-1.5" /> {data.location}
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Mulai dari</p>
                    <p className="text-gray-900 font-black text-base">Rp {data.price}</p>
                </div>
                <button className="bg-gray-50 text-gray-400 hover:bg-gray-900 hover:text-white p-3 rounded-2xl transition-all">
                    <ArrowRight size={18} />
                </button>
            </div>
        </div>
    </motion.div>
);

export default function CustomerDashboard() {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useState(DUMMY_KOST);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1200);
    }, []);

    const removeFavorite = (id: number) => {
        setFavorites(favorites.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 flex">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-100 transition-all duration-500 transform lg:translate-x-0 ${isSidebarOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full lg:w-20'}`}>
                <div className="h-full flex flex-col p-6">
                    <div className="flex items-center px-4 mb-12">
                        <div className="w-10 h-10 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-black text-xl">K</div>
                        {(isSidebarOpen || !isSidebarOpen) && <span className={`ml-3 font-bold tracking-tighter text-xl transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>KOSFIND</span>}
                    </div>

                    <nav className="flex-1 space-y-2">
                        <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
                        <SidebarItem icon={Search} label="Cari Kost" active={activeTab === 'Cari Kost'} onClick={() => setActiveTab('Cari Kost')} />
                        <SidebarItem icon={Heart} label="Favorit" active={activeTab === 'Favorit'} onClick={() => setActiveTab('Favorit')} />
                        <SidebarItem icon={ReceiptText} label="Riwayat Sewa" active={activeTab === 'Riwayat'} onClick={() => setActiveTab('Riwayat')} />
                        <SidebarItem icon={User} label="Profil" active={activeTab === 'Profil'} onClick={() => setActiveTab('Profil')} />
                    </nav>

                    <div className="pt-6 border-t border-gray-50">
                        <SidebarItem icon={LogOut} label="Logout" />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 transition-all duration-500 ${isSidebarOpen ? 'lg:ml-72' : 'lg:ml-20'}`}>
                {/* Topbar */}
                <header className="sticky top-0 z-40 bg-[#FAFAFA]/80 backdrop-blur-xl border-b border-gray-100 px-6 lg:px-12 py-5">
                    <div className="flex justify-between items-center max-w-7xl mx-auto">
                        <div className="flex items-center flex-1">
                            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 lg:hidden mr-4">
                                <Menu size={24} />
                            </button>
                            <div className="relative max-w-md w-full hidden md:block">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                <input type="text" placeholder="Cari lokasi, nama kost..." className="w-full bg-white border border-gray-100 py-3 pl-12 pr-6 rounded-2xl text-sm outline-none focus:ring-4 ring-gray-100/50 transition-all" />
                            </div>
                        </div>

                        <div className="flex items-center space-x-5">
                            <div className="relative p-3 bg-white border border-gray-100 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors">
                                <Bell size={20} className="text-gray-400" />
                                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                            </div>
                            <div className="flex items-center space-x-3 pl-4 border-l border-gray-100">
                                <div className="text-right hidden sm:block">
                                    <p className="text-xs font-black text-gray-800">{DUMMY_USER.name}</p>
                                    <p className="text-[10px] font-bold text-gray-400">Premium Member</p>
                                </div>
                                <img src={DUMMY_USER.avatar} alt="Avatar" className="w-10 h-10 rounded-2xl bg-gray-100 p-1 border border-gray-100" />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="px-6 lg:px-12 py-10 max-w-7xl mx-auto">
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map(i => <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-[32px]"></div>)}
                        </div>
                    ) : (
                        <AnimatePresence mode="wait">
                            {activeTab === 'Dashboard' && (
                                <motion.div key="dashboard" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                                    <div className="mb-12">
                                        <h1 className="text-4xl font-light tracking-tight text-gray-800">Halo, <span className="font-black italic font-serif text-gray-300">{DUMMY_USER.name.split(' ')[0]} 👋</span></h1>
                                        <p className="text-gray-400 text-sm mt-2 font-medium">Sudah siap mencari hunian baru hari ini?</p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                                        {[
                                            { label: "Kost Disimpan", val: DUMMY_USER.stats.saved, icon: Heart, color: "text-red-500", bg: "bg-red-50" },
                                            { label: "Riwayat Sewa", val: DUMMY_USER.stats.rented, icon: ReceiptText, color: "text-blue-500", bg: "bg-blue-50" },
                                            { label: "Notifikasi Baru", val: DUMMY_USER.stats.notifications, icon: Bell, color: "text-orange-500", bg: "bg-orange-50" }
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-gray-100 transition-all">
                                                <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6`}>
                                                    <stat.icon size={24} />
                                                </div>
                                                <p className="text-3xl font-black text-gray-800 mb-1">{stat.val}</p>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-between items-end mb-8">
                                        <div>
                                            <h2 className="text-2xl font-black tracking-tight">Rekomendasi Terdekat</h2>
                                            <p className="text-gray-400 text-sm font-medium">Berdasarkan pencarian terakhirmu</p>
                                        </div>
                                        <button onClick={() => setActiveTab('Cari Kost')} className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-800 transition-colors">Lihat Semua</button>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {DUMMY_KOST.map(kost => <KostCard key={kost.id} data={kost} />)}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'Cari Kost' && (
                                <motion.div key="explore" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                                    <div className="bg-white p-8 rounded-[40px] border border-gray-100 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                                        <div className="flex-1 w-full relative">
                                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                                            <input type="text" placeholder="Masukkan nama daerah..." className="w-full bg-gray-50 border-none py-4 pl-14 pr-6 rounded-3xl outline-none text-sm font-medium" />
                                        </div>
                                        <div className="flex gap-4 w-full md:w-auto">
                                            <div className="relative flex-1 md:w-40">
                                                <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                                <select className="w-full bg-gray-50 border-none py-4 pl-12 pr-4 rounded-3xl outline-none text-xs font-bold appearance-none cursor-pointer">
                                                    <option>Tipe Kost</option>
                                                    <option>Putra</option>
                                                    <option>Putri</option>
                                                    <option>Campur</option>
                                                </select>
                                            </div>
                                            <button className="bg-gray-900 text-white px-10 py-4 rounded-3xl font-bold text-sm hover:bg-gray-800 transition-all">Search</button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {[...DUMMY_KOST, ...DUMMY_KOST].map((kost, i) => <KostCard key={i} data={kost} />)}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'Favorit' && (
                                <motion.div key="favorites" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <div className="mb-10 text-center py-10 border-b border-gray-50">
                                        <h2 className="text-4xl font-black text-gray-800">Saved Sanctuary</h2>
                                        <p className="text-gray-400 mt-2 font-medium">Tempat-tempat yang menarik perhatianmu</p>
                                    </div>
                                    {favorites.length > 0 ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                            {favorites.map(kost => <KostCard key={kost.id} data={kost} isFavoriteView onFavoriteRemove={removeFavorite} />)}
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center py-32 text-center">
                                            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 mb-6">
                                                <Heart size={40} />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">Belum ada favorit</h3>
                                            <p className="text-gray-400 text-sm mt-2 max-w-xs">Simpan kost yang kamu suka untuk dilihat kembali nanti.</p>
                                            <button onClick={() => setActiveTab('Cari Kost')} className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest">Mulai Cari</button>
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {activeTab === 'Riwayat' && (
                                <motion.div key="history" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <div className="mb-10">
                                        <h2 className="text-3xl font-black text-gray-800">Riwayat Sewa</h2>
                                        <p className="text-gray-400 mt-2 font-medium">Daftar hunian yang pernah dan sedang kamu tempati</p>
                                    </div>
                                    <div className="space-y-4">
                                        {DUMMY_HISTORY.map(item => (
                                            <div key={item.id} className="bg-white p-6 rounded-[32px] border border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-sm hover:shadow-md transition-all">
                                                <div className="flex items-center space-x-6 w-full">
                                                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300">
                                                        <ReceiptText size={24} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-lg">{item.name}</h3>
                                                        <p className="text-xs text-gray-400 font-medium">Disewa pada {item.date}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between w-full sm:w-auto sm:space-x-12">
                                                    <div className="text-right">
                                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Bayar</p>
                                                        <p className="font-black text-gray-900">Rp {item.price}</p>
                                                    </div>
                                                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${item.status === 'Aktif' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-50 text-gray-400'}`}>
                                                        {item.status === 'Aktif' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                                                        <span className="text-[10px] font-black uppercase tracking-widest">{item.status}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'Profil' && (
                                <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto">
                                    <div className="bg-white rounded-[48px] border border-gray-100 overflow-hidden shadow-sm">
                                        <div className="h-32 bg-gray-900"></div>
                                        <div className="px-10 pb-12">
                                            <div className="relative -mt-12 mb-8">
                                                <img src={DUMMY_USER.avatar} className="w-24 h-24 rounded-[32px] bg-white p-2 border-4 border-[#FAFAFA]" alt="Profile" />
                                                <button className="absolute bottom-0 right-0 p-2 bg-white rounded-xl shadow-lg border border-gray-50 text-gray-400 hover:text-gray-900 transition-all">
                                                    <Settings size={16} />
                                                </button>
                                            </div>
                                            <div className="space-y-8">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                                                        <input type="text" defaultValue={DUMMY_USER.name} className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-bold outline-none" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                                                        <input type="email" defaultValue={DUMMY_USER.email} className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-bold outline-none" />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">New Password</label>
                                                    <input type="password" placeholder="Leave blank to keep current" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-bold outline-none" />
                                                </div>
                                                <button className="w-full bg-gray-900 text-white py-5 rounded-[24px] font-bold text-xs uppercase tracking-[0.3em] shadow-xl shadow-gray-200 hover:bg-gray-800 transition-all">Update Account</button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )}
                </div>
            </main>
        </div>
    );
}