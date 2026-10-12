import hero from '@/assets/cafe-hero.jpg';
import interior from '@/assets/cafe-interior.jpg';
import spread from '@/assets/cafe-menu.jpg';
import cappuccino from '@/assets/cappuccino.jpg';
import icedLatte from '@/assets/iced-latte.jpg';
import shake from '@/assets/chocolate-shake.jpg';
import sandwich from '@/assets/sandwich.jpg';
import cake from '@/assets/chocolate-cake.jpg';

import brewHero from '@/assets/brew-hero.jpg';
import brewStory from '@/assets/brew-story.jpg';
import brewExperience from '@/assets/brew-experience.jpg';
import brewNewsletter from '@/assets/brew-newsletter.jpg';
import drinkLatte from '@/assets/drink-latte.jpg';
import drinkCaramel from '@/assets/drink-caramel.jpg';
import drinkAmericano from '@/assets/drink-americano.jpg';
import drinkCappuccino from '@/assets/drink-cappuccino.jpg';
import drinkMocha from '@/assets/drink-mocha.jpg';
import avatarSarah from '@/assets/avatar-sarah.jpg';
import avatarJames from '@/assets/avatar-james.jpg';
import avatarEmily from '@/assets/avatar-emily.jpg';
import vistaTerrace from '@/assets/vista-terrace.jpg';
import vistaTerracePortrait from '@/assets/vista-terrace-portrait.jpg';
import vibesMoonReception from '@/assets/vibes-moon-reception.jpg';
import vibesAmbienceStarry from '@/assets/vibes-ambience-starry.jpg';
import vibesClawMachine from '@/assets/vibes-claw-machine.jpg';
import vibesAstronautNeon from '@/assets/vibes-astronaut-neon.jpg';
import vibesLoungeSeating from '@/assets/vibes-lounge-seating.jpg';

export const cafe = {
  name: 'The Vista Cafe',
  tagline: 'COFFEE · FOOD · GOOD VIBES',
  address: 'Kot Kapura–Moga Road, opposite West Point School, Kot Kapura, Punjab 151204',
  phone: '+91 88722 20333',
  call: 'tel:+918872220333',
  whatsapp: 'https://wa.me/918872220333?text=Hi%20The%20Vista%20Cafe%2C%20I%20would%20like%20to%20connect!',
  whatsappNumber: '+91 88722 20333',
  instagram: 'https://instagram.com/thevistacafe',
  instagramHandle: '@thevistacafe',
  email: 'hello@thevistacafe.com',
  hours: 'Mon – Sun: 9:00 AM – 10:30 PM',
  priceRange: '₹200–₹400 per person',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('The Vista Cafe, Kot Kapura–Moga Road, opposite West Point School, Kot Kapura, Punjab 151204, India'),
};

export const images = {
  hero,
  interior,
  spread,
  cappuccino,
  icedLatte,
  shake,
  sandwich,
  cake,
  brewHero,
  brewStory,
  brewExperience,
  brewNewsletter,
  drinkLatte,
  drinkCaramel,
  drinkAmericano,
  drinkCappuccino,
  drinkMocha,
  avatarSarah,
  avatarJames,
  avatarEmily,
  vistaTerrace,
  vistaTerracePortrait,
  vibesMoonReception,
  vibesAmbienceStarry,
  vibesClawMachine,
  vibesAstronautNeon,
  vibesLoungeSeating,
};

export const valueProps = [
  {
    title: 'PREMIUM BEANS',
    desc: "Sourced from the world's finest coffee regions.",
    icon: 'bean',
  },
  {
    title: 'FRESH INGREDIENTS',
    desc: 'Quality food, made from scratch daily.',
    icon: 'leaf',
  },
  {
    title: 'COZY ATMOSPHERE',
    desc: 'A perfect space to work, relax, and connect.',
    icon: 'cup',
  },
  {
    title: 'LOCAL & SUSTAINABLE',
    desc: 'Supporting farmers and a greener tomorrow.',
    icon: 'heart',
  },
];

export const signatureCoffees = [
  {
    id: 'latte',
    name: 'Caffè Latte',
    desc: 'Espresso with steamed milk and a velvety finish.',
    price: '₹180',
    image: drinkLatte,
    tag: 'Classic',
  },
  {
    id: 'caramel',
    name: 'Iced Caramel Macchiato',
    desc: 'Bold espresso with silky milk and caramel.',
    price: '₹220',
    image: drinkCaramel,
    tag: 'Chilled',
  },
  {
    id: 'americano',
    name: 'Americano',
    desc: 'Pure espresso, smooth and rich.',
    price: '₹160',
    image: drinkAmericano,
    tag: 'Bold',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    desc: 'Espresso, steamed milk, rich foam.',
    price: '₹180',
    image: drinkCappuccino,
    tag: 'Popular',
  },
  {
    id: 'mocha',
    name: 'Mocha',
    desc: 'Chocolate, espresso, steamed milk.',
    price: '₹210',
    image: drinkMocha,
    tag: 'Signature',
  },
];

export const categories = [
  'All favourites',
  'Coffee & Hot Beverages',
  'Cold Coffee & Refreshers',
  'Shakes & Special Drinks',
  'Quick Bites',
  'Desserts',
] as const;

// Sample content only. Replace these entries with the cafe's confirmed menu.
export const sampleMenu = [
  { name: 'Classic Cappuccino', category: categories[1], image: drinkCappuccino, price: '₹180', note: 'A little warmth in every cup.' },
  { name: 'Caffè Latte', category: categories[1], image: drinkLatte, price: '₹180', note: 'Silky smooth steamed milk with rich espresso.' },
  { name: 'Americano', category: categories[1], image: drinkAmericano, price: '₹160', note: 'Pure espresso, smooth, bold and rich.' },
  { name: 'Iced Caramel Macchiato', category: categories[2], image: drinkCaramel, price: '₹220', note: 'Layered espresso with caramel and cold milk.' },
  { name: 'Iced Latte', category: categories[2], image: icedLatte, price: '₹190', note: 'Your refreshing afternoon pause.' },
  { name: 'Decadent Mocha', category: categories[1], image: drinkMocha, price: '₹210', note: 'Rich chocolate, espresso & whipped cream.' },
  { name: 'Chocolate Shake', category: categories[3], image: shake, price: '₹180', note: 'Something thick, cold and a little indulgent.' },
  { name: 'Grilled Sandwich', category: categories[4], image: sandwich, price: '₹160', note: 'Crisp toastie with savoury fillings to brighten your break.' },
  { name: 'Chocolate Cake', category: categories[5], image: cake, price: '₹150', note: 'A decadent slice for a sweet little moment.' },
];

export const testimonials = [
  {
    name: 'Sarah L.',
    rating: 5,
    quote:
      '“The best coffee I’ve had in years! The atmosphere is warm, the staff is friendly, and the food is amazing.”',
    image: avatarSarah,
    role: 'Local Patron',
  },
  {
    name: 'James T.',
    rating: 5,
    quote:
      '“The Vista Cafe is my go-to spot for great coffee and a calm place to get work done. Highly recommend!”',
    image: avatarJames,
    role: 'Remote Creator',
  },
  {
    name: 'Emily R.',
    rating: 5,
    quote:
      '“Delicious coffee, fresh pastries, and such a cozy vibe. I love this place!”',
    image: avatarEmily,
    role: 'Coffee Lover',
  },
];

export const galleryCategories = ['All', 'Interior', 'Ambience', 'Décor', 'Food & Drinks'] as const;

export const galleryList = [
  {
    id: 'moon-wall',
    image: images.vibesMoonReception,
    title: 'Illuminated Moon Reception Wall',
    category: 'Interior',
    badge: 'Reception Area',
    desc: 'Custom-crafted glowing lunar wall feature with ambient lighting, starry ceiling, and modern ribbed reception desk.',
    objectPosition: 'center 22%',
  },
  {
    id: 'starry-ambience',
    image: images.vibesAmbienceStarry,
    title: 'Starry Ceiling Dining Lounge',
    category: 'Ambience',
    badge: 'Night Ambience',
    desc: 'Cozy seating beneath a twinkling fiber-optic starry ceiling, accented by warm globe chandeliers and natural stone textures.',
    objectPosition: 'center 35%',
  },
  {
    id: 'claw-machine',
    image: images.vibesClawMachine,
    title: 'The Vista Cafe Claw Machine',
    category: 'Interior',
    badge: 'Arcade & Fun',
    desc: 'Custom-branded cosmic claw machine stocked with colorful plush toys, accompanied by velvet armchair seating and marble tables.',
    objectPosition: 'center 12%',
  },
  {
    id: 'astronaut-neon',
    image: images.vibesAstronautNeon,
    title: 'Astronaut on Moon Neon Art',
    category: 'Décor',
    badge: 'Wall Art',
    desc: 'Striking illuminated neon artwork showcasing an astronaut lounging on a glowing orange crescent moon reaching for the stars.',
    objectPosition: 'center 30%',
  },
  {
    id: 'lounge-seating',
    image: images.vibesLoungeSeating,
    title: 'Vibes Desserts Dining Lounge',
    category: 'Interior',
    badge: 'Lounge Seating',
    desc: 'Warm vertical fluted wood panelling with glowing brand neon sign, plush terracotta banquette, and playful flower cushions.',
    objectPosition: 'center center',
  },
  {
    id: 'cafe-spread',
    image: images.spread,
    title: 'Gourmet Treats, Shakes & Coffee',
    category: 'Food & Drinks',
    badge: 'Artisanal Spread',
    desc: 'Freshly prepared toasted sandwiches, molten chocolate lava cake, iced beverages, and handcrafted coffee.',
    objectPosition: 'center center',
  },
  {
    id: 'caramel-coffee',
    image: images.drinkCaramel,
    title: 'Iced Caramel Macchiato',
    category: 'Food & Drinks',
    badge: 'Specialty Drink',
    desc: 'Chilled layers of velvety milk and dark espresso, finished with a golden caramel swirl.',
    objectPosition: 'center center',
  },
  {
    id: 'cappuccino-coffee',
    image: images.drinkCappuccino,
    title: 'Classic Cocoa Cappuccino',
    category: 'Food & Drinks',
    badge: 'Hot Coffee',
    desc: 'Steamed creamy milk foam dusted with rich cocoa powder over dark espresso roast.',
    objectPosition: 'center center',
  },
  {
    id: 'fresh-sandwich',
    image: images.sandwich,
    title: 'Freshly Baked Sandwiches & Savouries',
    category: 'Food & Drinks',
    badge: 'Fresh Bites',
    desc: 'Artisanal grilled sandwiches, crusty flatbread bites, and savory delicacies made fresh daily.',
    objectPosition: 'center center',
  },
];

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: title + ' | The Vista Cafe' },
      { name: 'description', content: description },
      { property: 'og:title', content: title + ' | The Vista Cafe' },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  };
}

