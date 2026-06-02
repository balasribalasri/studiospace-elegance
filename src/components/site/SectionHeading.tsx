interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, description, center = true }: Props) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-luxe text-gold mb-4">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
        {title}
      </h2>
      {center && <div className="gold-line mx-auto mt-6" />}
      {description && (
        <p className="mt-6 text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
