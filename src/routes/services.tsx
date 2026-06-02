import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Camera, Calendar, Package, User, Pen, Image, Share2, Layers } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — StudioSpace" },
      { name: "description", content: "Photography and graphic design services: weddings, events, product, portrait, logo design, posters, social creatives and branding." },
      { property: "og:title", content: "Services — StudioSpace" },
      { property: "og:description", content: "Photography and graphic design services for brands, couples and creators." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const photo = [
  { icon: Calendar, title: "Wedding Photography", text: "Full-day editorial documentation, candid and composed, delivered as a printed heirloom album." },
  { icon: Camera, title: "Event Photography", text: "Galas, launches and conferences captured with discretion and editorial sensibility." },
  { icon: Package, title: "Product Photography", text: "Studio-lit campaigns and lifestyle imagery for premium product brands and lookbooks." },
  { icon: User, title: "Portrait Photography", text: "Editorial portraits for founders, performers and personal brands — shot on film or digital." },
];

const design = [
  { icon: Pen, title: "Logo Design", text: "Considered marks built around typography, restraint, and decades of visual longevity." },
  { icon: Image, title: "Poster Design", text: "Editorial and event posters with a tactile sense of paper, ink and intention." },
  { icon: Share2, title: "Social Media Creatives", text: "Templated and bespoke creative systems engineered for cohesive, on-brand feeds." },
  { icon: Layers, title: "Branding Design", text: "Full identity systems — logo, palette, type, voice, and a guidelines book your team can use." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Services"
        description="Two creative disciplines, one cohesive studio. Choose individually or pair them for a fully crafted brand experience."
      />

      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 border-b border-border pb-8">
            <div>
              <p className="text-xs uppercase tracking-luxe text-gold">01 — Photography</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Photography Services</h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Light, composition and patience — the three things every shoot is built on.
            </p>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {photo.map((s) => (
              <div key={s.title} className="bg-background p-8 hover:bg-card transition-colors">
                <s.icon className="text-gold" size={28} />
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 border-b border-border pb-8">
            <div>
              <p className="text-xs uppercase tracking-luxe text-gold">02 — Design</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Graphic Design Services</h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Typography is the architecture of a brand. We build accordingly.
            </p>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {design.map((s) => (
              <div key={s.title} className="bg-card p-8 hover:bg-background transition-colors">
                <s.icon className="text-gold" size={28} />
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Have a project in mind?</h2>
        <div className="gold-line mx-auto mt-6" />
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Tell us about your wedding, brand or campaign. We'll respond within 24 hours.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex bg-gold text-primary-foreground px-8 py-4 text-xs uppercase tracking-luxe hover:bg-gold-soft transition-all hover-lift"
        >
          Request a Quote
        </Link>
      </section>
    </>
  );
}
