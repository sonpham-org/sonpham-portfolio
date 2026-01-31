import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects - Son Pham',
  description: 'Portfolio of AI projects, tools, and experiments',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "ARC Creator",
      description: "Interactive tool for creating and solving Abstract Reasoning Corpus (ARC) challenges. Build, test, and share visual reasoning puzzles with an intuitive grid-based interface.",
      url: "https://arc.sonpham.net",
      tags: ["Next.js", "TypeScript", "React", "AI", "Puzzles"],
      isExternal: true,
    },
    {
      title: "Wealth of Agents",
      description: "Multi-agent simulation framework exploring economic behaviors, decision-making, and emergent patterns. Simulates complex agent-based economic systems.",
      url: "https://agents.sonpham.net",
      tags: ["Python", "Simulation", "Economics", "AI", "Visualization"],
      isExternal: true,
    },
    {
      title: "Cancer Prediction System",
      description: "Machine learning system for cancer prediction using advanced imaging and feature analysis. Production-ready ML pipeline with automated training.",
      url: "/projects/cancer-prediction",
      tags: ["Python", "ML", "Healthcare", "Docker", "BigQuery"],
      isExternal: false,
    },
    {
      title: "ARC-AGI Solver",
      description: "Multi-agent system for solving Abstract and Reasoning Corpus challenges using LangGraph and advanced reasoning techniques.",
      url: "/projects/arc-solver",
      tags: ["Python", "AI", "LangGraph", "Problem Solving"],
      isExternal: false,
    },
    {
      title: "Tiny Recursive Models",
      description: "Research on compact recursive neural architectures for efficient deep learning. Exploring model compression and recursive patterns.",
      url: "/projects/tiny-recursive",
      tags: ["Python", "Deep Learning", "Research", "PyTorch"],
      isExternal: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-gray-600">
          A collection of AI tools, research projects, and experiments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            tags={project.tags}
            isExternal={project.isExternal}
          />
        ))}
      </div>

      <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">More Projects Coming Soon</h2>
        <p className="text-gray-600">
          I&apos;m constantly building and experimenting. Follow along on{' '}
          <a 
            href="https://github.com/sonpham-org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          {' '}to see what I&apos;m working on.
        </p>
      </div>
    </div>
  );
}
