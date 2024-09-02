import React, { useRef } from 'react';
import './About.css'; // Ensure the path is correct

// Import the profile photos
import profilePhoto1 from './photo6.jpg';
import profilePhoto2 from './photo5.jpg';

function About() {
    const aboutRef = useRef(null);

    const handleMouseMove = (e) => {
        const aboutElement = aboutRef.current;

        if (aboutElement) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');

            const x = e.clientX - aboutElement.getBoundingClientRect().left;
            const y = e.clientY - aboutElement.getBoundingClientRect().top;

            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;

            aboutElement.appendChild(sparkle);

            setTimeout(() => {
                if (aboutElement.contains(sparkle)) {
                    aboutElement.removeChild(sparkle);
                }
            }, 600);
        }
    };

    return (
        <section
            ref={aboutRef}
            id="about"
            className="about"
            onMouseMove={handleMouseMove}
        >
            <div className="moon"></div> {/* Moon element */}

            <div className="about-container">
                <div className="profile-photo-container">
                    <div className="photo-wrapper">
                        <img src={profilePhoto1} alt="" className="profile-photo front" />
                        <img src={profilePhoto2} alt="" className="profile-photo back" />
                    </div>
                </div>

                <div className="about-text">
                    <h2>About Me</h2>
                    <h3>Inquisitive</h3>
                    <p>
                        Organized and self-motivated software engineer graduate with 2+ years combined internship and professional experience.
                        <br />
                        I love creating websites and helping organizations address business challenges to meet their needs. My expertise lies within front-end web apps, and the main languages in my tech stack are JavaScript, React, and of course HTML/CSS. I’m a lifelong learner and welcome new technologies in this tech-world with open arms.
                        (currently taking a course on building AI techs and applications with Python!)
                        <br />
                        Reliable and responsible team player.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
