
import { navItems } from "@/lib/constants";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import MobileNavigtaion from "./MobileNavigation";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 gap-2 items-center tracking-tighter">
            <div className="bg-blue-900 text-white p-2 font-bold font-serif text-lg">IJK</div>
            <h1 className="text-xl font-serif font-bold text-foreground">
              Inko Jaya Konstruksi
            </h1>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-md font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <ModeToggle />
          </div>
          <MobileNavigtaion />
        </div>
      </div>
    </nav>
  );
}
