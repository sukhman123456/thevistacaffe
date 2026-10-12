import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Search, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { images, cafe } from './content';
import { WhatsAppIcon, InstagramIcon } from './site-shell';

export function SteamingCupLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`vista-steaming-logo ${className}`}
      aria-hidden="true"
    >
      {/* 3 Steam curves with live rising animation */}
      <path className="vista-logo-steam-path s1" d="M12 6.5 C 11.5 5, 13 4, 12.5 2.5" />
      <path className="vista-logo-steam-path s2" d="M16 6 C 15.5 4.5, 17 3.5, 16.5 2" />
      <path className="vista-logo-steam-path s3" d="M20 6.5 C 19.5 5, 21 4, 20.5 2.5" />
      {/* Cup body */}
      <path d="M7 11 h18 v7 a7.5 7.5 0 0 1 -7.5 7.5 h-3 A7.5 7.5 0 0 1 7 18 Z" />
      {/* Cup handle */}
      <path d="M25 13 h2 a3 3 0 0 1 0 6 h-2.5" />
      {/* Saucer */}
      <path d="M4 27.5 h24" strokeWidth="1.7" />
    </svg>
  );
}

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Menu', to: '/menu' },
  { name: 'About', to: '/our-story' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Contact', to: '/contact' },
] as const;

export function VistaHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive smooth mouse parallax for multi-plane depth
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animId: number;
    let targetX = 0;
    let targetY = 0;
    let currX = 0;
    let currY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalized between -1 and 1
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const loop = () => {
      // Lerp smoothing factor for silky inertia
      currX += (targetX - currX) * 0.045;
      currY += (targetY - currY) * 0.045;
      setParallax({
        x: Math.round(currX * 1000) / 1000,
        y: Math.round(currY * 1000) / 1000,
      });
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="vista-hero-viewport">
      {/* Background layer with parallax container + continuous cinematic drifting image */}
      <div
        className="vista-hero-bg-parallax"
        style={{
          transform: `translate3d(${parallax.x * -16}px, ${parallax.y * -12}px, 0)`,
        }}
      >
        <picture className="vista-hero-bg-picture">
          <source
            media="(max-width: 640px) and (orientation: portrait)"
            srcSet={images.vistaTerracePortrait}
          />
          <img
            src={images.vistaTerrace}
            alt="The Vista Cafe sunset terrace overlooking mountain lake with coffee and pastry"
            className="vista-hero-bg-img"
            fetchPriority="high"
            loading="eager"
          />
        </picture>
      </div>

      {/* Atmospheric lighting, warm sun glow & vignette overlays */}
      <div className="vista-hero-sun-glow" aria-hidden="true" />
      <div className="vista-hero-overlay-dark" />
      <div className="vista-hero-top-vignette" />
      <div className="vista-hero-bottom-vignette" />

      {/* Floating golden dust motes in sunset light */}
      <div className="vista-hero-particles" aria-hidden="true">
        <span className="vista-particle p1" />
        <span className="vista-particle p2" />
        <span className="vista-particle p3" />
        <span className="vista-particle p4" />
        <span className="vista-particle p5" />
        <span className="vista-particle p6" />
      </div>

      {/* Rising warm steam from the coffee cup on the balcony table */}
      <div className="vista-table-coffee-steam" aria-hidden="true">
        <span className="vista-steam-plume plume-1" />
        <span className="vista-steam-plume plume-2" />
        <span className="vista-steam-plume plume-3" />
      </div>

      {/* 2. Transparent Navigation Bar Positioned Over Hero */}
      <header className="vista-navbar" role="banner">
        <div className="vista-nav-container">
          {/* Left Brand Identity */}
          <Link to="/" className="vista-brand" aria-label="The Vista Cafe homepage">
            <span className="vista-brand-icon">
              <SteamingCupLogo className="w-8 h-8" />
            </span>
            <div className="vista-brand-text">
              <span className="vista-brand-title">THE VISTA CAFE</span>
              <span className="vista-brand-tagline">COFFEE • FOOD • GOOD VIBES</span>
            </div>
          </Link>

          {/* Right Navigation Items (Desktop) */}
          <nav className="vista-desktop-nav" aria-label="Main navigation">
            <ul className="vista-nav-list">
              {navLinks.map((item, idx) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`vista-nav-link ${idx === 0 ? 'vista-nav-active' : ''}`}
                  >
                    {item.name}
                    {idx === 0 && <span className="vista-nav-indicator" />}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Action Icons */}
            <div className="vista-nav-icons">
              <button
                type="button"
                className="vista-icon-btn"
                aria-label="Search cafe menu and drinks"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="w-4 h-4" />
              </button>

              <Link
                to="/menu"
                className="vista-icon-btn vista-cart-btn"
                aria-label="View menu cart"
                title="View menu bag"
              >
                <ShoppingBag className="w-4 h-4" />
              </Link>
            </div>
          </nav>

          {/* Mobile Right Controls: Icons + Hamburger */}
          <div className="vista-mobile-controls">
            <button
              type="button"
              className="vista-icon-btn"
              aria-label="Search"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="w-4 h-4" />
            </button>

            <Link to="/menu" className="vista-icon-btn" aria-label="Menu cart">
              <ShoppingBag className="w-4 h-4" />
            </Link>

            <button
              type="button"
              className="vista-mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar Overlay */}
        {searchOpen && (
          <div className="vista-search-dropdown">
            <div className="vista-search-inner">
              <Search className="w-4 h-4 vista-search-icon" />
              <input
                type="search"
                placeholder="Search coffee, drinks, fresh bites in Kot Kapura..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                aria-label="Search query"
              />
              <button
                type="button"
                className="vista-search-close"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {searchQuery.trim().length > 0 && (
              <div className="vista-search-quick">
                <span>Looking for "{searchQuery}"?</span>
                <Link to="/menu" onClick={() => setSearchOpen(false)}>
                  Find in Menu <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Mobile Flyout / Slide Menu */}
        {mobileMenuOpen && (
          <div className="vista-mobile-flyout" role="dialog" aria-modal="true">
            <div className="vista-mobile-flyout-inner">
              <ul className="vista-mobile-nav-list">
                {navLinks.map((item, idx) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`vista-mobile-nav-link ${idx === 0 ? 'active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                      <ArrowRight className="w-4 h-4 opacity-70" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="vista-mobile-footer-info">
                <p className="vista-mobile-hours">{cafe.hours}</p>
                <a href={cafe.call} className="vista-mobile-phone">
                  {cafe.phone}
                </a>
                <a
                  href={cafe.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vista-mobile-map-link"
                >
                  Kot Kapura–Moga Road • Get Directions →
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Content (Aligned Left, Vertically Centered with subtle multi-plane float) */}
      <main className="vista-hero-content-layer">
        <div className="vista-hero-container">
          <div
            className="vista-hero-text-block"
            style={{
              transform: `translate3d(${parallax.x * 6}px, ${parallax.y * 5}px, 0)`,
            }}
          >
            {/* Small uppercase tag */}
            <div className="vista-hero-welcome">
              <span className="vista-welcome-text">WELCOME TO</span>
              <span className="vista-welcome-line" aria-hidden="true" />
            </div>

            {/* Main Heading */}
            <h1 className="vista-hero-heading">The Vista Cafe</h1>

            {/* Elegant script subtitle */}
            <p className="vista-hero-script">Good Food. Better Days.</p>

            {/* Description */}
            <p className="vista-hero-description">
              Fresh coffee, delicious food and a cozy space with a view. Come for the taste, stay
              for the vibe.
            </p>

            {/* Primary button with animated luxury golden sheen sweep */}
            <div className="vista-hero-cta-wrap">
              <Link to="/menu" className="vista-hero-btn">
                <span className="vista-btn-sheen" aria-hidden="true" />
                <span>EXPLORE OUR MENU</span>
                <span className="vista-btn-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* 4. Minimal SCROLL DOWN Indicator at Bottom Center */}
      <a
        href="#explore"
        className="vista-scroll-indicator"
        aria-label="Scroll down to explore"
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById('explore');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
      >
        <div className="vista-mouse-icon">
          <span className="vista-mouse-wheel" />
        </div>
        <span className="vista-scroll-text">SCROLL DOWN</span>
        <span className="vista-scroll-line" />
      </a>
    </div>
  );
}
