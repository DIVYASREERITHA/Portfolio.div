import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Camera, Code, Palette } from 'lucide-react';

function App() {
  // Replace these with your actual information
  const portfolio = {
    name: "Divyasreeritha",
    title: "Full Stack Developer",
    bio: "Passionate developer with expertise in React, Node.js, and cloud technologies. I love building beautiful and functional web applications.",
    // Replace with your actual image URL
    image: "pro.jpg",
    skills: ["React", "TypeScript", "Node.js", "TailwindCSS", "PostgreSQL", "AWS","Power Bi"],
    projects: [
      {
        title: "E-commerce Platform",
        description: "A full-featured online shopping platform with real-time inventory management.",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "Node.js", "PostgreSQL"]
      },
      {
        title: "Portfolio Website",
        description: "A responsive portfolio website built with React and TailwindCSS.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "TailwindCSS"]
      },
      {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "Firebase", "Material-UI"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{portfolio.name}</h1>
              <h2 className="text-xl md:text-2xl mb-6">{portfolio.title}</h2>
              <p className="text-lg opacity-90 mb-8">{portfolio.bio}</p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 hover:text-blue-300 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="p-2 hover:text-blue-300 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-2 hover:text-blue-300 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <img
                src={portfolio.image}
                alt={portfolio.name}
                className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {portfolio.skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-lg font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail className="mr-2" size={20} />
            Send message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;