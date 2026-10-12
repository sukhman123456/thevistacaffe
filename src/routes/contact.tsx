import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/components/cafe/content';
import { PageIntro, VisitSection } from '@/components/cafe/sections';
export const Route=createFileRoute('/contact')({head:()=>pageHead('Contact & Directions — Visit Us','Find The Vista Cafe opposite West Point School on Kot Kapura–Moga Road, Punjab 151204. Call +91 88722 20333. Dine-in and takeaway.'),component:ContactPage});
function ContactPage(){return <><PageIntro eyebrow="COME SAY HELLO" title="Your coffee break is calling." description="A casual catch-up or a little takeaway treat. Find us in Kot Kapura, or call to ask about today’s menu and opening hours."/><VisitSection/></>}
