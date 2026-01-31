import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  tags: string[];
  isExternal?: boolean;
}

export default function ProjectCard({ 
  title, 
  description, 
  url, 
  tags,
  isExternal = false 
}: ProjectCardProps) {
  const LinkComponent = isExternal ? 'a' : Link;
  const linkProps = isExternal 
    ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
    : { href: url };

  return (
    <LinkComponent {...linkProps} className="block group">
      <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all hover:scale-105">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
          {title}
          {isExternal && (
            <span className="ml-2 text-sm text-gray-400">↗</span>
          )}
        </h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </LinkComponent>
  );
}
