import React, { useState, useRef, useEffect } from 'react';
import './CSS/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                {question}
                <FontAwesomeIcon icon={faChevronDown} className={`arrow ${isOpen ? 'open' : ''}`} />
            </button>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

const VideoSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                videoRef.current.pause();
            } else {
                videoRef.current.play().catch(error => {
                    console.log("Autoplay was prevented. Please interact with the document to play the video.");
                });
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return (
        <section className="video-section">
            <h2>Our Mission</h2>
            <div className="video-container">
                <video
                    ref={videoRef}
                    width="100%"
                    height="auto"
                    autoPlay
                    loop
                    playsInline
                    muted
                >
                    <source src={require('../assets/video2.mp4')} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};


const About = () => {
    const faqItems = [
        {
            question: "What services do we offer?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "How can you get involved?",
            answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            question: "What is our mission?",
            answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
        },
        {
            question: "Where do we operate?",
            answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
    ];

    return (
        <div className="about-container">
            <h1>About Us</h1>
            <section className="about-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.</p>
                <p>Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu.</p>
            </section>
            <VideoSection />
            <section className="faq">
                <h2>Frequently Asked Questions</h2>
                {faqItems.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </section>
        </div>
    );
};

export default About;
