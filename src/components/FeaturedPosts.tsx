import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getPosts, type WPPost } from "@/lib/wordpress";

export default async function FeaturedPosts() {
    // Fetch the 3 most recent posts from WordPress
    const posts = await getPosts(3);

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
                    {posts.length === 0 && (
                        <p className="text-foreground/70 col-span-3 text-center py-10">No posts found. Please check your WordPress connection.</p>
                    )}
                    {posts.map((post: WPPost) => {
                        const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
                        const imageUrl = featuredMedia?.source_url;
                        const imageAlt = featuredMedia?.alt_text || 'Blog post image';
                        // Simple fallback category name since fetching custom taxonomies requires another API call.
                        const categoryName = "Article";

                        return (
                            <div key={post.id} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <Link href={`/blog/${post.slug}`} className="block relative w-full h-48 bg-gray-100 overflow-hidden">
                                    {imageUrl ? (
                                        <Image
                                            src={imageUrl}
                                            alt={imageAlt}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-gray-400 font-medium tracking-widest text-sm uppercase">No Image</span>
                                        </div>
                                    )}
                                </Link>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="inline-block px-3 py-1 bg-red-50 text-primary text-xs font-bold rounded-full">
                                            {categoryName}
                                        </span>
                                        <span className="text-sm text-foreground/50 font-medium">
                                            {new Date(post.date).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>

                                    <Link href={`/blog/${post.slug}`} className="block">
                                        <h3
                                            className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors"
                                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                        />
                                    </Link>

                                    <div
                                        className="text-foreground/70 mb-6 line-clamp-2 text-sm leading-relaxed flex-grow prose prose-sm max-w-none"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                    />

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all mt-auto"
                                    >
                                        Read more <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
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
