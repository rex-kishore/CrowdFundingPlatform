import React from 'react';
import './LandingPage.css';
import { useNavigate } from "react-router-dom";





const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signin");
  };

  const sections = [
  

    {
      title: 'Arts & Comics',
      content:
        'At FioraFund, we believe in the power of imagination. Our platform empowers artists and storytellers to bring their creative visions to life. Whether you\'re crafting captivating comics or exploring the depths of visual arts, FioraFund helps you connect with backers who appreciate your unique perspective. Let your creativity thrive as you turn ideas into masterpieces.',
      img: 'https://via.placeholder.com/500',
    },
    {
      title: 'Illustration & Design',
      content:
        'Design shapes the world around us. At FioraFund, we support illustrators and designers in transforming concepts into stunning realities. From digital art to product design, our platform fosters innovation by connecting creators with those who share their vision. Showcase your talent, inspire change, and make your mark with FioraFund.',
      img: 'https://via.placeholder.com/500',
    },
    {
      title: 'Film & Music',
      content:
        'Lights, camera, action – and a beat to move the soul. FioraFund is the bridge between filmmakers, musicians, and audiences eager to experience compelling stories and unforgettable sounds. Whether you\'re producing a short film, an indie album, or a music video, our community is here to help you hit the right notes and capture the perfect scenes. Let your art resonate worldwide.',
      img: 'https://via.placeholder.com/500',
    },
    {
      title: 'Food & Craft',
      content:
        'Crafting memorable experiences, one flavor and one creation at a time. FioraFund supports culinary artists and artisans who are passionate about their craft. Whether it\'s a new food venture or handmade creations, our platform connects you with people eager to taste and treasure your work. Share your passion, grow your brand, and bring your ideas to life.',
      img: 'https://via.placeholder.com/500',
    },
    {
      title: 'Games & Design & Tech',
      content:
        'Innovation meets imagination. FioraFund is the playground for game developers, tech enthusiasts, and designers who dare to dream big. From groundbreaking video games to cutting-edge tech products, our platform fuels the future by connecting visionaries with backers who believe in their potential. Ready to level up? FioraFund is your launchpad.',
      img: 'https://via.placeholder.com/500',
    },
    {
      title: 'Publishing',
      content:
        'Every story deserves to be heard. At FioraFund, we empower writers, poets, and publishers to share their voices with the world. Whether you\'re launching a novel, a poetry collection, or a digital publication, our community supports storytellers who inspire, educate, and entertain. Turn pages, turn heads – with FioraFund.',
      img: 'https://via.placeholder.com/500',
    },
    ];
    
  return (
    <div>
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to FioraFund</h1>
        <p>Empowering ideas through secure and user-friendly crowdfunding.</p>
        <button className="cta-button"  onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </section>


      <section className="about-us-section">
        <div className="about-us-container">
          <div className="about-us-image">
          <img src="https://via.placeholder.com/500x300.png?text=About+FioraFund" alt="About FioraFund" />

          </div>
          <div className="about-us-text">
            <h2>About FioraFund</h2>
            <p>
              FioraFund is a secure and user-friendly crowdfunding platform that empowers creators to bring their ideas to life. Our mission is to bridge the gap between visionaries and supporters, enabling impactful projects to thrive.
            </p>
            <p>
              Whether you’re an entrepreneur, artist, or innovator, FioraFund provides the tools you need to launch, manage, and succeed in your crowdfunding journey.
            </p>
          </div>
        </div>
      </section>
      <div className="about-sections">
      {sections.map((section, index) => (
        <div
          className={`about-section ${index % 2 === 0 ? 'reverse' : ''}`}
          key={section.title}
        >
          <div className="about-content">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
          <div className="about-image">
            <img src={section.img} alt={section.title} />
          </div>
        </div>
      ))}
      </div>
      
      <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h4>FioraFund</h4>
        <p>Empowering ideas through secure and user-friendly crowdfunding.</p>
      </div>
      <div className="col-md-4">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5>Follow Us</h5>
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 FioraFund. All Rights Reserved.</p>
    </div>
  </div>
</footer>

      

      
        </div>
  );
};

export default LandingPage;
