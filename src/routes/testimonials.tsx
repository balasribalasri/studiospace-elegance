import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Quote, Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — StudioSpace" },
      { name: "description", content: "Words from clients on working with StudioSpace — couples, founders and event organizers." },
      { property: "og:title", content: "Testimonials — StudioSpace" },
      { property: "og:description", content: "Words from couples, founders and event organizers." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const reviews = [
  {
    name: "Elena Rodríguez",
    role: "Bride",
    text: "They didn't just photograph our wedding — they understood it. Every image feels like a memory we forgot we had. The album is a family heirloom.",
  },
  {
    name: "Marcus Chen",
    role: "Founder, Maison Atelier",
    text: "Our entire brand identity was rebuilt from the ground up. The result is quieter, more confident, and unmistakably ours. Six months in, sales are up 40%.",
  },
  {
    name: "Priya Anand",
    role: "Events Director",
    text: "Discretion, professionalism, and breathtaking work. Our gala has used StudioSpace four years running — we wouldn't trust anyone else.",
  },
  {
    name: "James O'Connor",
    role: "Creative Director",
    text: "The product campaign they delivered raised the entire bar for our category. Editorial quality, on schedule, on budget. Rare combination.",
  },
  {
    name: "Sofia Laurent",
    role: "Personal Brand",
    text: "I'd been on countless shoots before — none felt this considered. The portraits are honest, elegant, and entirely me.",
  },
  {
    name: "David Park",
    role: "Startup CEO",
    text: "From the logo to the deck templates, every touchpoint feels intentional. Investors comment on it. Hires comment on it. It works.",
  },
];

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Client Words"
        title="Testimonials"
        description="A decade of working closely with couples, founders, and cultural institutions — here is what some of them have said."
      />

      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="relative border border-border bg-card p-10 hover-lift"
            >
              <Quote className="absolute -top-4 left-8 bg-card px-2 text-gold" size={36} />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed font-display text-lg italic">
                "{r.text}"
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-display text-xl">{r.name}</p>
                <p className="text-xs uppercase tracking-luxe text-gold mt-1">{r.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
