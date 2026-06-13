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
        <section className="w-full min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 mb-24 pt-12">
          <div className="w-full md:w-3/5 text-left flex flex-col justify-center items-start">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-white tracking-tight">
              Hey, I'm <span className="text-indigo-500">Zaybe</span>
            </h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-emerald-400 tracking-wide">
              Full-Stack Software Engineer
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-slate-200 leading-relaxed max-w-2xl font-normal">
              I craft highly performant, accessible, and visually striking digital experiences that bridge elegant user interfaces with robust backend architectures. Specializing in the <strong>React & Python</strong> ecosystem, I build systems engineered for seamless functionality, clean logic, and exceptional database design. From scalable web frameworks to automation engines, I focus on turning complex software metrics into fluid, production-ready systems.
            </p>

            <div className="flex gap-5">
              <a
                href="#projects"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:scale-[1.02]"
              >
                View Systems
              </a>
              <a
                href="#contact"
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-[1.02]"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center">
            <div className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl shadow-indigo-500/10 transition-transform duration-300 hover:scale-[1.01]">
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