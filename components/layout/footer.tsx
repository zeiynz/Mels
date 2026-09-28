"use client";

import { motion, Easing } from "framer-motion";
import Link from "next/link";

const smoothEase: Easing = [0.22, 1, 0.36, 1];

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-background pt-12 pb-8 font-sans">
            <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 60 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.5,
                    delay: 0.2,
                    ease: smoothEase,
                }}
                className="relative flex w-full items-center justify-center"
            >
                <h1 className="text-[25vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground/10 via-foreground/5 to-transparent">
                    SCALE
                </h1>

                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>

            <div className="relative z-20 mt-10 flex flex-col items-center gap-4 px-6 text-sm font-medium text-muted-foreground">
                <div className="flex items-center justify-center gap-6">
                    <Link
                        href="https://www.threads.com/@theummahlabs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-foreground"
                    >
                        Threads
                    </Link>
                </div>

                <p className="text-xs tracking-wide opacity-80 md:text-sm">
                    © {new Date().getFullYear()} The Ummah Labs. All rights reserved.
                </p>
            </div>
        </footer>
    );
}