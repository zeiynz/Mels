import Hero from './_components/Hero';
import Stats from './_components/Stats';
import Testimonials from './_components/Testimonial';
import StatsBento from './_components/StatsBento';
import Faq from './_components/Faq';

export default function Page() {
    return (
        <>
            <Hero />
            <Stats />
            <StatsBento />
            <Testimonials />
            <Faq />
        </>
    );
}