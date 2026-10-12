import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/components/cafe/content';
import { PageIntro, MenuSection } from '@/components/cafe/sections';
export const Route=createFileRoute('/menu')({head:()=>pageHead('Menu Inspiration — Coffee & Bites','Explore sample coffee, drinks, quick bites, and dessert inspiration for The Vista Cafe. Contact the café for its confirmed menu, prices, and availability.'),component:MenuPage});
function MenuPage(){return <><PageIntro eyebrow="SIPS, BITES & LITTLE DELIGHTS" title="Something for your mood." description="A warm cup, a cool sip, or something sweet. A little inspiration for your next visit."/><MenuSection full/></>}
