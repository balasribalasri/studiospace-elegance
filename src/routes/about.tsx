import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Eye, Target, Sparkles, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — StudioSpace" },
      { name: "description", content: "Meet the team behind StudioSpace — a studio devoted to photography and graphic design crafted with intention." },
      { property: "og:title", content: "About — StudioSpace" },
      { property: "og:description", content: "A studio devoted to photography and graphic design crafted with intention." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A studio for moments that matter."
        description="StudioSpace is a small team of photographers and designers building visual work meant to outlast the trend cycle."
      />

      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 items-center">
          <img
            src={aboutImg}
            alt="Studio photographer at work"
            loading="lazy"
            width={1280}
            height={1280}
            className="w-full aspect-[4/5] object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-luxe text-gold">Introduction</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Founded on the belief that great imagery is felt, not just seen.
            </h2>
            <div className="gold-line mt-6" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Since 2014, StudioSpace has worked with couples, founders and cultural institutions to translate the unrepeatable into something permanent. We treat every project — a wedding day or a brand identity — as a quiet act of preservation.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our atelier in San Francisco is part darkroom, part design studio, part library. We believe restraint is a creative discipline.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-24 px-6 lg:px-10 bg-card">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2">
          <div className="border border-border p-10">
            <Target className="text-gold" size={28} />
            <h3 className="mt-6 font-display text-3xl">Our Mission</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To create photography and design work of such honesty and craft that it earns its place on a wall, in a frame, or on the spine of a book — for decades.
            </p>
          </div>
          <div className="border border-border p-10">
            <Eye className="text-gold" size={28} />
            <h3 className="mt-6 font-display text-3xl">Our Vision</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A world where every meaningful moment and meaningful brand is documented with the seriousness and beauty it deserves.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-luxe text-gold">The StudioSpace Difference</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Why choose us</h2>
          <div className="gold-line mx-auto mt-6" />
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { icon: Sparkles, title: "Craft First", text: "Every frame retouched by hand. Every layout proofed on paper. No assembly-line work." },
            { icon: ShieldCheck, title: "Quiet Reliability", text: "Decade-long relationships with clients. Timelines met. Files delivered. Always." },
            { icon: Eye, title: "An Editorial Eye", text: "We compose like editors and design like typographers — clarity over noise." },
          ].map((f) => (
            <div key={f.title} className="border border-border p-8 hover-lift">
              <f.icon className="text-gold" size={24} />
              <h3 className="mt-5 font-display text-2xl">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
