import React from "react";
import CVAPedImg from '../assets/images/CVAPed.png';
import GreenSphereImg from '../assets/images/GreenSphere.png';
import Mission13Img from '../assets/images/Mission13.jpg';
import MEWImg from '../assets/images/MEW.png';
import WBNHSImg from '../assets/images/WBNHS.png';
import ParishConnectImg from '../assets/images/ParishConnect.jpg';
import '../assets/styles/Project.scss';

function Project() {

    const handleDemoClick = (url: string) => {
        try {
            window.open(url, '_blank', 'noopener,noreferrer')?.focus();
        } catch (err) {
            // fallback: set location
            window.location.href = url;
        }
    }

    return(
    <div className="projects-container" id="projects">
        <h1>Selected Projects</h1>
        <div className="projects-grid">
            <div className="project project-card">
                <div className="project-image"><img src={CVAPedImg} className="zoom" alt="CVAPed" /></div>
                <div className="project-body">
                    <h2>CVAPed: AI-Assisted Rehabilitation System</h2>
                    <p>Developed and implemented an AI-assisted rehabilitation system for stroke and pediatric patients to support physical therapy and patient monitoring. Combined Python, machine learning, computer vision, ESP32, and web technologies in partnership with the Taguig Physical Medicine and Rehabilitation Unit.</p>
                    <div className="project-actions">
                        <button onClick={() => handleDemoClick('https://cva-ped.vercel.app/')} className="btn">Live Demo</button>
                    </div>
                </div>
            </div>

            <div className="project project-card">
                <div className="project-image"><img src={GreenSphereImg} className="zoom" alt="GreenSphere" /></div>
                <div className="project-body">
                    <h2>GreenSphere: Renewable Energy Simulation Platform</h2>
                    <p>Developed a 3D web-based platform to explore renewable energy solutions and analyze environmental and economic impact. Built with React, React Three Fiber (R3F), Three.js, Python, and data analytics to visualize infrastructure models and estimate carbon reductions.</p>
                    <div className="project-actions">
                        <button onClick={() => handleDemoClick('https://green-sphere-for-deployment-frontend.vercel.app/')} className="btn">Live Demo</button>
                    </div>
                </div>
            </div>
            
            <div className="project project-card">
                <div className="project-image"><img src={Mission13Img} className="zoom" alt="Mission13" /></div>
                <div className="project-body">
                    <h2>Mission13: AI-Powered Eco Challenge Platform</h2>
                    <p>Developed an AI-powered platform that gamifies climate action through personalized daily sustainability challenges and an interactive chatbot experience. Leveraged React, Node.js, Python, and AI technologies to promote eco-friendly habits, track user progress, and encourage long-term environmental awareness.</p>
                    <div className="project-actions">
                        <button onClick={() => handleDemoClick('https://github.com/itsJLCG/Mission13')} className="btn">Source</button>
                    </div>
                </div>
            </div>
            
            <div className="project project-card">
                <div className="project-image"><img src={MEWImg} className="zoom" alt="MEW" /></div>
                <div className="project-body">
                    <h2>MEW: Milu Edge Wear (E-Commerce Platform)</h2>
                    <p>Developed a full-stack e-commerce platform that provides a seamless online shopping experience with product browsing, secure transactions, and order management. Built using the MERN stack (MongoDB, Express.js, React, Node.js), including user authentication, shopping cart functionality, and an admin dashboard for inventory and customer management.</p>
                    <div className="project-actions">
                        <button onClick={() => handleDemoClick('https://github.com/itsJLCG/MEW')} className="btn">Source</button>
                    </div>
                </div>
            </div>
            
            <div className="project project-card">
                <div className="project-image"><img src={WBNHSImg} className="zoom" alt="WBNHS" /></div>
                <div className="project-body">
                    <h2>WBNHS: Western Bicutan National High School System</h2>
                    <p>Developed a web-based information system for Western Bicutan National High School to support school-related processes and improve access to academic and administrative information. The system streamlines communication, organizes school data, and enhances efficiency for students, teachers, and administrators.</p>
                    <div className="project-actions">
                        <button onClick={() => handleDemoClick('https://wbnhs.vercel.app/')} className="btn">Live Demo</button>
                    </div>
                </div>
            </div>
            
            <div className="project project-card">
                <div className="project-image"><img src={ParishConnectImg} className="zoom" alt="ParishConnect" /></div>
                <div className="project-body">
                    <h2>ParishConnect: Smart Parish Management System</h2>
                    <p>Developed a web-based parish management system designed to digitize and centralize church operations, including announcements, mass schedules, and parish services. The platform improves communication between parish administrators and members while streamlining requests and event coordination.</p>
                    <div className="project-actions">
                        <button onClick={() => handleDemoClick('https://github.com/itsJLCG/ParishConnect')} className="btn">Source</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;