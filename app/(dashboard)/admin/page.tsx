"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard, Building2, Users, ReceiptText, BarChart3, LogOut,
    Search, Bell, Plus, MoreVertical, Edit, Trash2, Ban, CheckCircle2,
    X, Filter, ArrowUpRight, TrendingUp, Moon, Sun, Menu
} from 'lucide-react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';

const DUMMY_STATS = [
    { id: 1, label: 'Total Kost', value: '1,284', icon: Building2, trend: '+12%', color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 2, label: 'Total User', value: '8,920', icon: Users, trend: '+5.4%', color: 'text-purple-600', bg: 'bg-purple-50' },
    { id: 3, label: 'Total Transaksi', value: '452', icon: ReceiptText, trend: '+18%', color: 'text-orange-600', bg: 'bg-orange-50' },
    { id: 4, label: 'Pendapatan', value: 'Rp 128M', icon: BarChart3, trend: '+22%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
];

const CHART_DATA = [
    { name: 'Jan', revenue: 4000, transactions: 2400 },
    { name: 'Feb', revenue: 3000, transactions: 1398 },
    { name: 'Mar', revenue: 2000, transactions: 9800 },
    { name: 'Apr', revenue: 2780, transactions: 3908 },
    { name: 'May', revenue: 1890, transactions: 4800 },
    { name: 'Jun', revenue: 2390, transactions: 3800 },
];

const KOST_DATA = [
    { id: 1, name: 'Mentari Kuningan', location: 'Jakarta', price: '2.500.000', status: 'Active' },
    { id: 2, name: 'Griya Asri Dago', location: 'Bandung', price: '1.800.000', status: 'Active' },
    { id: 3, name: 'Urban Suite', location: 'Surabaya', price: '3.200.000', status: 'Pending' },
];

const USER_DATA = [
    { id: 1, name: 'Mohammad Kevin', email: 'kevin@dev.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Choqie Admin', email: 'choqie@gmail.com', role: 'Admin', status: 'Active' },
    { id: 3, name: 'Budi Santoso', email: 'budi@user.com', role: 'Pelanggan', status: 'Banned' },
];

const TRANSACTION_DATA = [
    { id: 'TX-9921', user: 'Kevin', kost: 'Mentari', date: '2026-05-01', status: 'Success' },
    { id: 'TX-9922', user: 'Budi', kost: 'Griya Asri', date: '2026-05-02', status: 'Pending' },
];

const SidebarItem = ({ icon: Icon, label, active, onClick }: any) => (
    <motion.button
        whileHover={{ x: 5 }}
        onClick={onClick}
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all ${active ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-100'
            }`}
    >
        <Icon size={20} />
        <span className="text-sm font-semibold">{label}</span>
    </motion.button>
);

const Card = ({ children, className = "" }: any) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm ${className}`}
    >
        {children}
    </motion.div>
);

const Modal = ({ isOpen, onClose, title, children }: any) => (
    <AnimatePresence>
        {isOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={onClose} className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative bg-white w-full max-w-lg rounded-[3rem] p-10 shadow-2xl"
                >
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X size={20} /></button>
                    </div>
                    {children}
                </motion.div>
            </div>
        )}
    </AnimatePresence>
);

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500);
    }, []);

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-[#FAFAFA] text-gray-900'} font-sans`}>
            <aside className={`fixed left-0 top-0 h-full bg-white border-r border-gray-100 z-50 transition-all duration-500 ${isSidebarOpen ? 'w-72' : 'w-20'} hidden lg:block`}>
                <div className="p-8">
                    <div className="flex items-center space-x-3 mb-12">
                        <div className="w-10 h-10 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-bold">K</div>
                        {isSidebarOpen && <span className="text-xl font-bold tracking-tighter">KOSFIND</span>}
                    </div>
                    <nav className="space-y-2">
                        <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
                        <SidebarItem icon={Building2} label="Manajemen Kost" active={activeTab === 'Kost'} onClick={() => setActiveTab('Kost')} />
                        <SidebarItem icon={Users} label="Manajemen User" active={activeTab === 'User'} onClick={() => setActiveTab('User')} />
                        <SidebarItem icon={ReceiptText} label="Transaksi" active={activeTab === 'Transaksi'} onClick={() => setActiveTab('Transaksi')} />
                        <SidebarItem icon={BarChart3} label="Statistik" active={activeTab === 'Statistik'} onClick={() => setActiveTab('Statistik')} />
                    </nav>
                </div>
                <div className="absolute bottom-8 w-full px-8">
                    <SidebarItem icon={LogOut} label="Logout" />
                </div>
            </aside>

            <main className={`transition-all duration-500 ${isSidebarOpen ? 'lg:ml-72' : 'lg:ml-20'} p-4 lg:p-12`}>
                <header className="flex justify-between items-center mb-12">
                    <div className="flex items-center space-x-4">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm">
                            <Menu size={20} />
                        </button>
                        <div className="relative hidden md:block">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input type="text" placeholder="Search anything..." className="bg-white border border-gray-100 pl-12 pr-6 py-3 rounded-2xl w-80 outline-none focus:ring-2 ring-gray-100 transition-all" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={() => setDarkMode(!darkMode)} className="p-3 bg-white rounded-2xl border border-gray-100">
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <div className="p-3 bg-white rounded-2xl border border-gray-100 relative cursor-pointer">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </div>
                        <div className="flex items-center space-x-3 bg-white p-1.5 pr-4 rounded-2xl border border-gray-100 shadow-sm">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Choqie" className="w-9 h-9 rounded-xl bg-gray-100" alt="Admin" />
                            <div className="hidden sm:block text-left">
                                <p className="text-xs font-bold">Choqie Admin</p>
                                <p className="text-[10px] text-gray-400">Super Admin</p>
                            </div>
                        </div>
                    </div>
                </header>

                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map(i => <div key={i} className="h-32 bg-gray-100 animate-pulse rounded-[2.5rem]"></div>)}
                    </div>
                ) : (
                    <>
                        {activeTab === 'Dashboard' && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {DUMMY_STATS.map((stat) => (
                                        <Card key={stat.id}>
                                            <div className="flex justify-between items-start mb-4">
                                                <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                                                    <stat.icon size={24} />
                                                </div>
                                                <span className="text-xs font-bold text-emerald-500 flex items-center bg-emerald-50 px-2 py-1 rounded-lg">
                                                    <TrendingUp size={12} className="mr-1" /> {stat.trend}
                                                </span>
                                            </div>
                                            <p className="text-sm font-medium text-gray-400 mb-1">{stat.label}</p>
                                            <h3 className="text-3xl font-bold tracking-tight">{stat.value}</h3>
                                        </Card>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <Card className="lg:col-span-2">
                                        <div className="flex justify-between items-center mb-10">
                                            <h3 className="text-xl font-bold tracking-tight">Revenue Insights</h3>
                                            <select className="bg-gray-50 border-none rounded-xl text-xs font-bold p-2 outline-none">
                                                <option>Last 6 Months</option>
                                            </select>
                                        </div>
                                        <div className="h-[350px] w-full">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <AreaChart data={CHART_DATA}>
                                                    <defs>
                                                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#111827" stopOpacity={0.1} />
                                                            <stop offset="95%" stopColor="#111827" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF' }} dy={10} />
                                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF' }} />
                                                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                                                    <Area type="monotone" dataKey="revenue" stroke="#111827" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </Card>
                                    <Card>
                                        <h3 className="text-xl font-bold tracking-tight mb-8">Recent Activity</h3>
                                        <div className="space-y-8">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="flex items-start space-x-4">
                                                    <div className="w-2 h-2 mt-2 rounded-full bg-gray-900"></div>
                                                    <div>
                                                        <p className="text-sm font-bold">New Kost Listing</p>
                                                        <p className="text-xs text-gray-400">Mentari Kuningan by Owner A</p>
                                                        <p className="text-[10px] text-gray-300 mt-1">2 mins ago</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'Kost' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                    <h2 className="text-3xl font-bold tracking-tight">Manajemen Kost</h2>
                                    <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-xl shadow-gray-200">
                                        <Plus size={20} /> <span>Tambah Kost</span>
                                    </button>
                                </div>
                                <Card className="overflow-hidden p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="bg-gray-50/50">
                                                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">Kost</th>
                                                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">Location</th>
                                                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">Price</th>
                                                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">Status</th>
                                                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {KOST_DATA.map((kost) => (
                                                    <tr key={kost.id} className="hover:bg-gray-50/30 transition-colors">
                                                        <td className="px-8 py-6">
                                                            <div className="flex items-center space-x-3">
                                                                <div className="w-10 h-10 rounded-xl bg-gray-100"></div>
                                                                <span className="font-bold text-sm">{kost.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-8 py-6 text-sm text-gray-500 font-medium">{kost.location}</td>
                                                        <td className="px-8 py-6 font-bold text-sm">Rp {kost.price}</td>
                                                        <td className="px-8 py-6">
                                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${kost.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                                                                {kost.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-8 py-6">
                                                            <div className="flex space-x-2">
                                                                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors"><Edit size={16} /></button>
                                                                <button className="p-2 hover:bg-red-50 rounded-lg text-red-400 transition-colors"><Trash2 size={16} /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Card>
                            </motion.div>
                        )}

                        {activeTab === 'User' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-3xl font-bold tracking-tight">Manajemen User</h2>
                                    <div className="flex space-x-3">
                                        <button className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"><Filter size={20} /></button>
                                    </div>
                                </div>
                                <Card className="overflow-hidden p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="bg-gray-50/50 text-gray-400 text-xs font-bold uppercase tracking-widest">
                                                    <th className="px-8 py-5">User</th>
                                                    <th className="px-8 py-5">Role</th>
                                                    <th className="px-8 py-5">Status</th>
                                                    <th className="px-8 py-5">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50 font-medium">
                                                {USER_DATA.map((user) => (
                                                    <tr key={user.id} className="hover:bg-gray-50/30 transition-colors">
                                                        <td className="px-8 py-6">
                                                            <div>
                                                                <p className="text-sm font-bold">{user.name}</p>
                                                                <p className="text-xs text-gray-400">{user.email}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-8 py-6 text-sm">{user.role}</td>
                                                        <td className="px-8 py-6">
                                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${user.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                                                                {user.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-8 py-6">
                                                            <div className="flex space-x-2">
                                                                <button className={`p-2 rounded-lg transition-colors ${user.status === 'Active' ? 'hover:bg-red-50 text-red-400' : 'hover:bg-emerald-50 text-emerald-400'}`}>
                                                                    {user.status === 'Active' ? <Ban size={16} /> : <CheckCircle2 size={16} />}
                                                                </button>
                                                                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400"><Trash2 size={16} /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Card>
                            </motion.div>
                        )}

                        {activeTab === 'Transaksi' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                <h2 className="text-3xl font-bold tracking-tight">History Transaksi</h2>
                                <Card className="overflow-hidden p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="bg-gray-50/50 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">
                                                    <th className="px-8 py-5">TX ID</th>
                                                    <th className="px-8 py-5">User</th>
                                                    <th className="px-8 py-5">Kost</th>
                                                    <th className="px-8 py-5">Date</th>
                                                    <th className="px-8 py-5">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {TRANSACTION_DATA.map((tx) => (
                                                    <tr key={tx.id} className="text-sm">
                                                        <td className="px-8 py-6 font-bold">{tx.id}</td>
                                                        <td className="px-8 py-6 font-medium text-gray-500">{tx.user}</td>
                                                        <td className="px-8 py-6 font-medium">{tx.kost}</td>
                                                        <td className="px-8 py-6 text-gray-400">{tx.date}</td>
                                                        <td className="px-8 py-6">
                                                            <div className={`flex items-center space-x-2 ${tx.status === 'Success' ? 'text-emerald-500' : 'text-orange-500'}`}>
                                                                <div className={`w-1.5 h-1.5 rounded-full ${tx.status === 'Success' ? 'bg-emerald-500' : 'bg-orange-500'}`}></div>
                                                                <span className="font-bold text-[10px] uppercase tracking-widest">{tx.status}</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Card>
                            </motion.div>
                        )}
                    </>
                )}
            </main>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Tambah Unit Kost">
                <form className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Nama Properti</label>
                            <input type="text" placeholder="Contoh: Mentari Kuningan" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-medium outline-none focus:ring-2 ring-gray-100" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Lokasi</label>
                                <input type="text" placeholder="Jakarta" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-medium outline-none focus:ring-2 ring-gray-100" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Harga /Bulan</label>
                                <input type="number" placeholder="2500000" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-medium outline-none focus:ring-2 ring-gray-100" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Foto Properti</label>
                            <div className="border-2 border-dashed border-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center text-gray-300">
                                <Plus size={32} className="mb-2" />
                                <span className="text-xs font-bold uppercase tracking-widest">Upload Photo</span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6">
                        <button type="button" className="w-full bg-gray-900 text-white py-5 rounded-[2rem] font-bold text-xs uppercase tracking-[0.3em] shadow-xl shadow-gray-200" onClick={() => setIsModalOpen(false)}>
                            Simpan Data
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}