"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const menus = [
    {
        label: "Product",
        items: [
            {
                title: "Digital Products",
                description: "Ready-to-use digital products and resources.",
                href: "/products",
            },
            {
                title: "Templates",
                description: "Practical templates built to save you time.",
                href: "/products/templates",
            },
            {
                title: "Resources",
                description: "Guides, frameworks, and useful resources.",
                href: "/resources",
            },
        ],
    },
    {
        label: "Service",
        items: [
            {
                title: "Web Design & Development",
                description: "Modern websites designed and built for your business.",
                href: "/services/web-development",
            },
            {
                title: "Branding",
                description: "Build a clear and consistent brand identity.",
                href: "/services/branding",
            },
            {
                title: "Custom Solutions",
                description: "Tailored digital solutions for your specific needs.",
                href: "/services/custom-solutions",
            },
        ],
    },
];

const links = [
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
];

export function Navbar() {
    const pathname = usePathname();

    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 12);

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!mobileOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [mobileOpen]);

    const closeMenu = () => {
        setActiveMenu(null);
        setMobileOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileOpen((open) => !open);
        setActiveMenu(null);
    };

    const handleLogoClick = () => {
        closeMenu();

        if (isHome) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full border-b transition-all duration-200",
                scrolled
                    ? "border-border/60 bg-background/80 backdrop-blur-xl"
                    : "border-transparent bg-background",
            )}
        >
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={handleLogoClick}
                    aria-label="Mels home"
                    className="flex shrink-0 items-center"
                >
                    <Image
                        src="/icon.png"
                        alt="Mels"
                        width={36}
                        height={36}
                        priority
                        className="size-9 object-contain"
                    />
                </Link>

                {/* Desktop navigation */}
                <nav
                    aria-label="Main navigation"
                    className="hidden items-center gap-1 md:flex"
                >
                    {menus.map((menu) => {
                        const isOpen = activeMenu === menu.label;

                        return (
                            <div
                                key={menu.label}
                                className="relative"
                                onMouseEnter={() => setActiveMenu(menu.label)}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <button
                                    type="button"
                                    aria-expanded={isOpen}
                                    aria-haspopup="menu"
                                    onClick={() =>
                                        setActiveMenu(isOpen ? null : menu.label)
                                    }
                                    className={cn(
                                        "flex min-h-10 items-center gap-1 rounded-md px-3 text-sm",
                                        "text-muted-foreground transition-colors",
                                        "hover:bg-accent hover:text-foreground",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                        isOpen && "bg-accent text-foreground",
                                    )}
                                >
                                    {menu.label}

                                    <ChevronDown
                                        aria-hidden="true"
                                        className={cn(
                                            "size-3.5 transition-transform duration-200",
                                            isOpen && "rotate-180",
                                        )}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="absolute left-1/2 top-full w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 pt-2">
                                        <div className="rounded-xl border bg-popover p-2 shadow-xl">
                                            {menu.items.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    onClick={closeMenu}
                                                    className="block rounded-lg p-3 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                                >
                                                    <p className="text-sm font-medium">
                                                        {item.title}
                                                    </p>

                                                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                                        {item.description}
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="flex min-h-10 items-center rounded-md px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <Link
                    href="/get-started"
                    className="hidden min-h-10 shrink-0 items-center justify-center rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:inline-flex"
                >
                    Get started
                </Link>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={toggleMobileMenu}
                    aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-navigation"
                    className="flex size-10 shrink-0 items-center justify-center rounded-md border transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
                >
                    {mobileOpen ? (
                        <X aria-hidden="true" className="size-4" />
                    ) : (
                        <Menu aria-hidden="true" className="size-4" />
                    )}
                </button>
            </div>

            {/* Mobile navigation */}
            <div
                id="mobile-navigation"
                className={cn(
                    "border-t bg-background md:hidden",
                    !mobileOpen && "hidden",
                )}
            >
                <nav
                    aria-label="Mobile navigation"
                    className="mx-auto max-h-[calc(100dvh-4rem)] w-full max-w-6xl overflow-y-auto overscroll-contain px-4 py-5 sm:px-6"
                >
                    <div className="space-y-6">
                        {menus.map((menu) => (
                            <section key={menu.label}>
                                <h2 className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    {menu.label}
                                </h2>

                                <div className="space-y-1">
                                    {menu.items.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="block rounded-lg p-3 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        >
                                            <p className="text-sm font-medium">
                                                {item.title}
                                            </p>

                                            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        ))}

                        <div className="border-t pt-4">
                            <div className="space-y-1">
                                {links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <Link
                                href="/get-started"
                                onClick={closeMenu}
                                className="flex min-h-11 w-full items-center justify-center rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}