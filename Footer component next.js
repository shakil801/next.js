"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">MyShop</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Your trusted e-commerce partner. Quality products, fast delivery, and secure payments.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-white"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-white"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-white"><Twitter size={20} /></Link>
            <Link href="#" className="hover:text-white"><Linkedin size={20} /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16} /> Dhaka, Bangladesh</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +880 1234-567890</li>
            <li className="flex items-center gap-2"><Mail size={16} /> support@myshop.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with ❤️ using Next.js</p>
        </div>
      </div>
    </footer>
  );
}
