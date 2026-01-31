import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import AdBanner from '@/components/AdBanner';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Son Pham
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          AI Engineer, Researcher & Builder
        </p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Exploring the frontiers of artificial intelligence, machine learning, and creative technologies.
          Building tools that push the boundaries of what&apos;s possible.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/blog"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Read the Blog
          </Link>
          <Link 
            href="/projects"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <ProjectCard
            title="ARC Creator"
            description="Interactive tool for creating and solving Abstract Reasoning Corpus (ARC) challenges. Build, test, and share visual reasoning puzzles."
            url="https://arc.sonpham.net"
            tags={["Next.js", "TypeScript", "AI", "Puzzles"]}
            isExternal={true}
          />
          <ProjectCard
            title="Wealth of Agents"
            description="Multi-agent simulation framework exploring economic behaviors, decision-making, and emergent patterns in agent-based systems."
            url="https://agents.sonpham.net"
            tags={["Python", "Simulation", "Economics", "AI"]}
            isExternal={true}
          />
        </div>
        <div className="text-center">
          <Link 
            href="/projects"
            className="text-blue-600 hover:underline text-lg"
          >
            View all projects →
          </Link>
        </div>
      </section>

      {/* AdSense Banner */}
      <div className="my-12">
        <AdBanner slot="1234567890" format="auto" />
      </div>

      {/* Latest Blog Posts Preview */}
      <section className="py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Latest Posts</h2>
        <p className="text-center text-gray-600 mb-8">
          Daily thoughts on AI, technology, and building in public
        </p>
        <div className="text-center">
          <Link 
            href="/blog"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors inline-block"
          >
            Read the Blog
          </Link>
        </div>
      </section>

      {/* Quick Bio */}
      <section className="py-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 mb-6">
            I&apos;m passionate about artificial intelligence, machine learning, and building innovative solutions.
            Currently working on AI research and developing tools that make complex technologies more accessible.
          </p>
          <Link 
            href="/about"
            className="text-blue-600 hover:underline text-lg"
          >
            Learn more about me →
          </Link>
        </div>
      </section>
    </div>
  );
}
