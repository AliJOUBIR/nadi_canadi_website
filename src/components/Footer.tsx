import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Tagline */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4 group">
                            <span className="text-primary text-xl" aria-hidden="true">✦</span>
                            <span className="font-bold text-xl tracking-tight text-primary group-hover:opacity-90 transition-opacity">
                                NADI CANADI
                            </span>
                        </Link>
                        <p className="text-foreground/70 text-sm leading-relaxed max-w-xs">
                            Connecting Moroccans across Canada.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-foreground/70 hover:text-primary transition-colors">Blog</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Community</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/events" className="text-sm text-foreground/70 hover:text-primary transition-colors">Events</Link>
                            </li>
                            <li>
                                <Link href="/jobs" className="text-sm text-foreground/70 hover:text-primary transition-colors">Job Board</Link>
                            </li>
                            <li>
                                <Link href="/members" className="text-sm text-foreground/70 hover:text-primary transition-colors">Directory</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contact</h3>
                        <p className="text-sm text-foreground/70 mb-4">
                            hello@nadicanadi.com
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="p-2 bg-gray-50 rounded-xl text-foreground/60 hover:text-primary hover:bg-gray-100 transition-all" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 bg-gray-50 rounded-xl text-foreground/60 hover:text-primary hover:bg-gray-100 transition-all" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 bg-gray-50 rounded-xl text-foreground/60 hover:text-primary hover:bg-gray-100 transition-all" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="p-2 bg-gray-50 rounded-xl text-foreground/60 hover:text-primary hover:bg-gray-100 transition-all" aria-label="WhatsApp">
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-foreground/50">
                        © 2025 Nadi Canadi. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-sm text-foreground/50 hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-sm text-foreground/50 hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
