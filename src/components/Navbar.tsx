"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState("EN");

    const toggleLang = () => setLang(lang === "EN" ? "FR" : "EN");

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: "Events", href: "/events" },
        { name: "Jobs", href: "/jobs" },
        { name: "About", href: "/about" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-primary text-xl md:text-2xl" aria-hidden="true">✦</span>
                        <span className="font-bold text-xl md:text-2xl tracking-tight text-primary group-hover:opacity-90 transition-opacity">
                            NADI CANADI
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Section: Language Toggle & Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLang}
                            className="hidden md:block text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
                            aria-label="Toggle Language"
                        >
                            <span className={lang === "FR" ? "text-primary" : ""}>FR</span> |{" "}
                            <span className={lang === "EN" ? "text-primary" : ""}>EN</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-100 bg-background absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-4 text-base font-medium text-foreground/80 hover:bg-gray-50 hover:text-primary rounded-xl transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-3 pt-4 border-t border-gray-100 mt-4">
                            <button
                                onClick={toggleLang}
                                className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors py-2"
                            >
                                <span className={lang === "FR" ? "text-primary" : ""}>FR</span> |{" "}
                                <span className={lang === "EN" ? "text-primary" : ""}>EN</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
