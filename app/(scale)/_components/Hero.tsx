import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Copy is product-specific — update alongside pricing/positioning changes in memory, not just here.
const EYEBROW = 'Built by a Muslim founder, for Muslim founders';
const HEADLINE = 'Your business, built on deen.';
const SUBHEAD =
    'A complete system for launching your first business, in shā Allāh, without guesswork. SOPs, frameworks, and tools built from real experience, not a generic template.';
const CTA_LABEL = 'Get the system';
const PREVIEW_ALT = 'Muslim Entrepreneur Launch System — Notion workspace preview';

export default function HeroSectionCentredWithImage() {
    const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;

    return (
        <section className="relative overflow-hidden">
            <div className="container mx-auto px-4 py-20 md:px-6 md:py-28 lg:py-32 2xl:max-w-[1400px]">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="mb-5 text-sm font-medium tracking-wide text-muted-foreground">
                        {EYEBROW}
                    </p>

                    <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-6xl">
                        {HEADLINE}
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                        {SUBHEAD}
                    </p>

                    <div className="mt-8 flex justify-center">
                        <Link href={checkoutUrl ?? '#'}>
                            <Button className="group">
                                {CTA_LABEL}
                                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="relative mx-auto mt-12 w-full max-w-6xl sm:mt-16 md:mt-20">
                    <div className="relative overflow-hidden rounded-2xl border bg-muted/20 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] sm:rounded-[2rem]">
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted sm:rounded-[1.75rem]">
                            <Image
                                src="/try.png"
                                alt={PREVIEW_ALT}
                                fill
                                priority
                                sizes="(max-width: 1280px) 100vw, 1200px"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="pointer-events-none absolute -left-32 top-1/2 -z-10 size-80 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-3xl" />
                    <div className="pointer-events-none absolute -right-32 top-1/3 -z-10 size-80 rounded-full bg-primary/[0.04] blur-3xl" />
                </div>
            </div>
        </section>
    );
}