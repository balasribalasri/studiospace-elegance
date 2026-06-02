import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { X } from "lucide-react";
import wedding from "@/assets/portfolio-wedding-1.jpg";
import event from "@/assets/portfolio-event-1.jpg";
import product from "@/assets/portfolio-product-1.jpg";
import portrait from "@/assets/portfolio-portrait-1.jpg";
import logo from "@/assets/portfolio-logo-1.jpg";
import poster from "@/assets/portfolio-poster-1.jpg";
import social from "@/assets/portfolio-social-1.jpg";
import branding from "@/assets/portfolio-branding-1.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — StudioSpace" },
      { name: "description", content: "Selected photography and graphic design work — weddings, events, product, portraits, logos, posters, social creatives and branding." },
      { property: "og:title", content: "Portfolio — StudioSpace" },
      { property: "og:description", content: "Selected photography and graphic design work from StudioSpace." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

type Item = { src: string; title: string; category: "Photography" | "Design"; tag: string };

const items: Item[] = [
  { src: wedding, title: "Elena & Marcus", category: "Photography", tag: "Wedding" },
  { src: event, title: "Annual Gala", category: "Photography", tag: "Event" },
  { src: product, title: "Noir Fragrance", category: "Photography", tag: "Product" },
  { src: portrait, title: "Studio Portrait", category: "Photography", tag: "Portrait" },
  { src: logo, title: "Maison Mark", category: "Design", tag: "Logo" },
  { src: poster, title: "Festival Poster", category: "Design", tag: "Poster" },
  { src: social, title: "Brand Feed", category: "Design", tag: "Social" },
  { src: branding, title: "Atelier Identity", category: "Design", tag: "Branding" },
];

function Portfolio() {
  const [filter, setFilter] = useState<"All" | "Photography" | "Design">("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const filtered = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Portfolio"
        description="A curated cross-section of recent photography and design projects from the studio."
      />

      <section className="py-16 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {(["All", "Photography", "Design"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-6 py-2.5 text-xs uppercase tracking-luxe border transition-all ${
                  filter === c
                    ? "bg-gold text-primary-foreground border-gold"
                    : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <button
                key={item.title + i}
                onClick={() => setLightbox(item)}
                className={`group relative overflow-hidden block ${
                  i % 5 === 0 ? "lg:row-span-2 lg:aspect-[3/4]" : "aspect-[4/5]"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 text-center">
                  <p className="text-xs uppercase tracking-luxe text-gold">{item.tag}</p>
                  <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
                  <span className="mt-4 text-xs uppercase tracking-luxe border-b border-gold pb-1">View</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 h-12 w-12 grid place-items-center border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="max-h-[75vh] w-auto object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-xs uppercase tracking-luxe text-gold">{lightbox.tag}</p>
              <h3 className="mt-2 font-display text-2xl">{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
