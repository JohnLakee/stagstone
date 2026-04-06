import { Home } from "lucide-react";
import { PROPERTY_NAME } from "@/config/rental";

const footerLinks = [
  { href: "#property", label: "Property" },
  { href: "#amenities", label: "Amenities" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <a href="#" className="inline-flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sea/10 text-sea">
                <Home className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                {PROPERTY_NAME}
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              A private vacation rental. Site under construction — thank you for
              your patience.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <p className="text-center text-xs text-slate-600">
            &copy; {new Date().getFullYear()} {PROPERTY_NAME}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
