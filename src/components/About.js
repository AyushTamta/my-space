import React, { useRef } from 'react';
import './About.css'; // Import your CSS file

// Import the profile photo
import profilePhoto from './photo.jpg';

function About() {
    // Create a reference to the About section
    const aboutRef = useRef(null);

    // Function to handle mouse movement over the About section
    const handleMouseMove = (e) => {
        console.log('Mouse moved'); // Debug: Log when mouse moves
        const aboutElement = aboutRef.current;

        if (aboutElement) {
            // Create a new sparkle element
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');

            // Calculate the sparkle position
            const x = e.clientX - aboutElement.getBoundingClientRect().left;
            const y = e.clientY - aboutElement.getBoundingClientRect().top;

            // Set the sparkle position
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;

            // Debug: Log sparkle position and element
            console.log('Sparkle position:', { x, y });
            console.log('Sparkle element:', sparkle);

            // Add the sparkle to the About section
            aboutElement.appendChild(sparkle);

            // Remove the sparkle after a short duration
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
            onMouseMove={handleMouseMove} // Attach mouse movement event handler
        >
            <div className="moon"></div> {/* Moon element outside of profile-photo-container */}

            <div className="about-container">
                {/* Profile photo */}
                <div className="profile-photo-container">
                    <img src={profilePhoto} alt="Your Name" className="profile-photo" />
                </div>

                {/* About text */}
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
