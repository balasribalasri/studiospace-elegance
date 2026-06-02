interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="pt-40 pb-20 px-6 lg:px-10 border-b border-border">
      <div className="mx-auto max-w-7xl text-center reveal">
        <p className="text-xs uppercase tracking-luxe text-gold">{eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02]">{title}</h1>
        <div className="gold-line mx-auto mt-8" />
        {description && (
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
