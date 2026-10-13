import Image from 'next/image';
import Link from 'next/link';
import { sortedPosts, formatDate } from '@/lib/posts';

export const metadata = {
  title: 'Blog | Prepzora',
  description: 'School visits, events, and news from the Prepzora team.',
};

export default function BlogPage() {
  const posts = sortedPosts();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#195682]">Blog Posts</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          School visits, events, and everything we&apos;re doing to help Nigerian students pass WAEC &amp; JAMB.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet. Check back soon.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative w-full h-52">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500">{formatDate(post.date)}</p>
                <h2 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-[#195682] transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-[#195682]">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}