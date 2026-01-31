export const metadata = {
  title: 'About - Son Pham',
  description: 'Learn more about Son Pham - AI Engineer, Researcher & Builder',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold mb-8">About Me</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6">
          Hi! I&apos;m Son Pham, an AI Engineer and Researcher passionate about pushing the boundaries 
          of artificial intelligence and machine learning.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">What I Do</h2>
        <p className="text-gray-700 mb-4">
          I build AI systems and tools that solve complex problems. My work spans from developing 
          machine learning models for healthcare applications to creating interactive platforms 
          for abstract reasoning challenges.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Current Focus</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Abstract Reasoning Corpus (ARC) challenges and AI reasoning</li>
          <li>Multi-agent systems and simulation frameworks</li>
          <li>Deep learning model optimization and compression</li>
          <li>Healthcare AI and predictive modeling</li>
          <li>Building in public and sharing knowledge</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">Technologies I Work With</h2>
        <div className="flex flex-wrap gap-3 mb-6">
          {['Python', 'TypeScript', 'Next.js', 'React', 'PyTorch', 'TensorFlow', 
            'LangChain', 'Docker', 'Google Cloud', 'Railway'].map(tech => (
            <span 
              key={tech}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">Get In Touch</h2>
        <p className="text-gray-700 mb-4">
          I&apos;m always interested in collaborating on interesting projects or discussing new ideas.
          Feel free to reach out!
        </p>
        
        <div className="flex gap-4 mt-6">
          <a 
            href="https://github.com/sonpham-org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="mailto:contact@sonpham.net"
            className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
}
