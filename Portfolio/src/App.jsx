import React, { useEffect } from 'react';
import Grainient from './components/background.jsx'; 

function App() {
  // Safe execution handler for Feather icons
  useEffect(() => {
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    // We add a clear background backdrop layer here so the workspace isn't empty
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      
      {/* 1. FIXED BACKGROUND OVERLAY WITH PROPER HEIGHT EXTENSIONS */}
      <div 
        className="fixed top-0 left-0 w-screen h-screen z-0 overflow-hidden pointer-events-none"
        style={{ width: '100vw', height: '100vh' }}
      >
        <Grainient
          color1="#0c090c"
          color2="#7e63e8"
          color3="#0d55ca"
          timeSpeed={0.65}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.1}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      {/* 2. THE PORTFOLIO WORKSPACE CONTENT (z-10 brings it forward over the background) */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Two-Column Responsive Layout */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24 min-h-[80vh]">
          <div className="md:w-3/5 text-left">
            
            {/* Note: Removed 'opacity-0' to guarantee text visibility */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Hey, I'm <span className="text-indigo-500">Zaybe</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-emerald-400">
              Full-Stack Software Engineer
            </h2>

            <p className="text-base md:text-lg mb-8 text-slate-300 leading-relaxed max-w-2xl">
              I craft digital experiences that are fast, accessible, and visually appealing. 
                With a passion for functionality in web development, I turn ideas into reality.
            </p>

            <div className="flex gap-4">
              <a href="#projects" className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/20">
                View Systems
              </a>
              <a href="#contact" className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Picture Frame */}
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl shadow-indigo-500/10">
              <img src="src/assets/me.jpeg" alt="Zaybe - Developer portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24" id="skills">
          <div className="mb-12 flex justify-center">
            <h2 className="text-3xl font-bold text-center">
              My <span className="text-indigo-500">Skills</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="skill-card">
              <i data-feather="code" className="text-indigo-500"></i>
              <h3>Frontend</h3>
              <p>HTML, CSS, React, Tailwind, JavaScript</p>
            </div>
            <div className="skill-card">
              <i data-feather="server" className="text-indigo-500"></i>
              <h3>Backend</h3>
              <p>Node.js, Flask, Django, PostgreSQL</p>
            </div>
            <div className="skill-card">
              <i data-feather="database" className="text-indigo-500"></i>
              <h3>Database</h3>
              <p>MongoDB, PostgreSQL, MySQL</p>
            </div>
            <div className="skill-card">
              <i data-feather="cloud" className="text-indigo-500"></i>
              <h3>DevOps</h3>
              <p>Ubuntu, Docker, Git, CI/CD</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24" id="projects">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured <span className="text-indigo-500">Projects</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card">
              <div className="project-image">
                <img src="http://static.photos/technology/640x360/101" alt="Bus Booking App" />
              </div>
              <div className="project-content">
                <h3>Bus Booking Engine</h3>
                <p>A multi-tier platform featuring automated transit route allocations and real-time database lookups.</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Flask</span>
                  <span>PostgreSQL</span>
                </div>
                <a href="#" className="project-link">View System</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="http://static.photos/technology/640x360/102" alt="Task Management App" />
              </div>
              <div className="project-content">
                <h3>Task Management Hub</h3>
                <p>Productivity dashboard managing real-time task pipelines and team metrics.</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Tailwind</span>
                  <span>JavaScript</span>
                </div>
                <a href="#" className="project-link">View Project</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="http://static.photos/technology/640x360/103" alt="Health Dashboard" />
              </div>
              <div className="project-content">
                <h3>Data Visualization Dashboard</h3>
                <p>Advanced metrics interface reading pipeline inputs for secure full-stack reporting.</p>
                <div className="project-tags">
                  <span>Python</span>
                  <span>Flask</span>
                  <span>SQLAlchemy</span>
                </div>
                <a href="#" className="project-link">View Metrics</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-24" id="contact">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In <span className="text-indigo-500">Touch</span></h2>
          <div className="max-w-2xl mx-auto bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-md overflow-hidden p-8">
            <form action="https://api.web3forms.com/submit" method="POST" id="contact-form" className="space-y-6">
              <input type="hidden" name="access_key" value="0c3740bd-842d-4afc-a6ce-b07d2565ff98" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                  <input type="text" name="name" id="name" required className="w-full px-4 py-2 bg-slate-900/90 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input type="email" name="email" id="email" required className="w-full px-4 py-2 bg-slate-900/90 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">Subject</label>
                <input type="text" name="subject" id="subject" required className="w-full px-4 py-2 bg-slate-900/90 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                <textarea name="message" id="message" rows="4" required className="w-full px-4 py-2 bg-slate-900/90 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/20">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;