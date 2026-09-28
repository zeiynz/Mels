import Hero from './_components/Hero';
import Stats from './_components/Stats';
import Features from './_components/Features';
import Testimonials from './_components/Testimonial';
// import Popup from './_components/Popup';
import StatsBento from './_components/StatsBento';

export default function Page() {
    return (
        <>
            {/* <Popup /> */}

            <Hero />
            <Stats />
            <StatsBento />
            <Features />
            <Testimonials />
        </>
    );
}