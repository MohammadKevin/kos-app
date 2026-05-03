"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const DUMMY_USERS = [
    {
        identifier: "choqie@gmail.com",
        password: "admin123",
        redirect: "/admin"
    },
    {
        identifier: "kevin@gmail.com",
        password: "user123",
        redirect: "/pelanggan"
    }
];

export default function LoginPage() {
    const router = useRouter();
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const user = DUMMY_USERS.find(
            (u) => u.identifier === identifier && u.password === password
        );

        if (user) {
            setTimeout(() => {
                router.push(user.redirect);
            }, 800);
        } else {
            setLoading(false);
            setError("Kredensial tidak valid. Silakan coba lagi.");
        }
    };

    return (
        <main className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 flex flex-col justify-center py-12 px-6 selection:bg-gray-200">

            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="fixed top-12 left-12"
            >
                <Link href="/" className="flex items-center text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 hover:text-gray-900 transition-all">
                    <ArrowLeft size={14} className="mr-3" /> Back
                </Link>
            </motion.div>

            <div className="max-w-md mx-auto w-full">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-2xl font-bold tracking-[0.3em] text-gray-800 uppercase block mb-6">
                            Kos<span className="font-light text-gray-300">find</span>
                        </span>
                        <h2 className="text-4xl font-light tracking-tight text-gray-800 leading-tight">
                            Welcome <br />
                            <span className="italic font-serif text-gray-300">Back.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Form Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white py-14 px-10 shadow-2xl shadow-gray-200/40 border border-gray-50 rounded-[48px]"
                >
                    <form onSubmit={handleLogin} className="space-y-8">

                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-red-50 text-red-400 text-[10px] font-bold uppercase tracking-widest text-center py-3 rounded-2xl overflow-hidden"
                                >
                                    {error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 ml-1">Account Identifier</label>
                            <div className="relative">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-200" size={18} />
                                <input
                                    type="text"
                                    required
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    placeholder="name@example.com"
                                    className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white focus:ring-0 rounded-[20px] py-4 pl-14 pr-4 text-sm font-medium transition-all outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Security Key</label>
                                <button type="button" className="text-[9px] font-bold uppercase tracking-widest text-gray-300 hover:text-gray-800 transition-colors">Forgot?</button>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-200" size={18} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white focus:ring-0 rounded-[20px] py-4 pl-14 pr-14 text-sm font-medium transition-all outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-200 hover:text-gray-400 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="pt-4">
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                disabled={loading}
                                type="submit"
                                className="w-full bg-gray-800 text-white py-5 rounded-[24px] font-bold text-[11px] uppercase tracking-[0.3em] shadow-xl shadow-gray-200 hover:bg-gray-700 transition-all flex items-center justify-center disabled:opacity-50"
                            >
                                {loading ? "Authenticating..." : (
                                    <span className="flex items-center">
                                        Sign In <ArrowRight size={16} className="ml-3" />
                                    </span>
                                )}
                            </motion.button>
                        </div>
                    </form>

                    <div className="mt-12 text-center">
                        <p className="text-[11px] text-gray-400 font-medium tracking-tight">
                            New to our sanctuary?
                            <Link href="/register" className="text-gray-800 font-bold hover:underline underline-offset-4 ml-1">
                                Join Kosfind
                            </Link>
                        </p>
                    </div>
                </motion.div>

                {/* Brand Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 flex justify-center space-x-10"
                >
                    {['Inquiry', 'Support', 'Legal'].map((item) => (
                        <a key={item} href="#" className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-300 hover:text-gray-600 transition-colors">{item}</a>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}