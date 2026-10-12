import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EYEBROW = 'Built by a Muslim founder, for Muslim founders';
const HEADLINE = 'Your business, built on deen.';
const SUBHEAD =
    '157 SOPs, frameworks, and tools — add them to your system via Notion or the launch checklist.';
const CTA_PRIMARY = 'Get the system';
const CTA_SECONDARY = "See what's inside";
const PREVIEW_ALT = 'Muslim Entrepreneur Launch System — Notion workspace preview';

export default function Hero() {
    const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;

    return (
        <section className="relative overflow-hidden bg-background">
            {/* Top eyebrow banner — optional, mirrors Arc's promo bar */}
            <div className="flex items-center justify-center border-b border-border/50 bg-muted/30 px-4 py-2.5 text-center text-sm text-muted-foreground">
                <span>{EYEBROW}</span>
            </div>

            <div className="container mx-auto px-4 pt-20 pb-0 md:px-6 md:pt-28 2xl:max-w-[1400px]">
                {/* Centered copy block */}
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-5xl md:text-6xl">
                        {HEADLINE}
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                        {SUBHEAD}
                    </p>

                    {/* Dual CTAs — matches Arc's "Explore components" / "Give Arc to your AI" */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <Link href={checkoutUrl ?? '#'}>
                            <Button size="lg" className="group rounded-full px-6">
                                {CTA_PRIMARY}
                                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Button>
                        </Link>
                        <Link href="#preview">
                            <Button
                                size="lg"
                                variant="outline"
                                className="group rounded-full px-6"
                            >
                                {CTA_SECONDARY}
                                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Product card — silver/black Resend-style gradient */}
                <div
                    id="preview"
                    className="relative mx-auto mt-14 w-full max-w-5xl sm:mt-16 md:mt-20"
                >
                    {/* Outer gradient shell */}
                    <div
                        className="relative overflow-hidden rounded-2xl p-px sm:rounded-[1.75rem]"
                        style={{
                            background:
                                'linear-gradient(145deg, #6b7280 0%, #374151 25%, #111111 60%, #1f2937 80%, #6b7280 100%)',
                        }}
                    >
                        {/* Inner card surface */}
                        <div
                            className="relative overflow-hidden rounded-[calc(1.75rem-1px)]"
                            style={{
                                background:
                                    'linear-gradient(160deg, #1c1c1e 0%, #111113 40%, #0a0a0b 100%)',
                            }}
                        >
                            {/* Subtle silver sheen overlay */}
                            <div
                                className="pointer-events-none absolute inset-0 z-10"
                                style={{
                                    background:
                                        'linear-gradient(135deg, rgba(156,163,175,0.08) 0%, transparent 50%, rgba(107,114,128,0.05) 100%)',
                                }}
                            />

                            {/* Top edge highlight — gives the "polished metal" look */}
                            <div
                                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px"
                                style={{
                                    background:
                                        'linear-gradient(90deg, transparent 0%, rgba(209,213,219,0.25) 20%, rgba(229,231,235,0.45) 50%, rgba(209,213,219,0.25) 80%, transparent 100%)',
                                }}
                            />

                            {/* Image */}
                            <div className="relative aspect-video w-full">
                                <Image
                                    src="/ummah.png"
                                    alt={PREVIEW_ALT}
                                    fill
                                    priority
                                    sizes="(max-width: 1280px) 100vw, 1200px"
                                    className="object-cover opacity-95"
                                />
                                {/* Bottom fade into card floor */}
                                <div
                                    className="absolute inset-x-0 bottom-0 h-24 z-10"
                                    style={{
                                        background:
                                            'linear-gradient(to top, #0a0a0b 0%, transparent 100%)',
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Ambient glow blobs */}
                    <div className="pointer-events-none absolute -left-40 top-1/2 -z-10 size-96 -translate-y-1/2 rounded-full bg-zinc-500/10 blur-[100px]" />
                    <div className="pointer-events-none absolute -right-40 top-1/3 -z-10 size-96 rounded-full bg-zinc-400/8 blur-[100px]" />
                </div>
            </div>
        </section>
    );
}