import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPost, formatDate } from '@/lib/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} | Prepzora`, description: post.excerpt };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <Link href="/blog" className="text-sm font-medium text-[#195682] hover:underline">
        ← Back to Blog
      </Link>

      <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-gray-500">{formatDate(post.date)}</p>

      <div className="relative w-full h-56 sm:h-96 mt-8 rounded-3xl overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <div className="mt-8 space-y-5 text-gray-700 leading-relaxed text-lg">
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {post.images.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[#195682] mb-4">Photos from the event</h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {post.images.map((img, i) => (
              <figure key={i} className="space-y-2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.caption ?? post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 380px"
                  />
                </div>
                {img.caption && (
                  <figcaption className="text-xs sm:text-sm text-gray-500">{img.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      <div className="mt-14 bg-[#195682] text-white rounded-3xl p-6 sm:p-8 text-center">
        <p className="text-xl font-semibold">Want Prepzora in your school?</p>
        <Link
          href="/#schools"
          className="mt-4 inline-block bg-white text-[#195682] px-6 py-3 rounded-3xl font-semibold hover:bg-gray-100 transition-colors"
        >
          Learn more for schools
        </Link>
      </div>
    </main>
  );
}