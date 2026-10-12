import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/components/cafe/content";
import { VistaHero } from "@/components/cafe/vista-hero";
import {
  ValuePropsStrip,
  SignatureCoffeesSection,
  StorySection,
  ExperienceBanner,
  TestimonialsSection,
  NewsletterSection,
  VisitSection,
  GallerySection,
} from "@/components/cafe/sections";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      'The Vista Cafe — Your Little Escape with a View',
      'Fresh coffee, delicious food and a cozy space with a view. Come for the taste, stay for the vibe. The Vista Cafe on Kot Kapura–Moga Road.'
    ),
  component: Index,
});

function Index() {
  return (
    <div className="home-scroll-container">
      {/* 1. Fullscreen Luxury Hero */}
      <VistaHero />

      {/* 2. Scrollable Sections */}
      <div id="explore" className="home-sections-flow">
        {/* Value Proposition Strip (4 Badges) */}
        <ValuePropsStrip />

        {/* Our Signature Coffees Grid */}
        <SignatureCoffeesSection />

        {/* Our Story with Cursive Watermark */}
        <StorySection />

        {/* Dark Atmosphere Experience Banner */}
        <ExperienceBanner />

        {/* Space, Décor & Vibes Gallery */}
        <GallerySection />

        {/* Kind Words Customer Testimonials */}
        <TestimonialsSection />

        {/* Stay In The Loop Offers & Updates */}
        <NewsletterSection />

        {/* Kot Kapura Location & Directions */}
        <VisitSection />
      </div>
    </div>
  );
}
