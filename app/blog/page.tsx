import { getAllPosts } from '@/lib/blog';
import BlogPostCard from '@/components/BlogPostCard';
import AdBanner from '@/components/AdBanner';

export const metadata = {
  title: 'Blog - Son Pham',
  description: 'Daily thoughts on AI, technology, and building in public',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Daily thoughts on AI, technology, and building in public
        </p>
      </div>

      {/* AdSense Banner */}
      <div className="mb-12">
        <AdBanner slot="1234567890" format="auto" />
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg mb-4">No blog posts yet. Check back soon!</p>
          <p className="text-gray-500">The first post is being written right now... 📝</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <>
              <BlogPostCard key={post.slug} post={post} />
              {/* Ad after every 4 posts */}
              {(index + 1) % 4 === 0 && (
                <div key={`ad-${index}`} className="col-span-1 md:col-span-2">
                  <AdBanner slot="9876543210" format="fluid" />
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
}
