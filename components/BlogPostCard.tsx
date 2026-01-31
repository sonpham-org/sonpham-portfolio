import Link from 'next/link';
import { format } from 'date-fns';
import type { BlogPost } from '@/lib/blog';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        {post.coverImage && (
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        )}
        <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-600 text-sm mb-3">
          {format(new Date(post.date), 'MMMM dd, yyyy')}
        </p>
        <p className="text-gray-700 mb-4">{post.excerpt}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
