import Link from "next/link";
import { ArrowRight, MapPin, Video, Ticket } from "lucide-react";

export default function UpcomingEvents() {
    const events = [
        {
            id: 1,
            title: "Nadi Canadi Networking Mixer",
            city: "Toronto",
            type: "In-Person",
            dateDay: "15",
            dateMonth: "MAR",
        },
        {
            id: 2,
            title: "Tech Professionals Virtual Meetup",
            city: "Canada-Wide",
            type: "Online",
            dateDay: "22",
            dateMonth: "MAR",
        },
        {
            id: 3,
            title: "Spring Iftar Dinner Collection",
            city: "Montreal",
            type: "In-Person",
            dateDay: "05",
            dateMonth: "APR",
        },
        {
            id: 4,
            title: "Real Estate & Home Buying Workshop",
            city: "Canada-Wide",
            type: "Online",
            dateDay: "18",
            dateMonth: "APR",
        },
    ];

    return (
        <section className="py-24 bg-red-50/50 border-y border-red-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                        Upcoming Events
                    </h2>
                    <Link
                        href="/events"
                        className="hidden sm:flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
                    >
                        View all events <ArrowRight size={18} />
                    </Link>
                </div>

                {/* Horizontal Scroll Area */}
                <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="snap-start flex-none w-[320px] sm:w-[380px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col"
                        >
                            <div className="flex gap-5 mb-6">
                                {/* Date Badge */}
                                <div className="flex flex-col items-center justify-center bg-red-50 text-primary w-16 h-16 rounded-xl border border-red-100">
                                    <span className="text-xl font-black leading-none">{event.dateDay}</span>
                                    <span className="text-xs font-bold leading-tight uppercase mt-1">{event.dateMonth}</span>
                                </div>

                                <div className="flex-1">
                                    {/* Type Badge */}
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-yellow-50 text-accent text-xs font-bold rounded-full mb-3">
                                        {event.type === "Online" ? <Video size={12} /> : null}
                                        {event.type}
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                        {event.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-foreground/60 text-sm font-medium mb-8">
                                <MapPin size={16} />
                                {event.city}
                            </div>

                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-gray-50 text-foreground font-semibold rounded-xl group-hover:bg-primary group-hover:text-white transition-colors mt-auto border border-gray-100 group-hover:border-primary">
                                <Ticket size={18} />
                                Register
                            </button>
                        </div>
                    ))}
                </div>

                {/* Mobile View All button */}
                <div className="mt-4 sm:hidden flex justify-center">
                    <Link
                        href="/events"
                        className="flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
                    >
                        View all events <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
