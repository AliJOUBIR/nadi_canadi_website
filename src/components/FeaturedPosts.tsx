import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedPosts() {
    const posts = [
        {
            id: 1,
            title: "Celebrating Yennayer: The Amazigh New Year in Montreal",
            excerpt: "Join the local community as we celebrate culture, food, and music for the Amazigh New Year.",
            category: "Culture",
            date: "Jan 12, 2026",
        },
        {
            id: 2,
            title: "Guide to Navigating the Canadian Job Market as a Newcomer",
            excerpt: "Tips and tricks from professionals who successfully transitioned their careers to Canada.",
            category: "Career",
            date: "Feb 05, 2026",
        },
        {
            id: 3,
            title: "Top 5 Moroccan Restaurants to Try in the GTA",
            excerpt: "Missing the taste of home? We've compiled the best spots to get authentic Moroccan cuisine.",
            category: "Food",
            date: "Feb 28, 2026",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                        Latest from the Community
                    </h2>
                    <Link
                        href="/blog"
                        className="hidden sm:flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
                    >
                        View all articles <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            {/* Placeholder Image */}
                            <div className="w-full h-48 bg-gray-200 relative overflow-hidden group-hover:bg-gray-300 transition-colors flex items-center justify-center">
                                <span className="text-gray-400 font-medium tracking-widest text-sm uppercase">Image Placeholder</span>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="inline-block px-3 py-1 bg-red-50 text-primary text-xs font-bold rounded-full">
                                        {post.category}
                                    </span>
                                    <span className="text-sm text-foreground/50 font-medium">
                                        {post.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-foreground/70 mb-6 line-clamp-2 text-sm leading-relaxed flex-grow">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all mt-auto"
                                >
                                    Read more <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All button */}
                <div className="mt-10 sm:hidden flex justify-center">
                    <Link
                        href="/blog"
                        className="flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
                    >
                        View all articles <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
