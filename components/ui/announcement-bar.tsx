"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

interface AnnouncementBarProps {
    endsAt?: string;
}

export function AnnouncementBar({ }: AnnouncementBarProps) {
    const [isVisible, setIsVisible] = useState(true);
    const shouldReduceMotion = useReducedMotion();

    const proUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;

    if (!proUrl) {
        throw new Error("Missing NEXT_PUBLIC_CHECKOUT_URL");
    }

    return (
        <AnimatePresence initial={false}>
            {isVisible && (
                <motion.div
                    key="announcement-bar"
                    initial={
                        shouldReduceMotion ? false : { opacity: 0, y: -12 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                        shouldReduceMotion
                            ? { opacity: 0 }
                            : {
                                opacity: 0,
                                y: -8,
                                transition: {
                                    duration: 0.22,
                                    ease: [0.4, 0, 1, 1],
                                },
                            }
                    }
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 28,
                        mass: 0.8,
                    }}
                    className="relative flex w-full items-center justify-between gap-2 border-b border-border bg-gradient-to-r from-[#fcd9d9] via-[#fdf2da] to-[#d6e5ff] px-3 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm text-zinc-950 dark:text-zinc-900"
                >
                    <a
                        href={proUrl}
                        className="flex min-w-0 flex-1 items-center justify-center gap-1.5 overflow-hidden text-center sm:gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label="Get the system and save 15% with code DEEN15"
                    >
                        <span className="truncate font-normal">
                            Build your business on deen.{" "}
                            <strong className="font-semibold">
                                Get 15% off with code DEEN15.
                            </strong>
                        </span>

                        <motion.span
                            whileHover={
                                shouldReduceMotion ? undefined : { x: 2 }
                            }
                            whileTap={
                                shouldReduceMotion ? undefined : { scale: 0.97 }
                            }
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                            }}
                            className="group inline-flex shrink-0 items-center font-medium underline-offset-4 hover:underline"
                        >
                            Get the System

                            <motion.span
                                animate={
                                    shouldReduceMotion ? undefined : { x: [0, 2, 0] }
                                }
                                transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    repeatDelay: 2.5,
                                    ease: "easeInOut",
                                }}
                                className="ml-1 inline-flex"
                            >
                                <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                            </motion.span>
                        </motion.span>
                    </a>

                    <motion.button
                        type="button"
                        onClick={() => setIsVisible(false)}
                        whileHover={
                            shouldReduceMotion ? undefined : { scale: 1.08 }
                        }
                        whileTap={
                            shouldReduceMotion ? undefined : { scale: 0.9 }
                        }
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 22,
                        }}
                        className="relative z-10 shrink-0 rounded-md p-1 text-zinc-700 transition-colors hover:bg-black/5 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label="Close announcement"
                    >
                        <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}