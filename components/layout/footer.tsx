"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-background pt-12 pb-8 font-sans">
            <div className="relative flex w-full items-center justify-center">
                <h1 className="bg-gradient-to-b from-foreground/10 via-foreground/5 to-transparent bg-clip-text text-[25vw] leading-[0.8] font-black tracking-tighter text-transparent">
                    UMMAH
                </h1>

                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            <div className="relative z-20 mt-10 flex flex-col items-center gap-4 px-6 text-sm font-medium text-muted-foreground">
                <div className="flex items-center justify-center gap-6">
                    <Link
                        href="https://www.threads.com/@iamzeiyn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-foreground"
                    >
                        Threads
                    </Link>

                    <Link
                        href="https://www.youtube.com/@iamzeiyn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-foreground"
                    >
                        YouTube
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/zeiyn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-foreground"
                    >
                        LinkedIn
                    </Link>

                    <Link
                        href="https://www.instagram.com/iamzeiyn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-foreground"
                    >
                        Instagram
                    </Link>
                </div>

                <p className="text-xs tracking-wide opacity-80 md:text-sm">
                    © {new Date().getFullYear()} The Ummah Labs. All rights reserved.
                </p>
            </div>
        </footer>
    );
}