"use client";

import { useState } from "react";
import { FileText, RotateCcw, ShieldCheck, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type Reason = {
    icon: LucideIcon;
    title: string;
    body: string;
    wide?: boolean;
};

// Trust content: concrete and checkable, not vague claims.
// Replace `body` copy with your real specifics once finalized — keep the same shape.
const REASONS: Reason[] = [
    {
        icon: FileText,
        title: "Every module is a real SOP, not filler",
        body: "Each framework in this system is the exact process, checklist, or template used to make a real business decision — not generic advice rewritten for a course.",
        wide: true,
    },
    {
        icon: ShieldCheck,
        title: "One founder, no ghostwriters",
        body: "Written and maintained by one person you can actually talk to, not a content team.",
    },
    {
        icon: RotateCcw,
        title: "Updated as the system is used",
        body: "Modules get revised as real feedback comes in from people using them, not left static after launch.",
    },
];

function ReasonCard({ reason }: { reason: Reason }) {
    const [isHovered, setHovered] = useState(false);
    const Icon = reason.icon;

    return (
        <motion.div
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            onTap={() => setHovered((v) => !v)}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6 md:p-8 ${reason.wide ? "sm:col-span-2" : "sm:col-span-1"
                }`}
        >
            {/* Cursor-follow glow — the one deliberate motion moment in this section */}
            <motion.div
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-white/[0.06] blur-3xl sm:size-40"
            />

            <motion.div
                animate={{ scale: isHovered ? 1.08 : 1, rotate: isHovered ? -4 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] sm:size-10"
            >
                <Icon className="size-4" strokeWidth={1.75} />
            </motion.div>

            <p className="relative mt-5 text-base font-medium tracking-[-0.01em] sm:mt-6 sm:text-lg">
                {reason.title}
            </p>
            <p className="relative mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                {reason.body}
            </p>
        </motion.div>
    );
}

export default function WhyDifferent() {
    return (
        <section className="bg-background px-4 py-14 sm:px-6 sm:py-20 md:py-24">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl md:text-4xl">
                    Why this isn&apos;t another template
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-base sm:leading-7">
                    Anyone can sell you a Notion page. Here&apos;s what actually
                    makes this one worth trusting.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2">
                    {REASONS.map((reason) => (
                        <ReasonCard key={reason.title} reason={reason} />
                    ))}
                </div>
            </div>
        </section>
    );
}