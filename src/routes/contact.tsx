import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — StudioSpace" },
      { name: "description", content: "Book a session or request a quote from StudioSpace. Email, phone, WhatsApp and studio location in San Francisco." },
      { property: "og:title", content: "Contact — StudioSpace" },
      { property: "og:description", content: "Book a session or request a quote from StudioSpace." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(5, "Phone required").max(30),
  message: z.string().trim().min(10, "Tell us a bit more").max(1500),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert(result.data);
    setSubmitting(false);
    if (error) {
      toast.error("Something went wrong — please try again or email us directly.");
      return;
    }
    toast.success("Thank you — we'll be in touch within 24 hours.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Toaster />
      <PageHero
        eyebrow="Get In Touch"
        title="Let's begin a conversation."
        description="Tell us a little about your project — wedding, event, brand, or campaign — and we'll respond within 24 hours."
      />

      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-5">
          {/* FORM */}
          <form onSubmit={onSubmit} className="lg:col-span-3 border border-border p-8 md:p-12 bg-card">
            <h2 className="font-display text-3xl">Send a message</h2>
            <div className="gold-line mt-4" />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Field label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-luxe text-muted-foreground">Message</label>
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1500}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground transition-colors resize-none"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-10 inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-4 text-xs uppercase tracking-luxe hover:bg-gold-soft transition-all disabled:opacity-50"
            >
              <Send size={14} /> {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* INFO */}
          <div className="lg:col-span-2 space-y-6">
            <InfoCard icon={Mail} label="Email" value="hello@studiospace.co" href="mailto:hello@studiospace.co" />
            <InfoCard icon={Phone} label="Phone" value="+1 (415) 555 0142" href="tel:+14155550142" />
            <InfoCard icon={MapPin} label="Studio" value="225 Atelier Avenue, San Francisco, CA" />
            <a
              href="https://wa.me/14155550142"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gold text-primary-foreground py-5 text-xs uppercase tracking-luxe hover:bg-gold-soft transition-all hover-lift"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 lg:px-10 pb-24">
        <div className="mx-auto max-w-7xl border border-border overflow-hidden">
          <iframe
            title="StudioSpace location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.30684517435!2d-122.45160314179688!3d37.77492951510655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.85)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function Field({
  label, value, onChange, type = "text",
}: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-luxe text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={255}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground transition-colors"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon, label, value, href,
}: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex gap-5 border border-border p-6 bg-card hover:border-gold transition-colors">
      <div className="h-12 w-12 grid place-items-center border border-gold text-gold shrink-0">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-luxe text-gold">{label}</p>
        <p className="mt-2 text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
