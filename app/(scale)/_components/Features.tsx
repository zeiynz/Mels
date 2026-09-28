import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { ArrowRight, Bot, Cloud, Code } from 'lucide-react';

const features = [
    {
        title: 'AI Integration',
        description:
            'Powerful AI capabilities built right into your workflow',
        icon: Bot,
        image: 'https://placehold.co/800x600/jpeg',
        benefits: [
            'Smart Automation',
            'Predictive Analytics',
            'Natural Language Processing',
        ],
    },
    {
        title: 'Cloud Infrastructure',
        description:
            'Scale your application with cloud-native architecture',
        icon: Cloud,
        image: 'https://placehold.co/800x600/jpeg',
        benefits: ['Auto Scaling', 'Global CDN', 'High Availability'],
    },
    {
        title: 'Developer Experience',
        description: 'Built by developers, for developers',
        icon: Code,
        image: 'https://placehold.co/800x600/jpeg',
        benefits: ['Modern Stack', 'Great DX', 'Extensive Docs'],
    },
];

export default function FeatureSectionWithCarousel() {
    const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;

    return (
        <section className="container mx-auto space-y-8 px-4 py-24 md:px-6 2xl:max-w-[1400px]">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Powerful features for modern teams
                </h2>

                <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Everything you need to build and scale your application
                </p>
            </div>

            <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <Card
                            key={feature.title}
                            className="relative flex flex-col overflow-hidden p-0"
                        >
                            <div className="relative aspect-video">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />

                                <div className="from-background/80 to-background/0 absolute inset-0 bg-gradient-to-t" />

                                <div className="absolute bottom-4 left-4">
                                    <Badge
                                        variant="secondary"
                                        className="gap-1"
                                    >
                                        <Icon className="size-3" />
                                        {feature.title}
                                    </Badge>
                                </div>
                            </div>

                            <CardContent className="flex flex-1 flex-col p-6 pt-0">
                                <h3 className="mb-2 text-xl font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="text-muted-foreground mb-4">
                                    {feature.description}
                                </p>

                                <ul className="space-y-2">
                                    {feature.benefits.map((benefit) => (
                                        <li
                                            key={benefit}
                                            className="flex items-center gap-2 text-sm"
                                        >
                                            <div className="bg-primary size-1.5 shrink-0 rounded-full" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="flex justify-center">
                <Link href={checkoutUrl ?? '#'}>
                    <Button>
                        Get Access
                        <ArrowRight className="size-4" />
                    </Button>
                </Link>
            </div>
        </section>
    );
}