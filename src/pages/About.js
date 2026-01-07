// // src/pages/About.js
// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <div className="about-container animate-fade-in">
      
//       {/* --- HERO SECTION --- */}
//       <section className="about-hero">
//         <h1 className="about-title">More Than A Calculator.</h1>
//         <p className="about-subtitle">
//           Decide.AI wasn't built to tell you what to do. <br />
//           It was built to show you <strong>who you are</strong>.
//         </p>
//       </section>

//       {/* --- PHILOSOPHY CARDS (3D Hover Effects) --- */}
//       <section className="philosophy-grid">
//         <div className="card-3d philosophy-card">
//           <div className="card-icon">🪞</div>
//           <h3>The Mirror Principle</h3>
//           <p>
//             We don't use AI to guess your life. We use math to reflect your own 
//             priorities back to you, free from emotional noise.
//           </p>
//         </div>

//         <div className="card-3d philosophy-card">
//           <div className="card-icon">⚖️</div>
//           <h3>Weighted Logic</h3>
//           <p>
//             Not all pros and cons are equal. Our algorithm weighs every factor 
//             based on how much <em>you</em> care about it.
//           </p>
//         </div>

//         <div className="card-3d philosophy-card">
//           <div className="card-icon">🛡️</div>
//           <h3>Privacy First</h3>
//           <p>
//             Your data stays in your browser. We don't store your decisions 
//             because your life choices are yours alone.
//           </p>
//         </div>
//       </section>

//       {/* --- THE STORY (Timeline Look) --- */}
//       <section className="story-section">
//         <h2 className="section-header">The Journey</h2>
//         <div className="timeline">
//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-content">
//               <h4>The Problem</h4>
//               <p>People make bad decisions because they rely on "gut feeling" when they need logic.</p>
//             </div>
//           </div>
//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-content">
//               <h4>The Idea</h4>
//               <p>What if a simple app could quantify "feelings" into a score?</p>
//             </div>
//           </div>
//           <div className="timeline-item">
//             <div className="timeline-dot"></div>
//             <div className="timeline-content">
//               <h4>The Result</h4>
//               <p>Decide.AI: A modern tool for the modern, overwhelmed thinker.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- DEVELOPER PROFILE --- */}
//       <section className="developer-section">
//         <div className="dev-card-3d">
//           <div className="dev-image-placeholder">👨‍💻</div>
//           <div className="dev-info">
//             <h3>Built by Rucha Ahire</h3>
//             <p className="dev-role">Full - MERN Stack Developer</p>
//             <p className="dev-bio">
//               Passionate about building "smart" web applications that solve real-world problems. 
//               Specializing in React, Logic-based UIs, and Modern Design.
//             </p>
//             <div className="dev-socials">
//               <span>GitHub</span> • <span>LinkedIn</span> • <span>Portfolio</span>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default About;



// src/pages/About.js
import React from 'react';
import './About.css';
// 1. IMPORT YOUR IMAGE HERE
// Make sure your file is named 'profile.jpg' and is in 'src/assets/'
import profilePic from '../assets/profile.jpeg'; 
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';


const About = () => {
  return (
    <div className="about-container animate-fade-in">
      
      {/* --- HERO SECTION --- */}
      <section className="about-hero">
        <h1 className="about-title">More Than A Calculator.</h1>
        <p className="about-subtitle">
          Decide.AI wasn't built to tell you what to do. <br />
          It was built to show you <strong>who you are</strong>.
        </p>
      </section>

      {/* --- PHILOSOPHY CARDS --- */}
      <section className="philosophy-grid">
        <div className="card-3d philosophy-card">
          <div className="card-icon">🪞</div>
          <h3>The Mirror Principle</h3>
          <p>
            We don't use AI to guess your life. We use math to reflect your own 
            priorities back to you, free from emotional noise.
          </p>
        </div>

        <div className="card-3d philosophy-card">
          <div className="card-icon">⚖️</div>
          <h3>Weighted Logic</h3>
          <p>
            Not all pros and cons are equal. Our algorithm weighs every factor 
            based on how much <em>you</em> care about it.
          </p>
        </div>

        <div className="card-3d philosophy-card">
          <div className="card-icon">🛡️</div>
          <h3>Privacy First</h3>
          <p>
            Your data stays in your browser. We don't store your decisions 
            because your life choices are yours alone.
          </p>
        </div>
      </section>

      {/* --- THE STORY --- */}
      <section className="story-section">
        <h2 className="section-header">The Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>The Problem</h4>
              <p>People make bad decisions because they rely on "gut feeling" when they need logic.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>The Idea</h4>
              <p>What if a simple app could quantify "feelings" into a score?</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>The Result</h4>
              <p>Decide.AI: A modern tool for the modern, overwhelmed thinker.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DEVELOPER PROFILE (UPDATED) --- */}
    {/* --- DEVELOPER PROFILE --- */}
      <section className="developer-section">
        <div className="dev-card-3d">
          
          <div className="dev-image-wrapper">
             <img src={profilePic} alt="Rucha Ahire" className="dev-image" />
          </div>

          <div className="dev-info">
            <h3>Built by Rucha Ahire</h3>
            <p className="dev-role">Full - MERN Stack Developer</p>
            <p className="dev-bio">
              Passionate about building "smart" web applications that solve real-world problems. 
              Specializing in React, Logic-based UIs, and Modern Design.
            </p>
            
            {/* 2. REPLACED TEXT WITH ICONS */}
            <div className="dev-socials">
              <a 
                href="https://github.com/rucha-code-nodes" 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/rucha-ahire09" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              
              <a 
                href="https://rucha-s-portfolio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Portfolio"
              >
                <FaGlobe />
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;