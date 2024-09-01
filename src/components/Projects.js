import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import project1Image from './astro.png';
import project2Image from './astro2.png';
import project3Image from './astro3.png';
import project4Image from './astro4.png';

function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const [positions, setPositions] = useState([]);
    const containerRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: 'Uni-Dialect.AI',
            description: 'An Artificial Intelligence powered web-app that tells you details of your invoice, not in just one language, but in multiple.',
            link: 'https://unilingo.streamlit.app',
            image: project1Image,
        },
        {
            id: 2,
            title: 'GIF IT UP !!',
            description: 'A simple GIF posting app that is made using ReactJS which allows users to upload any GIF with custom texts on it.',
            link: 'https://csb-phhgg3.netlify.app',
            image: project2Image,
        },
        {
            id: 3,
            title: 'Cow-boy Shooting',
            description: 'Get ready to sock-up for ultimate cowbow fight, a simple scoring game built in Javascript ',
            link: 'https://cowboy-shooting.netlify.app/',
            image: project3Image,
        },
        {
            id: 4,
            title: 'Tic-Tac-Toe, You vs World',
            description: 'A simple TIC-TAC-TOE game with 2-Player and VS Computer Modes.',
            link: 'https://tic-tac-toe-you-vs-world.netlify.app',
            image: project4Image,
        },
    ];

    const tileWidth = 250; // Width of project tile
    const tileHeight = 300; // Height of project tile
    const padding = 50; // Padding to ensure tiles are not too close to the edges
    const maxAttempts = 100; // Maximum attempts to find a non-overlapping position

    const isOverlapping = (newPosition, existingPositions) => {
        return existingPositions.some(pos => {
            return Math.hypot(pos.x - newPosition.x, pos.y - newPosition.y) < (tileWidth * 0.75);
        });
    };

    useEffect(() => {
        const calculateNonOverlappingPositions = () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const randomPositions = [];
            
            for (let i = 0; i < projects.length; i++) {
                let positionFound = false;
                let attempts = 0;

                while (!positionFound && attempts < maxAttempts) {
                    const x = Math.random() * (viewportWidth - tileWidth - 2 * padding) + padding;
                    const y = Math.random() * (viewportHeight - tileHeight - 2 * padding) + padding;
                    const newPosition = { x, y };

                    if (!isOverlapping(newPosition, randomPositions)) {
                        randomPositions.push(newPosition);
                        positionFound = true;
                    }

                    attempts++;
                }

                if (!positionFound) {
                    // Fallback to a default position if no non-overlapping position is found
                    randomPositions.push({ x: padding, y: padding });
                }
            }

            setPositions(randomPositions);
            
            // Adjust container height based on the positions
            if (containerRef.current) {
                const maxY = Math.max(...randomPositions.map(pos => pos.y + tileHeight));
                containerRef.current.style.height = `${Math.min(maxY, viewportHeight)}px`;
            }
        };

        calculateNonOverlappingPositions();
        window.addEventListener('resize', calculateNonOverlappingPositions);

        return () => window.removeEventListener('resize', calculateNonOverlappingPositions);
    }, []);

    useEffect(() => {
        if (hoveredIndex !== null) {
            setIsPaused(true);
        } else {
            setIsPaused(false);
        }
    }, [hoveredIndex]);

    return (
        <section id="projects" className="projects">
            <h2>Projects </h2>
            <h1>hover on astronauts to explore</h1>
            <div className={`projects-container ${isPaused ? 'paused' : 'rotate'}`} ref={containerRef}>
                {projects.map((project, index) => {
                    const { x, y } = positions[index] || { x: 0, y: 0 };
                    return (
                        <div
                            key={index}
                            className={`project-tile ${hoveredIndex === index ? 'hovered' : ''}`}
                            style={hoveredIndex === index ? 
                                { transform: `translate(-50%, -50%) scale(2)`, left: '50%', top: '50%' } : 
                                { position: 'absolute', left: `${x}px`, top: `${y}px` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-details">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                    Click-to-Explore
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;
