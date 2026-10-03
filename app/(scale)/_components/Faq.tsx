"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FaqItem = {
    question: string;
    answer: string;
};

const faqItems: FaqItem[] = [
    {
        question: "What makes this different from a free YouTube playlist?",
        answer:
            "A playlist gives you information in random order. This gives you a sequence, niche first, then brand, then product, then sales, then systems, so you are never guessing what to do next. The value is the order, not just the content.",
    },
    {
        question: "I have started and stopped before. Why would this time be different?",
        answer:
            "Most people stall because the next step is unclear, not because they lack discipline. Each module ends with a short checklist before you move on, so you always know exactly what done looks like.",
    },
    {
        question: "Will this actually make me money?",
        answer:
            "No one can honestly promise that, and we will not pretend otherwise. What this gives you is a tested path from idea to a live, sellable product. What happens after launch depends on your niche, your effort, and your market.",
    },
    {
        question: "I am not technical and I do not want to appear on camera. Does this still work for me?",
        answer:
            "Yes, by design. Every tool used is free to start with, every content format in the system works without showing your face, and nothing requires writing code.",
    },
    {
        question: "What if I buy this and it is not for me?",
        answer:
            "Refund terms are stated clearly on the checkout page before you pay, with no fine print to dig for afterward.",
    },
];

const springTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 0.8,
};

function FaqIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <span
            aria-hidden="true"
            className="relative ml-4 flex size-4 shrink-0 items-center justify-center"
        >
            <motion.span
                className="absolute h-px w-full rounded-full bg-foreground"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={springTransition}
            />
            <motion.span
                className="absolute h-px w-full rounded-full bg-foreground"
                animate={{ rotate: isOpen ? -45 : 90 }}
                transition={springTransition}
            />
        </span>
    );
}

export function Faq() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    return (
        <section className="mx-auto w-full max-w-2xl px-6 py-20 sm:py-28">
            <motion.header
                className="mb-12 sm:mb-16"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ ...springTransition, stiffness: 180 }}
            >
                <p className="text-sm font-medium text-muted-foreground">
                    Frequently asked questions
                </p>
                <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                    A few things worth knowing
                </h2>
            </motion.header>

            <div className="border-t border-border">
                {faqItems.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <motion.div
                            key={item.question}
                            className="border-b border-border"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                ...springTransition,
                                stiffness: 200,
                                delay: index * 0.05,
                            }}
                        >
                            <button
                                type="button"
                                aria-expanded={isOpen}
                                onClick={() =>
                                    setOpenIndex((current) =>
                                        current === index ? null : index,
                                    )
                                }
                                className="group flex w-full items-center justify-between gap-6 py-6 text-left text-base font-medium text-foreground transition-colors duration-300 hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-lg"
                            >
                                <motion.span
                                    animate={{ x: isOpen ? 4 : 0 }}
                                    transition={springTransition}
                                >
                                    {item.question}
                                </motion.span>

                                <FaqIcon isOpen={isOpen} />
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={springTransition}
                                        className="overflow-hidden"
                                    >
                                        <motion.p
                                            initial={{ y: -6 }}
                                            animate={{ y: 0 }}
                                            exit={{ y: -6 }}
                                            transition={springTransition}
                                            className={cn(
                                                "pb-6 pr-8 text-sm leading-[1.7] text-muted-foreground sm:text-base",
                                            )}
                                        >
                                            {item.answer}
                                        </motion.p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default Faq;