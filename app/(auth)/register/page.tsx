"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Mail, Phone, Lock, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 flex flex-col justify-center py-12 px-6 lg:px-8 selection:bg-gray-200">
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-8 left-8"
      >
        <Link href="/" className="flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-gray-800 transition-all">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
      </motion.div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-2xl font-bold tracking-[0.3em] text-gray-800 uppercase block mb-4">
            Kos<span className="font-light text-gray-300">find</span>
          </span>
          <h2 className="text-4xl font-light tracking-tight text-gray-800">Create Account</h2>
          <p className="mt-3 text-sm text-gray-400 font-medium">Bergabung untuk pengalaman hunian eksklusif.</p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="sm:mx-auto sm:w-full sm:max-w-xl"
      >
        <div className="bg-white py-12 px-10 shadow-2xl shadow-gray-200/50 border border-gray-50 rounded-[48px]">
          <form className="space-y-6" action="#" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input
                    type="text"
                    required
                    placeholder="Mohammad Kevin"
                    className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white focus:ring-0 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Username</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 font-bold text-sm">@</span>
                  <input
                    type="text"
                    required
                    placeholder="kevin_dev"
                    className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white focus:ring-0 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white focus:ring-0 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input
                    type="tel"
                    required
                    placeholder="+62 812..."
                    className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white focus:ring-0 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white focus:ring-0 rounded-2xl py-4 pl-12 pr-12 text-sm font-medium transition-all outline-none"
                  />
                  <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-200 cursor-pointer hover:text-gray-400 transition-colors" size={18} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white focus:ring-0 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-gray-800 text-white py-5 rounded-3xl font-bold text-xs uppercase tracking-[0.3em] shadow-xl shadow-gray-200 hover:bg-gray-700 transition-all"
              >
                Create Account
              </motion.button>
            </div>
          </form>

          <div className="mt-10 text-center">
            <p className="text-xs text-gray-400 font-medium tracking-tight">
              Already have an account?{' '}
              <Link href="/login" className="text-gray-800 font-bold hover:underline underline-offset-4">
                Login here
              </Link>
            </p>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center text-[10px] text-gray-300 font-bold uppercase tracking-[0.2em]"
        >
          © 2026 Kosfind Management. All Rights Reserved.
        </motion.p>
      </motion.div>
    </main>
  );
}