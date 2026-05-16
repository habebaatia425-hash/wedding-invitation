import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Shirt, Sparkles, Heart, Mail } from "lucide-react";
import { Toaster } from "sonner";

import { Petals } from "@/components/wedding/Petals";
import { MusicToggle } from "@/components/wedding/MusicToggle";
import { Countdown } from "@/components/wedding/Countdown";
import { InvitationCard } from "@/components/wedding/InvitationCard";
import { RsvpForm } from "@/components/wedding/RsvpForm";
import { Gallery } from "@/components/wedding/Gallery";
import { FadeIn } from "@/components/wedding/FadeIn";

import hero from "@/assets/hero.jpeg";
import florals from "@/assets/florals.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmed & Heba — A Wedding Invitation" },
      {
        name: "description",
        content:
          "Join Ahmed & Heba on June 14, 2026 as they celebrate their love. RSVP, venue details, and live countdown.",
      },
      { property: "og:title", content: "Ahmed & Heba — June 14, 2026" },
      {
        property: "og:description",
        content: "A cinematic celebration of love. You are warmly invited.",
      },
    ],
  }),
  component: Index,
});

const WEDDING_DATE = new Date("2026-06-14T16:00:00");

const timeline = [
  { date: "Spring 2019", title: "First Encounter", text: "A chance meeting at a small bookshop café in Lisbon." },
  { date: "Winter 2020", title: "First Travel", text: "A snowy weekend in the Alps that sealed everything." },
  { date: "Summer 2023", title: "The Proposal", text: "Under a sky full of stars by the Mediterranean coast." },
  { date: "June 2026", title: "Forever Begins", text: "And now, we say I do — surrounded by everyone we love." },
];

const dressCode = [
  { icon: Sparkles, label: "Formal Attire", hint: "Long dresses & suits" },
  { icon: Heart, label: "Soft Palette", hint: "Champagne · Dusty Rose · Ivory" },
  { icon: Shirt, label: "Avoid White", hint: "Reserved for the bride" },
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Toaster position="top-center" theme="light" />
      <Petals />
      <MusicToggle />
      <InvitationCard open={open} onClose={() => setOpen(false)} />

      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={hero}
          alt="Bride and groom in golden light"
          width={1080}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-background" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-xs tracking-[0.45em] uppercase text-ivory/90 mb-6"
          >
            Save The Date · 06 · 14 · 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="font-display text-6xl sm:text-7xl text-ivory leading-[0.95] drop-shadow-lg"
          >
            Ahmed
            <span className="block font-script text-4xl sm:text-5xl gold-text my-2">
              &amp;
            </span>
            Heba
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1 }}
            className="mt-8 max-w-xs"
          >
            <p className="font-script text-lg text-ivory/95 leading-relaxed">
              "In all the world, there is no heart for me like yours."
            </p>
            <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-ivory/70">
              — Maya Angelou
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            onClick={() => setOpen(true)}
            className="mt-10 group relative overflow-hidden rounded-full px-9 py-4 text-xs tracking-[0.35em] uppercase text-ivory border border-ivory/40 backdrop-blur-md bg-ivory/10 hover:bg-ivory/20 transition"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Mail className="h-3.5 w-3.5" /> Open Invitation
            </span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/70 text-[10px] tracking-[0.4em] uppercase"
          >
            Scroll
          </motion.div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="relative px-6 py-24">
        <img
          src={florals}
          alt=""
          aria-hidden
          className="absolute top-0 right-0 w-40 opacity-30 -rotate-12 pointer-events-none"
          loading="lazy"
          width={1024}
          height={1024}
        />
        <FadeIn className="mx-auto max-w-md text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-accent">
            The Celebration
          </p>
          <h2 className="mt-3 font-display text-4xl text-primary">When &amp; Where</h2>
          <div className="divider-ornament my-6"><span>♥</span></div>

          <div className="glass rounded-2xl p-8 space-y-6 text-left">
            <div className="flex items-start gap-4">
              <Calendar className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Date</p>
                <p className="font-display text-lg text-foreground">Saturday, June 14, 2026</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Time</p>
                <p className="font-display text-lg text-foreground">4:00 PM · Ceremony</p>
                <p className="text-sm text-muted-foreground">6:00 PM · Reception</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Venue</p>
                <p className="font-display text-lg text-foreground">Villa Serena</p>
                <p className="text-sm text-muted-foreground">Costa del Sol, Spain</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Costa+del+Sol+Spain"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center rounded-lg bg-primary text-primary-foreground py-3 text-xs tracking-[0.3em] uppercase hover:opacity-90 transition"
            >
              Open in Google Maps
            </a>
          </div>
        </FadeIn>
      </section>

      {/* COUNTDOWN */}
      <section className="px-6 py-20 bg-gradient-to-b from-transparent via-muted/40 to-transparent">
        <FadeIn className="mx-auto max-w-md text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-accent">Counting The Days</p>
          <h2 className="mt-3 font-display text-3xl text-primary">Until Forever</h2>
          <div className="divider-ornament my-6"><span>♥</span></div>
          <Countdown date={WEDDING_DATE} />
        </FadeIn>
      </section>

      {/* LOVE STORY */}
      <section className="relative px-6 py-24">
        <FadeIn className="mx-auto max-w-md text-center mb-12">
          <p className="text-xs tracking-[0.4em] uppercase text-accent">Our Journey</p>
          <h2 className="mt-3 font-display text-4xl text-primary">Love Story</h2>
          <div className="divider-ornament my-6"><span>♥</span></div>
        </FadeIn>

        <div className="mx-auto max-w-md relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />
          {timeline.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.1} className="relative pl-12 pb-10 last:pb-0">
              <div className="absolute left-2.5 top-2 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_var(--background),0_0_0_5px_var(--accent)]" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent">{t.date}</p>
              <h3 className="mt-1 font-display text-xl text-foreground">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-20">
        <FadeIn className="mx-auto max-w-md">
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.4em] uppercase text-accent">Memories</p>
            <h2 className="mt-3 font-display text-4xl text-primary">Moments</h2>
            <div className="divider-ornament my-6"><span>♥</span></div>
          </div>
          <Gallery />
        </FadeIn>
      </section>

      {/* DRESS CODE */}
      <section className="px-6 py-20 bg-gradient-to-b from-transparent via-muted/40 to-transparent">
        <FadeIn className="mx-auto max-w-md text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-accent">For The Occasion</p>
          <h2 className="mt-3 font-display text-4xl text-primary">Dress Code</h2>
          <div className="divider-ornament my-6"><span>♥</span></div>

          <div className="grid grid-cols-1 gap-4">
            {dressCode.map((d, i) => (
              <FadeIn key={d.label} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 flex items-center gap-5 text-left">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-lg text-foreground">{d.label}</p>
                    <p className="text-xs text-muted-foreground">{d.hint}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {["#f5efe6", "#e8d5c4", "#d4a574", "#c89090"].map((c) => (
              <div
                key={c}
                className="h-10 w-10 rounded-full ring-2 ring-background shadow-md"
                style={{ background: c }}
              />
            ))}
          </div>
        </FadeIn>
      </section>

      {/* RSVP */}
      <section className="px-6 py-24">
        <FadeIn className="mx-auto max-w-md">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.4em] uppercase text-accent">Kindly Reply</p>
            <h2 className="mt-3 font-display text-4xl text-primary">RSVP</h2>
            <div className="divider-ornament my-6"><span>♥</span></div>
            <p className="text-sm text-muted-foreground">
              We would be honored by your presence. Please reply by May 1, 2026.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <RsvpForm />
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="relative px-6 pt-16 pb-12 text-center border-t border-border/60">
        <img
          src={florals}
          alt=""
          aria-hidden
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 opacity-60 pointer-events-none"
          loading="lazy"
          width={1024}
          height={1024}
        />
        <h3 className="font-display text-3xl text-primary">
          Ahmed <span className="font-script text-accent">&amp;</span> Heba
        </h3>
        <p className="mt-2 font-script text-lg text-muted-foreground">
          with all our love · 06.14.2026
        </p>
        <p className="mt-6 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Made with ♥
        </p>
      </footer>
    </div>
  );
}
