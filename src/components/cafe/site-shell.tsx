import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingBag,
  Instagram,
  Facebook,
  Twitter,
  ArrowUpRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cafe } from './content';

export function CoffeeBeanIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="12" cy="12" rx="8" ry="10" transform="rotate(30 12 12)" />
      <path d="M10 4.5 C 9 9, 15 15, 14 19.5" />
    </svg>
  );
}

export function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441 1.44-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="The Vista Cafe home">
      <span className="brand-mark">
        <CoffeeBeanIcon className="w-5 h-5" />
      </span>
      <span className="brand-text">
        <span className="brand-title">THE VISTA CAFE</span>
        <span className="brand-sub">{cafe.tagline}</span>
      </span>
    </Link>
  );
}

const nav = [
  { name: 'Home', to: '/' },
  { name: 'Menu', to: '/menu' },
  { name: 'Our Story', to: '/our-story' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Contact', to: '/contact' },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-container header-inner">
          <Brand />

          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`nav-link ${active ? 'active' : ''}`}
                >
                  {item.name}
                  {active && <span className="nav-active-bar" />}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="action-icon-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search cafe menu and info"
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              to="/menu"
              className="action-icon-btn cart-btn"
              aria-label="View menu bag"
              title="View menu items"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="cart-badge">0</span>
            </Link>

            <Button asChild size="sm" className="header-cta-btn">
              <a href={cafe.directions} target="_blank" rel="noopener noreferrer">
                Visit Us
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="mobile-toggle"
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {searchOpen && (
          <div className="header-search-bar site-container">
            <div className="search-input-wrap">
              <Search className="w-4 h-4 search-icon" />
              <input
                type="search"
                placeholder="Search coffee, drinks, bites in Kot Kapura..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button
                type="button"
                className="search-close"
                onClick={() => setSearchOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {searchQuery.trim().length > 0 && (
              <div className="search-quick-results">
                <span>Looking for "{searchQuery}"?</span>
                <Link to="/menu" onClick={() => setSearchOpen(false)}>
                  Explore in Menu <ArrowUpRight className="w-3.5 h-3.5 inline" />
                </Link>
              </div>
            )}
          </div>
        )}

        {open && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {nav.map((item) => (
              <Link
                to={item.to}
                key={item.to}
                onClick={() => setOpen(false)}
                className={pathname === item.to ? 'active' : ''}
              >
                {item.name}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            ))}
            <div className="mobile-nav-footer">
              <a href={cafe.call} className="mobile-call-link">
                <Phone className="w-4 h-4" /> {cafe.phone}
              </a>
              <a
                href={cafe.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-directions-link"
              >
                <MapPin className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="site-container footer-grid">
          {/* Brand info */}
          <div className="footer-col footer-col-brand">
            <Brand light />
            <p className="footer-tagline">
              Crafting exceptional coffee and unforgettable moments in the heart of Kot Kapura.
              Your everyday sanctuary for good brews, great food, and meaningful conversations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <nav className="footer-links" aria-label="Footer navigation">
              {nav.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Us */}
          <div className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <div className="footer-contact-list">
              <a href={cafe.call} className="footer-contact-item">
                <Phone className="w-4 h-4 text-caramel" />
                <span>{cafe.phone}</span>
              </a>
              <a
                href={cafe.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item footer-whatsapp-item"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {cafe.whatsappNumber}</span>
              </a>
              <a href={`mailto:${cafe.email}`} className="footer-contact-item">
                <Mail className="w-4 h-4 text-caramel" />
                <span>{cafe.email}</span>
              </a>
              <a
                href={cafe.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <MapPin className="w-4 h-4 shrink-0 text-caramel" />
                <span>{cafe.address}</span>
              </a>
            </div>
          </div>

          {/* Follow Us & Social CTAs */}
          <div className="footer-col">
            <h4 className="footer-title">Connect With Us</h4>
            {/* Instagram Prominent CTA Box */}
            <a
              href={cafe.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-insta-card"
              aria-label="Follow The Vista Cafe on Instagram"
            >
              <div className="footer-insta-icon-wrap">
                <InstagramIcon className="w-5 h-5 text-white" />
              </div>
              <div className="footer-insta-info">
                <span className="footer-insta-tag">INSTAGRAM</span>
                <span className="footer-insta-handle">{cafe.instagramHandle}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 footer-insta-arrow" />
            </a>

            {/* WhatsApp Direct CTA */}
            <a
              href={cafe.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-wa-card"
              aria-label="Chat on WhatsApp"
            >
              <div className="footer-wa-icon-wrap">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <div className="footer-wa-info">
                <span className="footer-wa-tag">DIRECT CHAT</span>
                <span className="footer-wa-handle">WhatsApp Support</span>
              </div>
              <ArrowUpRight className="w-4 h-4 footer-wa-arrow" />
            </a>

            <div className="footer-hours">
              <span className="hours-label">Opening Hours</span>
              <p>{cafe.hours}</p>
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="site-container footer-bottom-bar">
          <span className="copyright-text">
            © {new Date().getFullYear()} The Vista Cafe. All rights reserved.
          </span>
          <span className="script-slogan">Good Coffee, Better Days.</span>
        </div>
      </footer>

      {/* Floating Action Dock (WhatsApp + Instagram + Call) */}
      <aside className="floating-actions-dock" aria-label="Quick contact shortcuts">
        {/* Floating WhatsApp */}
        <a
          href={cafe.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-action-btn floating-wa"
          aria-label="Chat with The Vista Cafe on WhatsApp"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6 text-white" />
          <span className="floating-tooltip">Chat on WhatsApp</span>
        </a>

        {/* Floating Instagram */}
        <a
          href={cafe.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-action-btn floating-insta"
          aria-label="Follow @thevistacafe on Instagram"
          title="Follow @thevistacafe on Instagram"
        >
          <InstagramIcon className="w-6 h-6 text-white" />
          <span className="floating-tooltip">@thevistacafe</span>
        </a>

        {/* Floating Call */}
        <a
          href={cafe.call}
          className="floating-action-btn floating-phone"
          aria-label="Call The Vista Cafe"
          title={`Call ${cafe.phone}`}
        >
          <Phone className="w-5 h-5 text-white" />
          <span className="floating-tooltip">Call Us</span>
        </a>
      </aside>
    </>
  );
}
