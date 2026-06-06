import React from "react";
import Chip from '@mui/material/Chip';
import CodeIcon from '@mui/icons-material/Code';
import MemoryIcon from '@mui/icons-material/Memory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DevicesIcon from '@mui/icons-material/Devices';
import StorageIcon from '@mui/icons-material/Storage';
import '../assets/styles/Expertise.scss';

const stacks = {
    fullstack: [
        'React','React Native','Laravel','PHP','Python','JavaScript','HTML5','CSS3','MySQL','MongoDB','SQLite','REST APIs','Git'
    ],
    ai: [
        'Python','Machine Learning','OpenCV','Pandas','NumPy','Flask','AI APIs','Data Analysis'
    ],
    power: [
        'Power Apps','Power Automate','Power BI','SharePoint','Microsoft 365'
    ],
    iot: [
        'ESP32','Raspberry Pi','Arduino','Sensors','Python','Embedded Systems','IoT Development'
    ],
    db: [
        'MySQL','MongoDB','SQLite','SQL','Database Design'
    ]
}

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Core Competencies</h1>

                <div className="competency-grid">
                    <div className="competency card">
                        <div className="competency-head"><CodeIcon fontSize="large"/></div>
                        <h2>Full-Stack Development</h2>
                        <p>I build web applications from concept to deployment, developing both frontend and backend solutions. Experienced in creating e-commerce platforms, business systems, and database-driven applications using modern web technologies.</p>
                        <div className="chips">
                            {stacks.fullstack.map((s) => <Chip key={s} className='chip' label={s} />)}
                        </div>
                    </div>

                    <div className="competency card">
                        <div className="competency-head"><MemoryIcon fontSize="large"/></div>
                        <h2>AI & Intelligent Systems</h2>
                        <p>I develop AI-powered applications and data-driven solutions, including machine learning projects and intelligent systems. My experience includes integrating AI technologies into real-world applications such as healthcare and rehabilitation systems.</p>
                        <div className="chips">
                            {stacks.ai.map((s) => <Chip key={s} className='chip' label={s} />)}
                        </div>
                    </div>

                    <div className="competency card">
                        <div className="competency-head"><DashboardIcon fontSize="large"/></div>
                        <h2>Microsoft Power Platform</h2>
                        <p>I build business applications, automate workflows, and create dashboards that improve operational efficiency and support data-driven decision-making.</p>
                        <div className="chips">
                            {stacks.power.map((s) => <Chip key={s} className='chip' label={s} />)}
                        </div>
                    </div>

                    <div className="competency card">
                        <div className="competency-head"><DevicesIcon fontSize="large"/></div>
                        <h2>IoT & Embedded Systems</h2>
                        <p>I design and develop hardware-integrated solutions that connect sensors, devices, and software applications. Experienced in building IoT prototypes and smart systems using microcontrollers and single-board computers.</p>
                        <div className="chips">
                            {stacks.iot.map((s) => <Chip key={s} className='chip' label={s} />)}
                        </div>
                    </div>

                    <div className="competency card">
                        <div className="competency-head"><StorageIcon fontSize="large"/></div>
                        <h2>Database Management</h2>
                        <p>I design, manage, and optimize databases for web, mobile, and IoT applications, ensuring reliable data storage and efficient system performance.</p>
                        <div className="chips">
                            {stacks.db.map((s) => <Chip key={s} className='chip' label={s} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;