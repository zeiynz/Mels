"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 16,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease,
        },
    },
};

export default function AboutPage() {
    return (
        <main className="overflow-hidden">
            <section className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl items-center px-4 py-24 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="max-w-4xl"
                >
                    <p className="mb-6 text-sm text-muted-foreground">
                        About Mels
                    </p>

                    <h1 className="text-balance text-5xl font-medium tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                        We build digital products
                        <span className="text-muted-foreground">
                            {" "}
                            and experiences that matter.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                        Mels is a digital company focused on creating useful products
                        and delivering thoughtful digital solutions for modern
                        businesses.
                    </p>
                </motion.div>
            </section>

            <section className="border-t">
                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]"
                    >
                        <p className="text-sm text-muted-foreground">
                            What we do
                        </p>

                        <div className="max-w-2xl">
                            <p className="text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl">
                                We combine products and services to help businesses build,
                                launch, and grow in a digital world.
                            </p>

                            <p className="mt-8 text-base leading-7 text-muted-foreground">
                                Our work ranges from ready-to-use digital products and
                                resources to custom websites, branding, and digital
                                solutions. Every project starts with understanding the
                                problem and ends with something practical, clear, and
                                built to last.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="border-t">
                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="max-w-3xl"
                    >
                        <p className="text-sm text-muted-foreground">
                            How we work
                        </p>

                        <p className="mt-6 text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl">
                            Good digital work should feel simple.
                        </p>

                        <p className="mt-8 text-base leading-7 text-muted-foreground">
                            We value clarity over complexity, quality over quantity, and
                            thoughtful execution over unnecessary features. The goal is
                            not simply to make something look good, but to make it work
                            exceptionally well.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="border-t">
                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
                    >
                        <div className="max-w-2xl">
                            <p className="text-sm text-muted-foreground">
                                Start a project
                            </p>

                            <h2 className="mt-5 text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                                Have something worth building?
                            </h2>
                        </div>

                        <Link
                            href="/get-started"
                            className="group inline-flex w-fit items-center gap-2 text-sm font-medium"
                        >
                            Get started
                            <span
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}