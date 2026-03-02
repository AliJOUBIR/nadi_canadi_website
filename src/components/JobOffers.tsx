import Link from "next/link";
import { ArrowRight, MapPin, Clock, Building2 } from "lucide-react";

export default function JobOffers() {
    const jobs = [
        {
            id: 1,
            title: "Senior Full Stack Developer",
            company: "TechNova Solutions",
            city: "Toronto, ON",
            type: "Full-time",
            posted: "2 days ago",
        },
        {
            id: 2,
            title: "Bilingual Customer Success Manager (EN/FR)",
            company: "Global Nexus",
            city: "Montreal, QC",
            type: "Hybrid",
            posted: "1 day ago",
        },
        {
            id: 3,
            title: "Financial Analyst - Operations",
            company: "Crescent Capital",
            city: "Vancouver, BC",
            type: "Full-time",
            posted: "5 days ago",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
                            Job Opportunities
                        </h2>
                        <p className="text-foreground/60 font-medium">Find your next career move within the network.</p>
                    </div>
                    <Link
                        href="/jobs"
                        className="flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
                    >
                        View all jobs <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="flex flex-col gap-4">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-primary/30 hover:shadow-md transition-all gap-6"
                        >
                            <div className="flex gap-5 items-center w-full md:w-auto">
                                {/* Placeholder Logo */}
                                <div className="w-14 h-14 min-w-14 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
                                    <Building2 size={24} />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors mb-1">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-foreground/60 font-medium">
                                        <span className="text-foreground/80">{job.company}</span>
                                        <span className="hidden sm:inline text-gray-300">•</span>
                                        <span className="flex items-center gap-1"><MapPin size={14} />{job.city}</span>
                                        <span className="hidden sm:inline text-gray-300">•</span>
                                        <span className="flex items-center gap-1"><Clock size={14} />{job.posted}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full md:w-auto gap-4 mt-2 md:mt-0 pt-4 md:pt-0 border-t md:border-none border-gray-50">
                                <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-foreground/70 text-xs font-bold rounded-full">
                                    {job.type}
                                </span>

                                <Link
                                    href={`/jobs/${job.id}`}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors"
                                >
                                    Apply <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
