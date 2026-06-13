import React, { useEffect, useState, useRef } from 'react';
import Grainient from './components/background.jsx'; 

function App() {
  // 1. React State Management
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formStatus, setFormStatus] = useState("");

  // 2. References for Scroll Observers
  const skillsRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // A. Re-initialize Feather Icons
    if (window.feather) {
      window.feather.replace();
    }

    // B. FETCH GITHUB PROJECTS (Using your exact username: ZAYBE001)
    fetch('https://api.github.com/users/ZAYBE001/starred?per_page=6')
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repositories");
        return res.json();
      })
      .then((data) => {
        const formattedProjects = data.map(repo => ({
          id: repo.id,
          title: repo.name.replace(/-/g, ' '),
          description: repo.description || "A high-quality software project built with precision.",
          language: repo.language || "Full-Stack",
          link: repo.html_url,
          // Using your script's exact dynamic GitHub OpenGraph image generator! 🖼️
          image: `https://opengraph.githubassets.com/1/ZAYBE001/${repo.name}`
        }));
        setProjects(formattedProjects);
        setLoading(false);
      })
      .catch((err) => {
        console.error("GitHub Fetch Error:", err);
        setLoading(false);
      });

    // C. SCROLL REVEAL (Intersection Observer logic from script.js)
    const observerOptions = { threshold: 0.15 };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Adds your slide up animation toggles
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-12");
          
          // Special handle for the skills header look
          if (entry.target.id === "skills") {
            const heading = document.getElementById("skills-heading");
            const cards = entry.target.querySelectorAll(".reveal-on-scroll");
            if (heading) heading.classList.add("reveal-text");
            cards.forEach(card => card.classList.add("reveal-card"));
          }
        }
      });
    }, observerOptions);

    // Track all sections for animations
    document.querySelectorAll("section").forEach((sec) => {
      sec.classList.add("transform", "transition", "duration-1000", "opacity-0", "translate-y-12");
      revealObserver.observe(sec);
    });

    return () => revealObserver.disconnect();
  }, []);

  // 3. REACT 3D TILT EFFECT INTERCEPTOR (Your mousemove math from script.js)
  const handleMouseMove = (e, cardId) => {
    const card = document.getElementById(`card-${cardId}`);
    if (!card) return;

    const rect = card.getBoundingClientRect();
    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Apply 3D rotation dynamically
    card.style.transform = `rotateX(${-y / 15}deg) rotateY(${x / 15}deg)`;
  };

  const handleMouseLeave = (cardId) => {
    const card = document.getElementById(`card-${cardId}`);
    if (card) card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  // 4. REACT FORM SUBMISSION HANDLER (Web3Forms Ingestion)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      if (response.status === 200) {
        setFormStatus("Message Sent! 🎉");
        e.target.reset();
      } else {
        setFormStatus("Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("Error occurred ❌");
    } finally {
      setTimeout(() => {
        setFormStatus("");
        if (submitBtn) submitBtn.disabled = false;
      }, 3000);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      
      {/* Background Layer */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0 overflow-hidden pointer-events-none" style={{ width: '100vw', height: '100vh' }}>
        <Grainient
          color1="#0c090c" color2="#7e63e8" color3="#0d55ca"
          timeSpeed={0.65} colorBalance={0} warpStrength={1}
          warpFrequency={5} warpSpeed={2} warpAmplitude={50}
          blendAngle={0} blendSoftness={0.1} rotationAmount={500}
          noiseScale={2} grainAmount={0.1} grainScale={2}
          grainAnimated={false} contrast={1.5} gamma={1}
          saturation={1} centerX={0} centerY={0} zoom={0.9}
        />
      </div>

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <section ref={heroRef} className="w-full min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 mb-24 pt-12">
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
              <a href="#projects" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:scale-[1.02]">
                View Systems
              </a>
              <a href="#contact" className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-[1.02]">
                Contact Me
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl shadow-indigo-500/10 transition-transform duration-300 hover:scale-[1.01]">
              <img src="src/assets/me.jpeg" alt="Zaybe - Developer portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="mb-24" id="skills">
          <div className="mb-12 flex justify-center">
            <h1 className="text-3xl font-bold text-center" id="skills-heading">My <span className="text-indigo-500">Skills</span></h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="skill-card reveal-on-scroll p-8">
              <i data-feather="code" className="text-indigo-500"></i>
              <h2>Frontend</h2>
              <p>HTML, CSS, React, Tailwind, JavaScript</p>
            </div>
            <div className="skill-card reveal-on-scroll p-8">
              <i data-feather="server" className="text-indigo-500"></i>
              <h2>Backend</h2>
              <p>Node.js, Flask, Django, PostgreSQL</p>
            </div>
            <div className="skill-card reveal-on-scroll p-8">
              <i data-feather="database" className="text-indigo-500"></i>
              <h2>Database</h2>
              <p>MongoDB, PostgreSQL, MySQL</p>
            </div>
            <div className="skill-card reveal-on-scroll p-8">
              <i data-feather="cloud" className="text-indigo-500"></i>
              <h2>DevOps</h2>
              <p>Ubuntu, Docker, Git, CI/CD</p>
            </div>
          </div>
        </section>

        {/* Projects Section (Now with active 3D Tilt + GitHub OpenGraph cards) */}
        <section className="mb-24" id="projects">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured <span className="text-indigo-500">Projects</span></h2>
          
          {loading ? (
            <div className="text-center py-12 text-slate-400 animate-pulse text-xl">Loading components from systems registry...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  id={`card-${project.id}`}
                  className="project-card group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden shadow-xl transition-all duration-150 ease-out flex flex-col justify-between h-full"
                  style={{ perspective: "1000px" }}
                  onMouseMove={(e) => handleMouseMove(e, project.id)}
                  onMouseLeave={() => handleMouseLeave(project.id)}
                >
                  <div className="project-image overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="project-content p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="uppercase tracking-wider text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                        {project.language}
                      </span>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
                        View Code &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-24">
          {/* Section header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Get In <span className="text-indigo-500">Touch</span>
          </h2>

          {/* Contact form container */}
          <div
            id="contact-form-container"
            className="max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-md overflow-hidden p-8"
          >
            <form onSubmit={handleFormSubmit} id="contact-form" className="space-y-6">
              <input type="hidden" name="access_key" value="0c3740bd-842d-4afc-a6ce-b07d2565ff98" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-2 bg-slate-900/90 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 bg-slate-900/90 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full px-4 py-2 bg-slate-900/90 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 bg-slate-900/90 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/20"
              >
                {formStatus || "Send Message"}
              </button>
            </form>
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default App;