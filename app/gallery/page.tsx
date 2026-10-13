import Image from 'next/image';
import Link from 'next/link';
import { sortedPosts } from '@/lib/posts';

export const metadata = {
  title: 'Gallery | Prepzora',
  description: 'Photos from Prepzora school visits and events.',
};

export default function GalleryPage() {
  const posts = sortedPosts();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#195682]">Gallery</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Moments from our school visits and events. Tap any photo to read the full story.
        </p>
      </div>

      <div className="space-y-12">
        {posts.map((post) => (
          <section key={post.slug}>
            <div className="flex items-baseline justify-between gap-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{post.title}</h2>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-semibold text-[#195682] hover:underline shrink-0"
              >
                Read story →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {[{ src: post.cover }, ...post.images].map((img, i) => (
                <Link
                  key={i}
                  href={`/blog/${post.slug}`}
                  className="relative aspect-square rounded-2xl overflow-hidden group"
                >
                  <Image
                    src={img.src}
                    alt={`${post.title} photo ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}