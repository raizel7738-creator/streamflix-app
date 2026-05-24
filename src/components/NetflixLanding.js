import React, { useState } from 'react';
import SignInModal from './SignInModal';
import FAQItem from './FAQItem';
import Row from './Row';
import requests from '../requests';
import '../styles/landing.css';

const NetflixLanding = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [showSignIn, setShowSignIn] = useState(false);

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setShowSignIn(true);
    } else {
      alert('Please enter your email address');
    }
  };

  const faqs = [
    { question: "What is Netflix?", answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more..." },
    { question: "How much does Netflix cost?", answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee..." },
    { question: "Where can I watch?", answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com..." },
    { question: "How do I cancel?", answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks..." },
    { question: "What can I watch on Netflix?", answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." },
    { question: "Is Netflix good for kids?", answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space..." }
  ];

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="header-content">
          <div className="logo"><h1>NETFLIX</h1></div>
          <div className="header-actions">
            <select className="language-select"><option value="en">English</option></select>
            <button className="sign-in-btn" onClick={() => setShowSignIn(true)}>Sign In</button>
          </div>
        </div>
      </header>
      <section className="hero-landing">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Unlimited movies, TV shows, and more</h1>
          <h2 className="hero-subtitle">Starts at ₹149. Cancel at any time.</h2>
          <h3 className="hero-cta-text">Ready to watch? Enter your email to create or restart your membership.</h3>
          <form className="email-signup" onSubmit={handleGetStarted}>
            <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="email-input"/>
            <button className="get-started-btn" type="submit">Get Started ›</button>
          </form>
        </div>
      </section>

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />

      <section className="features">
        <h2 className="features-title">More reasons to join</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Enjoy on your TV</h3>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            <div className="feature-icon-container">
              <div className="tv-screen">📺</div>
            </div>
          </div>
          <div className="feature-card">
            <h3>Download your shows to watch offline</h3>
            <p>Save your favorites easily and always have something to watch.</p>
            <div className="feature-icon-container">
              <div className="phone-screen">📱</div>
            </div>
          </div>
          <div className="feature-card">
            <h3>Watch everywhere</h3>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            <div className="feature-icon-container">
              <div className="devices-screen">💻📱</div>
            </div>
          </div>
          <div className="feature-card">
            <h3>Create profiles for kids</h3>
            <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            <div className="feature-icon-container">
              <div className="kids-profiles">👦👧</div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} />)}
        </div>
      </section>
      <footer className="landing-footer">
        <div className="footer-content">
          <p>Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a></p>
          <div className="footer-links">
            <div className="link-column">
              <a href="#">FAQ</a>
              <a href="#">Investor Relations</a>
              <a href="#">Privacy</a>
              <a href="#">Speed Test</a>
            </div>
            <div className="link-column">
              <a href="#">Help Centre</a>
              <a href="#">Jobs</a>
              <a href="#">Cookie Preferences</a>
              <a href="#">Legal Notices</a>
            </div>
            <div className="link-column">
              <a href="#">Account</a>
              <a href="#">Ways to Watch</a>
              <a href="#">Corporate Information</a>
              <a href="#">Only on Netflix</a>
            </div>
            <div className="link-column">
              <a href="#">Media Centre</a>
              <a href="#">Terms of Use</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <select className="language-select"><option value="en">English</option></select>
          <p className="country">Netflix India</p>
        </div>
      </footer>
      {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} onLogin={onLogin} initialEmail={email} />}
    </div>
  );
};

export default NetflixLanding;
