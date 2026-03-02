export default function EventsPage() {
    return (
        <main className="min-h-screen pt-24 pb-16 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                    Upcoming Events
                </h1>
                <p className="text-lg text-foreground/70 mb-12 max-w-2xl">
                    Join us at our upcoming events. Connect with the community, learn new skills, and expand your horizons.
                </p>

                {/* Placeholder for events */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="h-48 bg-gray-100 w-full animate-pulse" />
                            <div className="p-6">
                                <div className="flex gap-2 mb-3">
                                    <div className="h-5 w-16 bg-red-100 rounded-md animate-pulse" />
                                    <div className="h-5 w-24 bg-gray-100 rounded-md animate-pulse" />
                                </div>
                                <div className="h-6 w-3/4 bg-gray-200 rounded mb-4 animate-pulse" />
                                <div className="h-4 w-full bg-gray-100 rounded mb-2 animate-pulse" />
                                <div className="h-4 w-5/6 bg-gray-100 rounded mb-6 animate-pulse" />
                                <div className="h-10 w-full bg-gray-100 rounded-lg mt-auto animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
