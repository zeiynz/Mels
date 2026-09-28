'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

const testimonials = [
    {
        src: '/testimonials/testimonial-1.png',
        alt: 'Customer testimonial',
    },
    {
        src: '/testimonials/testimonial-2.png',
        alt: 'Customer testimonial',
    },
    {
        src: '/testimonials/testimonial-3.png',
        alt: 'Customer testimonial',
    },
    {
        src: '/testimonials/testimonial-4.png',
        alt: 'Customer testimonial',
    },
];

const easing = [0.22, 1, 0.36, 1] as const;

function MobileTestimonials() {
    const trackRef = useRef<HTMLDivElement>(null);
    const isInteracting = useRef(false);
    const speed = useRef(32);
    const x = useMotionValue(0);

    useAnimationFrame((_, delta) => {
        const track = trackRef.current;
        if (!track) return;

        const halfWidth = track.scrollWidth / 2;
        const targetSpeed = isInteracting.current ? 10 : 32;

        speed.current +=
            (targetSpeed - speed.current) * Math.min(delta / 180, 1);

        let nextX = x.get() - (speed.current * delta) / 1000;

        if (Math.abs(nextX) >= halfWidth) {
            nextX += halfWidth;
        }

        x.set(nextX);
    });

    return (
        <div className="relative -mx-6 overflow-hidden md:hidden">
            <motion.div
                ref={trackRef}
                style={{ x }}
                className="flex w-max gap-4 px-3"
                onMouseEnter={() => {
                    isInteracting.current = true;
                }}
                onMouseLeave={() => {
                    isInteracting.current = false;
                }}
                onTouchStart={() => {
                    isInteracting.current = true;
                }}
                onTouchEnd={() => {
                    isInteracting.current = false;
                }}
            >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <article
                        key={`${testimonial.src}-${index}`}
                        className="w-[220px] shrink-0 overflow-hidden rounded-[26px] border border-border/60 bg-card/40 p-1.5 shadow-2xl shadow-black/10"
                    >
                        <div className="relative aspect-[9/16] overflow-hidden rounded-[21px] bg-secondary">
                            <Image
                                src={testimonial.src}
                                alt={testimonial.alt}
                                fill
                                sizes="220px"
                                className="object-cover"
                            />
                        </div>
                    </article>
                ))}
            </motion.div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="relative overflow-hidden bg-background py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: easing }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <p className="mb-3 text-sm font-medium text-muted-foreground">
                        Testimonials
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        What people are saying.
                    </h2>
                </motion.div>

                <MobileTestimonials />

                <div className="mx-auto hidden max-w-6xl grid-cols-2 gap-5 md:grid lg:grid-cols-4">
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={testimonial.src}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{
                                duration: 0.65,
                                delay: index * 0.07,
                                ease: easing,
                            }}
                            className="group relative mx-auto w-full overflow-hidden rounded-[28px] border border-border/60 bg-card/40 p-1.5 shadow-2xl shadow-black/10 transition-[border-color,box-shadow] duration-500 hover:border-border"
                        >
                            <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] bg-secondary">
                                <Image
                                    src={testimonial.src}
                                    alt={testimonial.alt}
                                    fill
                                    sizes="(max-width: 1024px) 40vw, 280px"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                                />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}