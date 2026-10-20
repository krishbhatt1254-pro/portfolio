import {
  ArrowUpRight,
  Compass,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MoveUpRight,
  Sparkles,
  X,
} from 'lucide-react';
import { useState } from 'react';

const logoPath = '/images/IMG_20261018_205405_840.jpg';
const registrationLink = 'https://forms.gle/JKADwsDvATmNARnXA';
const email = 'velvetlabs4@gmail.com';
const whatsappLink = 'https://wa.me/919712917179';

const services = [
  {
    number: '01',
    title: 'Digital identities',
    description: 'Websites and brand systems that make your next chapter impossible to ignore.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Growth experiences',
    description: 'Clear, considered digital journeys that turn attention into meaningful action.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Built for momentum',
    description: 'Flexible foundations that keep your brand moving long after launch day.',
    icon: MoveUpRight,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Velvet Labs home">
          <img src={logoPath} alt="Velvet Labs logo" />
          <span>Velvet Labs</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#studio" onClick={closeMenu}>Studio</a>
          <a href="#services" onClick={closeMenu}>What we do</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-register" href={registrationLink} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Register <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" id="studio">
          <div className="hero-copy">
            <h1>Make your<br /><em>mark.</em></h1>
            <p className="hero-intro">Velvet Labs helps ambitious people and brands turn good ideas into memorable digital experiences.</p>
            <a className="button button-dark" href={registrationLink} target="_blank" rel="noreferrer">
              Start a project <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbital orbital-one" />
            <div className="orbital orbital-two" />
            <div className="orbital orbital-three" />
            <div className="glass-shape"><div className="glass-core">VL</div></div>
            <span className="art-label art-label-top">01 / create</span>
            <span className="art-label art-label-bottom">websites · brands · growth</span>
            <span className="art-star">✦</span>
          </div>
        </section>

        <section className="statement-section" aria-label="Our approach">
          <p className="eyebrow">The Velvet approach</p>
          <h2>Thoughtful by design.<br /><span>Built to be felt.</span></h2>
          <p className="statement-text">We bring clarity to the complex and character to the ordinary. Every detail has a purpose, every interaction earns its place.</p>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">How we can help</p>
            <p className="section-note">Small studio energy.<br />Big studio thinking.</p>
          </div>
          <div className="service-list">
            {services.map(({ number, title, description, icon: Icon }) => (
              <article className="service-card" key={number}>
                <span className="service-number">{number}</span>
                <Icon className="service-icon" size={25} strokeWidth={1.5} />
                <div><h3>{title}</h3><p>{description}</p></div>
                <ArrowUpRight className="service-arrow" size={21} />
              </article>
            ))}
          </div>
        </section>

        <section className="invite-section">
          <div><p className="eyebrow">Have something in mind?</p><h2>Let’s make it<br /><em>matter.</em></h2></div>
          <a className="circle-link" href={registrationLink} target="_blank" rel="noreferrer" aria-label="Register for a project">
            <span>Register<br />with us</span><ArrowUpRight size={22} />
          </a>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-top">
          <div className="footer-brand"><img src={logoPath} alt="Velvet Labs logo" /><p>We build digital presence<br />with a little more feeling.</p></div>
          <div className="contact-block">
            <p className="eyebrow">Start a conversation</p>
            <a className="contact-link" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} target="_blank" rel="noreferrer"><Mail size={18} /> {email}</a>
            <a className="contact-link" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18} /> +91 97129 17179</a>
            <a className="contact-link" href="https://www.instagram.com/velvet_labs.ltd/" target="_blank" rel="noreferrer"><Instagram size={18} /> @velvet_labs.ltd</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Velvet Labs Ltd.</span>
          <div className="social-links">
            <a href="https://www.instagram.com/velvet_labs.ltd/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
