import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import wedding from "@/assets/portfolio-wedding-1.jpg";
import portrait from "@/assets/portfolio-portrait-1.jpg";
import branding from "@/assets/portfolio-branding-1.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Camera, Palette, Award, Heart } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StudioSpace — Capturing Moments, Creating Designs" },
      { name: "description", content: "Professional photography and creative graphic design services for weddings, events, brands and personal stories." },
      { property: "og:title", content: "StudioSpace — Capturing Moments, Creating Designs" },
      { property: "og:description", content: "Professional photography and creative graphic design services." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Elegant wedding portrait"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <p className="text-xs uppercase tracking-luxe text-gold reveal">
              Photography · Graphic Design
            </p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] reveal reveal-delay-1">
              Capturing Moments,<br />
              <span className="italic text-gold">Creating Designs</span>
            </h1>
            <div className="gold-line mx-auto mt-8 reveal reveal-delay-1" />
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto reveal reveal-delay-2">
              Professional photography and creative graphic design services for the moments and brands that matter.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 reveal reveal-delay-3">
              <Link
                to="/portfolio"
                className="bg-gold text-primary-foreground px-8 py-4 text-xs uppercase tracking-luxe hover:bg-gold-soft transition-all hover-lift"
              >
                View Portfolio
              </Link>
              <Link
                to="/contact"
                className="border border-gold text-gold px-8 py-4 text-xs uppercase tracking-luxe hover:bg-gold hover:text-primary-foreground transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-luxe text-muted-foreground">
          Scroll
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-luxe text-gold">Est. 2014</p>
          <h2 className="mt-6 font-display text-3xl md:text-5xl leading-tight">
            A studio devoted to the craft of stillness, story, and timeless visual identity.
          </h2>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 px-6 lg:px-10 bg-card">
        <SectionHeading
          eyebrow="What We Do"
          title="Two disciplines. One vision."
          description="We pair editorial photography with disciplined graphic design — every frame and every mark made to last."
        />
        <div className="mt-16 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="border border-border p-10 hover-lift">
            <Camera className="text-gold" size={32} />
            <h3 className="mt-6 font-display text-3xl">Photography</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Wedding, event, product and portrait photography crafted with cinematic light and patient eye.
            </p>
            <Link to="/services" className="mt-6 inline-block text-xs uppercase tracking-luxe text-gold hover:underline">
              Explore →
            </Link>
          </div>
          <div className="border border-border p-10 hover-lift">
            <Palette className="text-gold" size={32} />
            <h3 className="mt-6 font-display text-3xl">Graphic Design</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Logos, posters, social creatives and full brand systems built for clarity and distinction.
            </p>
            <Link to="/services" className="mt-6 inline-block text-xs uppercase tracking-luxe text-gold hover:underline">
              Explore →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-24 px-6 lg:px-10">
        <SectionHeading eyebrow="Selected Work" title="Recent moments & marks" />
        <div className="mt-16 grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
          {[
            { img: wedding, title: "Elena & Marcus", tag: "Wedding" },
            { img: portrait, title: "Studio Portrait Series", tag: "Portrait" },
            { img: branding, title: "Maison Atelier", tag: "Branding" },
          ].map((p) => (
            <div key={p.title} className="group relative overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs uppercase tracking-luxe text-gold">{p.tag}</p>
                <h3 className="mt-2 font-display text-2xl">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex border border-gold text-gold px-8 py-4 text-xs uppercase tracking-luxe hover:bg-gold hover:text-primary-foreground transition-all"
          >
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-6 lg:px-10 border-y border-border">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { n: "12+", l: "Years Crafting" },
            { n: "320", l: "Weddings Shot" },
            { n: "180", l: "Brands Built" },
            { n: "24", l: "Industry Awards" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-5xl md:text-6xl text-gold">{s.n}</p>
              <p className="mt-3 text-xs uppercase tracking-luxe text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-10 text-center">
        <div className="max-w-3xl mx-auto">
          <Heart className="mx-auto text-gold" size={28} />
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-tight">
            Let's create something <span className="italic text-gold">unforgettable</span>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Now booking weddings, brand campaigns and editorial sessions through next season.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex bg-gold text-primary-foreground px-8 py-4 text-xs uppercase tracking-luxe hover:bg-gold-soft transition-all hover-lift"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
