import { useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import {
  ArrowRight,
  ArrowUpRight,
  Coffee,
  Heart,
  Leaf,
  MapPin,
  Phone,
  Sparkles,
  Star,
  CheckCircle2,
  Plus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import {
  cafe,
  images,
  valueProps,
  signatureCoffees,
  testimonials,
  sampleMenu,
  categories,
  galleryCategories,
  galleryList,
} from './content';
import { CoffeeBeanIcon, WhatsAppIcon, InstagramIcon } from './site-shell';

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`section-header-wrap ${centered ? 'text-center' : 'text-left'} ${dark ? 'text-dark' : ''}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}

// 1. Feature / Value Proposition Badges Strip
export function ValuePropsStrip() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'bean':
        return <CoffeeBeanIcon className="w-6 h-6" />;
      case 'leaf':
        return <Leaf className="w-6 h-6 stroke-[1.6]" />;
      case 'cup':
        return <Coffee className="w-6 h-6 stroke-[1.6]" />;
      case 'heart':
      default:
        return <Heart className="w-6 h-6 stroke-[1.6]" />;
    }
  };

  return (
    <section className="value-props-section" aria-label="Why choose The Vista Cafe">
      <div className="site-container">
        <div className="value-props-grid">
          {valueProps.map((item) => (
            <div key={item.title} className="value-prop-item">
              <div className="value-prop-icon">{getIcon(item.icon)}</div>
              <h3 className="value-prop-title">{item.title}</h3>
              <p className="value-prop-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. Our Signature Coffees Section
export function SignatureCoffeesSection() {
  return (
    <section className="signature-coffees-section section-space">
      <div className="site-container">
        <div className="signature-heading-row">
          <div className="signature-titles">
            <span className="section-eyebrow">OUR SIGNATURE</span>
            <h2 className="section-title">Coffees</h2>
          </div>
          <Link to="/menu" className="view-menu-link">
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 ml-1 inline-block transition-transform" />
          </Link>
        </div>

        <div className="signature-grid">
          {signatureCoffees.map((coffee) => (
            <article key={coffee.id} className="coffee-card">
              <div className="coffee-image-wrap">
                <img
                  src={coffee.image}
                  alt={`${coffee.name} at The Vista Cafe`}
                  loading="lazy"
                  className="coffee-img"
                  width={400}
                  height={400}
                />
                {coffee.tag && <span className="coffee-tag">{coffee.tag}</span>}
              </div>
              <div className="coffee-info">
                <h3 className="coffee-name">{coffee.name}</h3>
                <p className="coffee-desc">{coffee.desc}</p>
                <div className="coffee-price-row">
                  <span className="coffee-price">{coffee.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// 3. Our Story Section with Watermark
export function StorySection({ full = false }: { full?: boolean }) {
  return (
    <section className="story-section section-space">
      <div className="site-container">
        <div className="story-layout">
          {/* Left image with delicate cursive script overlay */}
          <div className="story-image-container">
            <div className="story-img-frame">
              <img
                src={images.vibesMoonReception}
                alt="Illuminated moon reception wall and starry interior at The Vista Cafe"
                loading="lazy"
                className="story-main-img"
                width={800}
                height={1000}
              />
              <span className="story-script-watermark">More than just coffee</span>
            </div>
          </div>

          {/* Right story copy */}
          <div className="story-content">
            <span className="section-eyebrow">OUR STORY</span>
            <h2 className="story-heading">A Passion for Great Coffee</h2>
            <div className="story-paragraphs">
              <p>
                The Vista Cafe was founded with a simple idea — to create a welcoming space where
                exceptional coffee, flavorful bites, and meaningful moments effortlessly come
                together.
              </p>
              <p>
                Nestled on the Kot Kapura–Moga Road, our space blends atmospheric celestial décor,
                cozy starry ceilings, and warm Punjabi hospitality. Because we believe a café is far
                more than a quick stop — it is a daily connection and an immersive comfort pause.
              </p>
            </div>
            <div className="story-action">
              <Button asChild className="btn-caramel">
                <Link to={full ? '/contact' : '/our-story'}>
                  {full ? 'COME SAY HELLO' : 'OUR JOURNEY'} <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. Atmospheric Experience Banner
export function ExperienceBanner() {
  return (
    <section className="experience-banner" aria-label="The Vista Cafe Experience">
      <div className="experience-bg-wrap">
        <img
          src={images.vibesAmbienceStarry}
          alt="Café seating ambience featuring starry ceiling, warm lighting, and lounge tables"
          className="experience-bg-img"
          loading="lazy"
        />
        <div className="experience-overlay" />
      </div>

      <div className="site-container experience-inner">
        <div className="experience-copy">
          <span className="experience-eyebrow">THE VISTA CAFE EXPERIENCE</span>
          <h2 className="experience-title">A Cozy Corner for Every Moment</h2>
          <p className="experience-desc">
            Whether you're stopping by for a morning espresso, enjoying a leisurely afternoon
            with friends, or settling in for an evening coffee break, The Vista Cafe is your cozy
            escape from the everyday hustle.
          </p>
          <div className="experience-actions">
            <Button asChild variant="outline" className="btn-experience-visit">
              <a href={cafe.directions} target="_blank" rel="noopener noreferrer">
                VISIT OUR CAFE <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Vertical graphic badge on right */}
        <div className="experience-badge-wrap">
          <div className="experience-badge">
            <span className="badge-line">GOOD COFFEE</span>
            <span className="badge-line">GOOD FOOD</span>
            <span className="badge-line">GOOD VIBES</span>
            <div className="badge-icon">
              <CoffeeBeanIcon className="w-7 h-7 text-caramel" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. Testimonials / Kind Words Section
export function TestimonialsSection() {
  return (
    <section className="testimonials-section section-space">
      <div className="site-container">
        <SectionHeader
          eyebrow="WHAT OUR CUSTOMERS SAY"
          title="Kind Words"
          description="Real thoughts from the coffee lovers and regular visitors who make The Vista Cafe special."
        />

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <div className="testimonial-avatar-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="testimonial-avatar"
                  width={80}
                  height={80}
                  loading="lazy"
                />
              </div>
              <p className="testimonial-quote">{item.quote}</p>
              <div className="testimonial-footer">
                <span className="testimonial-author">— {item.name}</span>
                <div className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-caramel text-caramel" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6. Newsletter / Offers Section
export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="newsletter-section" aria-label="Newsletter sign up">
      <div className="newsletter-bg-wrap">
        <img
          src={images.brewNewsletter}
          alt="Roasted coffee beans and artisanal cup"
          className="newsletter-bg-img"
          loading="lazy"
        />
        <div className="newsletter-overlay" />
      </div>

      <div className="site-container newsletter-content">
        <span className="newsletter-eyebrow">STAY IN THE LOOP</span>
        <h2 className="newsletter-title">Get Special Offers & Updates</h2>
        <p className="newsletter-desc">
          Be the first to know about new seasonal drinks, cafe events, and exclusive weekend
          specials.
        </p>

        {submitted ? (
          <div className="newsletter-success">
            <CheckCircle2 className="w-5 h-5 text-caramel inline mr-2" />
            <span>Thank you for joining our coffee circle! We'll keep you posted.</span>
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Your email address"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address for offers"
            />
            <button type="submit" className="newsletter-btn">
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// 7. Full or Category Menu Section (Used on Menu page & expandable)
export function MenuSection({ full = false }: { full?: boolean }) {
  const [category, setCategory] = useState<string>(categories[0]);
  const visible = sampleMenu.filter(
    (item) => category === categories[0] || item.category === category
  );

  return (
    <section className={`menu-section section-space ${full ? 'full-menu' : ''}`}>
      <div className="site-container">
        <SectionHeader
          eyebrow="HANDCRAFTED TASTE"
          title="Discover the Full Collection"
          description="Crafted with quality ingredients, fresh brews, and everyday passion in Kot Kapura."
        />

        <div className="category-tabs" role="group" aria-label="Menu categories">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={cat === category ? 'categoryActive' : 'category'}
              aria-pressed={cat === category}
              onClick={() => setCategory(cat)}
            >
              {cat === categories[0] && <Coffee className="w-3.5 h-3.5 mr-1" />}
              {cat}
            </Button>
          ))}
        </div>

        <p className="content-note">
          Sample menu inspiration · Items and pricing are illustrative for The Vista Cafe. Call us
          for daily offerings and custom requests.
        </p>

        <div className="menu-grid" aria-live="polite">
          {visible.map((item) => (
            <article className="menu-card" key={item.name}>
              <div className="menu-image">
                <img
                  src={item.image}
                  alt={`${item.name} at The Vista Cafe`}
                  width={600}
                  height={600}
                  loading="lazy"
                />
                <span className="sample-badge">SPECIAL</span>
              </div>
              <div className="menu-card-copy">
                <div className="menu-card-top">
                  <span>{item.category.split(' & ')[0]}</span>
                  {item.price && <span className="menu-item-price">{item.price}</span>}
                </div>
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>

        {full && (
          <div className="menu-confirm">
            <Coffee className="w-8 h-8 text-caramel mx-auto" />
            <h3>What’s brewing today?</h3>
            <p>For today's freshest roast, seasonal pastries, and specials, give us a quick call.</p>
            <Button size="lg" className="btn-caramel" asChild>
              <a href={cafe.call}>
                <Phone className="w-4 h-4 mr-2" />
                Call The Vista Cafe
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

// 8. Visit & Directions Section
export function VisitSection() {
  return (
    <section className="visit-section section-space">
      <div className="site-container visit-grid">
        <div className="visit-copy">
          <span className="section-eyebrow">YOUR NEXT ESCAPE</span>
          <h2 className="visit-heading">
            We’ll Save You <br />A Cozy Spot.
          </h2>
          <p className="visit-intro">
            Come spend an afternoon or grab a morning boost at The Vista Cafe on Kot Kapura–Moga
            Road. We can’t wait to welcome you.
          </p>
          <div className="visit-actions">
            <Button size="lg" className="btn-caramel" asChild>
              <a href={cafe.directions} target="_blank" rel="noopener noreferrer">
                Get Directions <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="btn-outline-dark" asChild>
              <a href={cafe.call}>
                <Phone className="w-4 h-4 mr-2" /> Call Us
              </a>
            </Button>
          </div>
        </div>

        <div className="visit-details-box">
          <h3 className="visit-cafe-name">The Vista Cafe</h3>
          <div className="detail-row">
            <MapPin className="w-5 h-5 text-caramel shrink-0" />
            <div>
              <span className="detail-label">LOCATION</span>
              <p>{cafe.address}</p>
            </div>
          </div>
          <div className="detail-row">
            <Phone className="w-5 h-5 text-caramel shrink-0" />
            <div>
              <span className="detail-label">CALL US</span>
              <a href={cafe.call} className="detail-link">
                {cafe.phone}
              </a>
            </div>
          </div>
          <div className="detail-row-badges">
            <div className="badge-pill">
              <span className="pill-strong">₹200–₹400</span>
              <span className="pill-sub">per person</span>
            </div>
            <div className="badge-pill">
              <Coffee className="w-4 h-4 text-caramel inline mr-1.5" />
              <span>Dine-in · Takeaway</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 9. Standard Page Intro
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro site-container">
      <span className="section-eyebrow">{eyebrow}</span>
      <h1 className="page-intro-title">{title}</h1>
      <p className="page-intro-desc">{description}</p>
      <div className="intro-flourish">
        <CoffeeBeanIcon className="w-6 h-6 text-caramel" />
      </div>
    </section>
  );
}

// 10. Gallery Section
export function GallerySection({ full = false }: { full?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selected, setSelected] = useState<(typeof galleryList)[number] | null>(null);

  const filteredItems = galleryList.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const displayItems = full || activeCategory !== 'All' ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section className="gallery-section section-space">
      <div className="site-container">
        <SectionHeader
          eyebrow="OUR SPACE & VIBES"
          title="Step Inside The Vista"
          description="Explore our celestial moon reception, cozy starry ceiling lounge, arcade claw machine, neon artwork, and delectable bites."
        />

        {/* Gallery category tabs */}
        <div className="gallery-category-tabs" role="group" aria-label="Gallery filters">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid-custom">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="gallery-grid-item"
              onClick={() => setSelected(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelected(item);
              }}
              aria-label={`Enlarge ${item.title}`}
            >
              <img
                src={item.image}
                alt={`${item.title} at The Vista Cafe`}
                loading="lazy"
                className="gallery-grid-img"
                style={{ objectPosition: item.objectPosition || 'center center' }}
              />
              <span className="gallery-badge-tag">{item.badge}</span>
              <div className="gallery-item-overlay">
                <div className="gallery-text-wrap">
                  <span className="gallery-item-cat">{item.category}</span>
                  <span className="gallery-title-text">{item.title}</span>
                </div>
                <span className="gallery-plus-icon">
                  <Plus className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {!full && (
          <div className="text-center mt-12">
            <Button asChild className="btn-caramel">
              <Link to="/gallery">
                VIEW COMPLETE PHOTO GALLERY <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
          </div>
        )}

        <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
          <DialogContent className="gallery-dialog-content">
            <div className="gallery-dialog-header">
              <span className="gallery-dialog-badge">{selected?.badge}</span>
              <DialogTitle className="text-xl font-serif text-white">{selected?.title}</DialogTitle>
              <DialogDescription className="text-xs text-stone-300 mt-1">
                {selected?.desc}
              </DialogDescription>
            </div>
            {selected && (
              <div className="gallery-dialog-img-frame">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="gallery-dialog-img"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
