import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
    { name: "Technology", href: "/technology" },
    { name: "Products", href: "/products" },
    { name: "Research", href: "/research" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
];

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter text-foreground">
                    <Image src="/G/2.svg" alt="GNIX logo" width={32} height={32} className="h-8 w-8 rounded-sm border border-white/10 bg-white" />
                    <span>GNIX Semicon</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="default" size="sm" className="ml-4 font-semibold shadow-[0_0_15px_-3px_var(--primary)]">
                        Contact Us
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-border/40">
                            <div className="flex flex-col gap-6 mt-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button className="mt-4 w-full font-semibold shadow-[0_0_15px_-3px_var(--primary)]">
                                    Contact Us
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
