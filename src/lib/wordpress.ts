/**
 * Utility functions to interact with the WordPress REST API.
 * 
 * If you set up your own WordPress site, add the following to your .env.local file:
 * NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com/wp-json/wp/v2
 */

// Fallback to the official WordPress 'Make' blog API for demonstration if no env var is provided
const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://make.wordpress.org/core/wp-json/wp/v2';

export interface WPPost {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    date: string;
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
        author?: Array<{
            name: string;
            avatar_urls?: Record<string, string>;
        }>;
    };
}

/**
 * Fetch a list of recent posts from WordPress
 */
export async function getPosts(limit: number = 10): Promise<WPPost[]> {
    try {
        // Appending a timestamp bypasses Pantheon's aggressive Varnish Edge Caching,
        // guaranteeing Next.js receives the absolute freshest data from the database.
        const bustCache = `&t=${new Date().getTime()}`;

        // _embed=true includes rich media like featured images and author info in the response
        const res = await fetch(`${WP_API_URL}/posts?_embed=true&per_page=${limit}${bustCache}`, {
            // Revalidate every 30 seconds - standard ISR approach
            next: { revalidate: 30 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch posts: ${res.statusText}`);
        }

        const posts = await res.json();
        return posts;
    } catch (error) {
        console.error('Error fetching WP posts:', error);
        return [];
    }
}

/**
 * Fetch a single post by its slug
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    try {
        const bustCache = `&t=${new Date().getTime()}`;
        const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed=true${bustCache}`, {
            next: { revalidate: 30 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch post: ${res.statusText}`);
        }

        const posts = await res.json();
        return posts.length > 0 ? posts[0] : null;
    } catch (error) {
        console.error('Error fetching WP post by slug:', error);
        return null;
    }
}
