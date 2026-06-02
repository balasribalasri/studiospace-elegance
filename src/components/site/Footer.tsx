import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="font-display text-3xl">
            Studio<span className="text-gold">Space</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            A photography and graphic design studio crafting timeless imagery and identities for brands, couples, and creators.
          </p>
          <div className="mt-6 flex gap-4">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 grid place-items-center border border-border text-muted-foreground hover:text-gold hover:border-gold transition-colors"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxe text-gold">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
              ["/about", "About"],
              ["/services", "Services"],
              ["/portfolio", "Portfolio"],
              ["/testimonials", "Testimonials"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-luxe text-gold">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>hello@studiospace.co</li>
            <li>+1 (415) 555 0142</li>
            <li>225 Atelier Avenue<br />San Francisco, CA</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} StudioSpace. All rights reserved.</p>
          <p className="tracking-luxe uppercase">Crafted with intention</p>
        </div>
      </div>
    </footer>
  );
}
