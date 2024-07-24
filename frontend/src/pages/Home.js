// Home.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faUsers, faHandHoldingHeart, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './CSS/Home.css';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const bannerImages = [
        img1, img2, img3
    ];

    const statistics = [
        { icon: faUsers, number: '10,000+', label: 'Lives Impacted', description: 'Individuals directly benefited from our programs' },
        { icon: faHandHoldingHeart, number: '$1M+', label: 'Funds Raised', description: 'Generous donations supporting our cause' },
        { icon: faGlobe, number: '50+', label: 'Countries Reached', description: 'Global impact across continents' }
    ];

    const featuredProjects = [
        {
            title: 'Clean Water Initiative',
            image: img2,
            description: 'Bringing clean and safe drinking water to rural communities, improving health and quality of life for thousands.'
        },
        {
            title: 'Education for All',
            image: img3,
            description: 'Providing access to quality education for underprivileged children, empowering them to build a brighter future.'
        },
        {
            title: 'Sustainable Agriculture',
            image: img4,
            description: 'Supporting local farmers with sustainable practices, ensuring food security and economic stability in rural areas.'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    };

    return (
        <div className="home-container">
            <section className="banner">
                <div className="banner-image" style={{ backgroundImage: `url(${bannerImages[currentSlide]})` }}>
                    <button className="banner-btn left" onClick={prevSlide}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button className="banner-btn right" onClick={nextSlide}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </section>

            <section className="slogan">
                <div className="slogan-content">
                    <h1>Empowering Communities, Changing Lives</h1>
                    <p>Together, we can create a world where everyone has the opportunity to thrive. Join us in our mission to make a lasting impact on communities around the globe.</p>
                </div>
                <div className="slogan-image">
                    <img src={img1} alt="Empowering communities" />
                </div>
            </section>

            <section className="statistics">
                {statistics.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <FontAwesomeIcon icon={stat.icon} className="stat-icon" />
                        <h2>{stat.number}</h2>
                        <h3>{stat.label}</h3>
                        <p>{stat.description}</p>
                    </div>
                ))}
            </section>

            <section className="mission">
                <h2>Our Mission</h2>
                <p>At NGO Website, we are dedicated to creating positive change in the world. Our mission is to empower communities, protect the environment, and provide support to those in need. We believe that by working together, we can build a more just, sustainable, and compassionate world for all.</p>
                <p>Through our various programs and initiatives, we strive to address the most pressing challenges facing our global community. From providing access to education and healthcare to promoting sustainable development and human rights, we are committed to making a difference in the lives of individuals and communities around the world.</p>
                <Link to="/about" className="learn-more-button">Learn More About Us</Link>
            </section>

            <section className="featured-projects">
                <h2>Featured Projects</h2>
                <div className="project-grid">
                    {featuredProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta">
                <h2>Make a Difference Today</h2>
                <p>Your support can help us continue our vital work and create lasting change in communities around the world. Whether through volunteering, donations, or spreading awareness, every action counts.</p>
                <Link to="/donate"><button className="cta-button">Donate Now</button></Link>
            </section>
        </div>
    );
};

export default HomePage;