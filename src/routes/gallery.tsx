import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/components/cafe/content';
import { PageIntro, GallerySection, VisitSection } from '@/components/cafe/sections';
export const Route = createFileRoute('/gallery')({
  head: () =>
    pageHead(
      'Gallery — Our Celestial Space & Atmosphere',
      'Step inside The Vista Cafe & Vibes Desserts. Explore our glowing moon reception, starry ceiling lounge, arcade claw machine, neon art, and handcrafted treats.'
    ),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="A LITTLE VISUAL ESCAPE"
        title="Moments worth savouring."
        description="Step inside our cosmic sanctuary. Explore the illuminated moon reception, cozy starry ceiling lounge, arcade claw machine, vibrant neon art, and handcrafted menu favorites."
      />
      <GallerySection full />
      <VisitSection />
    </>
  );
}

