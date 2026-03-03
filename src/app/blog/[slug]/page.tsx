import { getPostBySlug, getPosts } from '@/lib/wordpress';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const revalidate = 30; // Revalidate the page every 30 seconds

interface BlogPostProps {
    params: {
        slug: string;
    };
}

// Generate static params for the most recent posts
export async function generateStaticParams() {
    const posts = await getPosts(10);
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostProps) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    // Extract the featured image URL from the WP _embedded response if it exists
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    const imageUrl = featuredMedia?.source_url;
    const imageAlt = featuredMedia?.alt_text || 'Blog post image';

    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/blog" className="text-amber-500 hover:underline mb-8 inline-block font-medium">
                    ← Back to Blog
                </Link>
                <article className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {imageUrl && (
                        <div className="relative w-full h-64 md:h-96 mb-10 rounded-2xl overflow-hidden bg-gray-100 -mt-2">
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 800px"
                            />
                        </div>
                    )}
                    <header className="mb-10 text-center">
                        <h1
                            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        <div className="text-sm text-foreground/50">
                            Published on {new Date(post.date).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </div>
                    </header>

                    <div
                        className="prose prose-lg mx-auto max-w-none text-foreground/80
              prose-headings:text-foreground prose-headings:font-bold
              prose-a:text-amber-500 hover:prose-a:text-amber-600
              prose-img:rounded-xl prose-img:shadow-md"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />
                </article>
            </div>
        </main>
    );
}
