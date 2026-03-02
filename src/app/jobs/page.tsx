import { MapPin, Briefcase, Clock, Search } from "lucide-react";

export default function JobsPage() {
    return (
        <main className="min-h-screen pt-24 pb-16 bg-gray-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                            Job Board
                        </h1>
                        <p className="text-lg text-foreground/70">
                            Find your next career opportunity. Explore open roles from top companies in our network.
                        </p>
                    </div>

                    <div className="relative w-full md:w-72">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={18} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search jobs..."
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                        />
                    </div>
                </div>

                {/* Job Listings Placeholder */}
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="group bg-white border border-gray-100 p-6 rounded-2xl hover:border-primary/30 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer">

                            <div className="flex items-center gap-6">
                                <div className="h-16 w-16 bg-gray-100 rounded-xl flex items-center justify-center animate-pulse" />
                                <div>
                                    <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-3" />
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                                        <span className="flex items-center gap-1">
                                            <Briefcase size={16} /> <div className="h-4 w-20 bg-gray-100 rounded animate-pulse" />
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin size={16} /> <div className="h-4 w-24 bg-gray-100 rounded animate-pulse" />
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={16} /> <div className="h-4 w-16 bg-gray-100 rounded animate-pulse" />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <div className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-100">
                                    Full-time
                                </div>
                                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors w-full sm:w-auto">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
