import Link from "next/link";
import { Calendar, Briefcase } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-[#1A1A1A] text-white py-24 md:py-32">
            {/* Subtle Geometric Pattern Overlay (Zellige feel) */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 15l15 15-15 15-15-15L30 15z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '30px 30px'
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                {/* Decorative Element */}
                <div className="inline-flex items-center justify-center p-4 bg-primary/20 backdrop-blur-sm rounded-2xl mb-8 border border-primary/30">
                    <span className="text-primary text-4xl" aria-hidden="true">✦</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-4xl text-balance">
                    Your Moroccan Community in Canada
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl text-balance font-medium">
                    News, events, and opportunities for Moroccans across Canada.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Link
                        href="/events"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                    >
                        <Calendar size={20} />
                        Explore Events
                    </Link>
                    <Link
                        href="/jobs"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-white rounded-xl font-semibold hover:bg-primary/10 transition-all hover:-translate-y-0.5"
                    >
                        <Briefcase size={20} />
                        Browse Jobs
                    </Link>
                </div>
            </div>
        </section>
    );
}
