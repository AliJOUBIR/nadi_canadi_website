import Link from 'next/link';
import Image from 'next/image';
import { getPosts, type WPPost } from '@/lib/wordpress';

export const revalidate = 30; // Revalidate the page every 30 seconds

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Blog
                    </h1>
                    <p className="text-lg text-foreground/70 mb-12">
                        Discover the latest news, stories, and insights.
                    </p>

                    <div className="grid gap-8">
                        {posts.length === 0 && (
                            <p className="text-foreground/70">No posts found. Please check your WordPress connection.</p>
                        )}
                        {posts.map((post: WPPost) => {
                            // Extract the featured image URL from the WP _embedded response if it exists
                            const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
                            const imageUrl = featuredMedia?.source_url;
                            const imageAlt = featuredMedia?.alt_text || 'Blog post image';

                            return (
                                <article key={post.id} className="p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start group overflow-hidden">
                                    <Link href={`/blog/${post.slug}`} className="block w-full">
                                        {imageUrl ? (
                                            <div className="relative w-full h-64 sm:h-80 mb-6 rounded-xl overflow-hidden bg-gray-100">
                                                <Image
                                                    src={imageUrl}
                                                    alt={imageAlt}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-full h-48 sm:h-64 mb-6 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                                                <span className="text-gray-400">No Image</span>
                                            </div>
                                        )}
                                        <h2
                                            className="text-2xl font-semibold mb-4 text-foreground group-hover:text-amber-500 transition-colors"
                                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                        />
                                    </Link>
                                    <div
                                        className="text-foreground/70 mb-4 line-clamp-3 prose prose-sm max-w-none"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                    />
                                    <div className="mt-auto flex items-center justify-between w-full">
                                        <span className="text-sm text-foreground/50">
                                            {new Date(post.date).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                        <Link href={`/blog/${post.slug}`} className="text-amber-500 font-medium text-sm hover:underline">
                                            Read More →
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
