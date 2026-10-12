import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/components/cafe/content';
import { PageIntro, StorySection, VisitSection } from '@/components/cafe/sections';
export const Route=createFileRoute('/our-story')({head:()=>pageHead('Our Story — A Place to Pause','Coffee, conversations, and casual outings at The Vista Cafe, Kot Kapura. Take a little time for yourself, dine in, or enjoy takeaway.'),component:StoryPage});
function StoryPage(){return <><PageIntro eyebrow="THE VISTA WAY" title="Good company. Little moments." description="A coffee break, a catch-up, a reason to slow down. Welcome to The Vista Cafe."/><StorySection full/><VisitSection/></>}
