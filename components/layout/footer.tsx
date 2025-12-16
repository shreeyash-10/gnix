import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full border-t border-border/40 bg-background py-12 md:py-16">
            <div className="container px-4 md:px-6 flex flex-col items-center">
                <div className="flex flex-col items-center gap-4 text-center">
                    <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-foreground">
                        <Image src="/G/2.svg" alt="GNIX logo" width={36} height={36} className="h-9 w-9 rounded-sm border border-white/10 bg-white" />
                        <span>GNIX Semicon</span>
                    </Link>
                    <p className="text-muted-foreground max-w-[600px]">
                        Engineering intelligence beyond software.
                    </p>
                </div>

                <div className="mt-10 flex gap-8">
                    <Link href="/technology" className="text-sm text-muted-foreground hover:text-primary transition-colors">Technology</Link>
                    <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products</Link>
                    <Link href="/research" className="text-sm text-muted-foreground hover:text-primary transition-colors">Research</Link>
                    <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link>
                </div>

                <div className="mt-16 border-t border-border/40 w-full pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} GNIX Semicon. All rights reserved.
                    </p>
                    <p className="text-sm font-medium text-primary tracking-wide">
                        GNIX Semicon — Engineering Intelligence for the Physical World
                    </p>
                </div>
            </div>
        </footer>
    );
}
