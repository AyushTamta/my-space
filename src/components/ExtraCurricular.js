import React from 'react';
import Slider from 'react-slick';
import './ExtraCurricular.css'; 

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import art images from art1.jpeg to art8.jpeg
import art1 from './art/art1.jpeg';
import art2 from './art/art2.jpeg';
import art3 from './art/art3.jpeg';
import art4 from './art/art4.jpeg';
import art5 from './art/art5.jpeg';
import art6 from './art/art6.jpeg';
import art7 from './art/art7.jpeg';
import art8 from './art/art8.jpeg';

// Import photo images from p1.jpeg to p8.jpeg
import p1 from './photo/p1.jpeg';
import p2 from './photo/p2.jpeg';
import p3 from './photo/p3.jpeg';
import p4 from './photo/p4.jpeg';
import p5 from './photo/p5.jpeg';
import p6 from './photo/p6.jpeg';
import p7 from './photo/p7.jpeg';
import p8 from './photo/p8.jpeg';

function ExtraCurricular() {
    // Define arrays of images with source paths and alt attributes
    const artImages = [
        { src: art1, alt: 'Art Image 1' },
        { src: art2, alt: 'Art Image 2' },
        { src: art3, alt: 'Art Image 3' },
        { src: art4, alt: 'Art Image 4' },
        { src: art5, alt: 'Art Image 5' },
        { src: art6, alt: 'Art Image 6' },
        { src: art7, alt: 'Art Image 7' },
        { src: art8, alt: 'Art Image 8' },
    ];

    const photoImages = [
        { src: p1, alt: 'Photo Image 1' },
        { src: p2, alt: 'Photo Image 2' },
        { src: p3, alt: 'Photo Image 3' },
        { src: p4, alt: 'Photo Image 4' },
        { src: p5, alt: 'Photo Image 5' },
        { src: p6, alt: 'Photo Image 6' },
        { src: p7, alt: 'Photo Image 7' },
        { src: p8, alt: 'Photo Image 8' },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section id="extra-curricular" className="extra-curricular">
            <h2>Extra Curricular & Hobbies</h2>

            <div className="carousel-section-container">
                <div className="carousel-section">
                    <h3>Art Gallery</h3>
                    <Slider {...sliderSettings}>
                        {artImages.map((image, index) => (
                            <div key={index} className="carousel-item">
                                <img src={image.src} alt={image.alt} className="carousel-image" />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="carousel-section">
                    <h3>Photography Gallery</h3>
                    <Slider {...sliderSettings}>
                        {photoImages.map((image, index) => (
                            <div key={index} className="carousel-item">
                                <img src={image.src} alt={image.alt} className="carousel-image" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default ExtraCurricular;
