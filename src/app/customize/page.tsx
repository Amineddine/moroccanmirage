"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const STEPS = [
  { num: "01", heading: "Who Is This Journey For?", sub: "Tell us who's arriving. We'll design the rest around them.", img: "/marrakech tour 5.jpg" },
  { num: "02", heading: "When Will You Begin?", sub: "Your timeline shapes every detail we craft.", img: "/AGAFAY.jpeg" },
  { num: "03", heading: "How Will You Travel?", sub: "The composition of your party guides our recommendations.", img: "/marrakech tour 4.jpg" },
  { num: "04", heading: "Which Morocco Calls to You?", sub: "Select every landscape that stirs your imagination.", img: "/CHEFCHAOUEN.avif" },
  { num: "05", heading: "What Is Your Travel Energy?", sub: "Pace matters as much as place.", img: "/OURIKA.avif" },
  { num: "06", heading: "Where Will You Rest?", sub: "Choose the setting that feels like home.", img: "/fes tour 3.jpg" },
  { num: "07", heading: "What Moves You?", sub: "Select the experiences that belong in your story.", img: "/ESSAOUIRA.jpg" },
  { num: "08", heading: "The Final Details", sub: "Help us calibrate your proposal to perfection.", img: "/tangier tour 2.jpg" },
];

const TOTAL = STEPS.length;

const input =
  "w-full bg-obsidian-light border border-sandstone/20 focus:border-sandstone/50 text-alabaster font-body text-sm px-4 py-3 outline-none transition-colors duration-300 placeholder:text-alabaster/20";

interface Form {
  name: string; email: string; whatsapp: string;
  month: string; duration: string;
  composition: string; regions: string[];
  pacing: string; accommodation: string;
  inspirations: string[]; budget: string; extras: string;
}

function Opt({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative p-4 text-left border transition-all duration-300 w-full ${
        selected
          ? "border-sandstone bg-sandstone/10 text-alabaster"
          : "border-sandstone/15 bg-obsidian text-alabaster/50 hover:border-sandstone/35 hover:text-alabaster/80"
      }`}
    >
      {selected && <span className="absolute top-3.5 right-3.5 w-1.5 h-1.5 rounded-full bg-sandstone" />}
      <span className="font-display text-lg italic leading-snug">{label}</span>
    </button>
  );
}

function Lbl({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block font-body text-xs uppercase tracking-[0.25em] text-alabaster/40 mb-2">{text}</label>
      {children}
    </div>
  );
}

export default function CustomizePage() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState<Form>({
    name: "", email: "", whatsapp: "",
    month: "", duration: "",
    composition: "", regions: [],
    pacing: "", accommodation: "",
    inspirations: [], budget: "", extras: "",
  });

  const s = (k: keyof Form, v: string) => setForm(p => ({ ...p, [k]: v }));
  const tog = (k: "regions" | "inspirations", v: string) =>
    setForm(p => ({
      ...p,
      [k]: p[k].includes(v) ? p[k].filter(x => x !== v) : [...p[k], v],
    }));

  const meta = STEPS[step - 1];

  function stepContent() {
    switch (step) {
      case 1: return (
        <div className="space-y-4">
          <Lbl text="Full Name"><input type="text" value={form.name} onChange={e => s("name", e.target.value)} placeholder="Your full name" className={input} /></Lbl>
          <Lbl text="Email Address"><input type="email" value={form.email} onChange={e => s("email", e.target.value)} placeholder="your@email.com" className={input} /></Lbl>
          <Lbl text="WhatsApp Number"><input type="tel" value={form.whatsapp} onChange={e => s("whatsapp", e.target.value)} placeholder="+1 234 567 8900" className={input} /></Lbl>
        </div>
      );
      case 2: return (
        <div className="space-y-4">
          <Lbl text="Preferred Month & Year"><input type="text" value={form.month} onChange={e => s("month", e.target.value)} placeholder="e.g. March 2026" className={input} /></Lbl>
          <Lbl text="Journey Duration"><input type="text" value={form.duration} onChange={e => s("duration", e.target.value)} placeholder="e.g. 8 days, flexible" className={input} /></Lbl>
        </div>
      );
      case 3: return (
        <div className="grid grid-cols-2 gap-3">
          {["Solo", "Couple", "Family with Kids", "Group of Friends"].map(o => (
            <Opt key={o} label={o} selected={form.composition === o} onClick={() => s("composition", o)} />
          ))}
        </div>
      );
      case 4: return (
        <div className="space-y-2">
          {["Sahara & Golden Dunes", "Atlas Mountain Valleys", "Imperial Medinas", "Coastal Retreats", "Undecided — surprise me"].map(o => (
            <Opt key={o} label={o} selected={form.regions.includes(o)} onClick={() => tog("regions", o)} />
          ))}
        </div>
      );
      case 5: return (
        <div className="space-y-2">
          {["Relaxed & Immersive", "Curated Balance", "Intense Exploration"].map(o => (
            <Opt key={o} label={o} selected={form.pacing === o} onClick={() => s("pacing", o)} />
          ))}
        </div>
      );
      case 6: return (
        <div className="space-y-2">
          {["Authentic Palatial Riads", "Sahara Luxury Tents", "Modern 5-Star Resorts", "A Mix of Everything"].map(o => (
            <Opt key={o} label={o} selected={form.accommodation === o} onClick={() => s("accommodation", o)} />
          ))}
        </div>
      );
      case 7: return (
        <div className="space-y-2">
          {["Architecture & History", "Gastronomy & Tasting", "Atlas Trekking", "Desert Photography", "Hammams & Wellness"].map(o => (
            <Opt key={o} label={o} selected={form.inspirations.includes(o)} onClick={() => tog("inspirations", o)} />
          ))}
        </div>
      );
      case 8: return (
        <div className="space-y-4">
          <Lbl text="Budget Estimation"><input type="text" value={form.budget} onChange={e => s("budget", e.target.value)} placeholder="e.g. $3,000–5,000 per person" className={input} /></Lbl>
          <Lbl text="Additional Desires"><textarea rows={4} value={form.extras} onChange={e => s("extras", e.target.value)} placeholder="Celebrations, dietary needs, photography, special requests..." className={`${input} resize-none`} /></Lbl>
        </div>
      );
      default: return null;
    }
  }

  /* ── Success screen ── */
  if (done) {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center px-6 relative overflow-hidden grain">
        <div className="absolute inset-0">
          <Image src="/AGAFAY.jpeg" alt="" fill className="object-cover opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-obsidian/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0, 0, 1] }}
          className="relative text-center max-w-xl"
        >
          <motion.div className="w-px bg-sandstone mx-auto mb-12" initial={{ height: 0 }} animate={{ height: 80 }} transition={{ delay: 0.3, duration: 0.8 }} />
          <SectionLabel light className="mb-6 justify-center">Journey Initiated</SectionLabel>
          <h1 className="font-display text-4xl lg:text-5xl italic text-alabaster mb-6 leading-tight">Your proposal is<br />being crafted.</h1>
          <p className="font-body text-alabaster/60 leading-relaxed mb-12">
            Our luxury travel curators are reviewing your exact requirements and will return an exquisitely detailed proposal within 24 hours.
          </p>
          <Button href="/" variant="ghost">Return Home</Button>
        </motion.div>
      </div>
    );
  }

  /* ── Main layout ── */
  return (
    /* pt-20 offsets the fixed 80px navbar; the rest fills the viewport */
    <div className="bg-obsidian pt-20">
      <div className="h-[calc(100vh-5rem)] flex flex-col lg:flex-row overflow-hidden">

        {/* ── LEFT: cinematic image (desktop only) ── */}
        <div className="hidden lg:block relative lg:w-1/2 h-full overflow-hidden shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={meta.img}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.85, ease: [0.25, 0, 0, 1] }}
            >
              <Image src={meta.img} alt="" fill className="object-cover" sizes="50vw" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-obsidian/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Watermark step number */}
          <div className="absolute bottom-8 left-8 select-none pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.p
                key={meta.num}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 0.1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display font-bold text-alabaster leading-none"
                style={{ fontSize: "9rem" }}
              >
                {meta.num}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Vertical dot nav */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 items-center">
            {STEPS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setStep(i + 1)}
                className={`rounded-full transition-all duration-300 ${
                  i + 1 === step ? "bg-sandstone h-7 w-1.5" : i + 1 < step ? "bg-sandstone/50 h-1.5 w-1.5" : "bg-alabaster/20 h-1.5 w-1.5 hover:bg-alabaster/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT: form panel ── */}
        <div className="flex-1 flex flex-col h-full overflow-hidden bg-obsidian">

          {/* Sandstone progress bar */}
          <div className="h-0.5 w-full bg-sandstone/10 shrink-0">
            <motion.div
              className="h-full bg-sandstone"
              animate={{ width: `${(step / TOTAL) * 100}%` }}
              transition={{ duration: 0.45, ease: [0.25, 0, 0, 1] }}
            />
          </div>

          {/* Mobile: small image strip */}
          <div className="lg:hidden relative h-36 overflow-hidden shrink-0">
            <AnimatePresence mode="wait">
              <motion.div key={meta.img} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <Image src={meta.img} alt="" fill className="object-cover" sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-obsidian" />
              </motion.div>
            </AnimatePresence>
            <p className="absolute bottom-2 left-5 font-display font-bold text-alabaster/10 text-7xl leading-none select-none">{meta.num}</p>
          </div>

          {/* Scrollable step content */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col justify-center min-h-full px-8 lg:px-14 xl:px-18 py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
                >
                  <SectionLabel className="mb-4">{`${meta.num} of 0${TOTAL}`}</SectionLabel>
                  <h2 className="font-display text-3xl lg:text-[2.6rem] italic text-alabaster mb-2 leading-snug">{meta.heading}</h2>
                  <p className="font-body text-sm text-alabaster/50 mb-8">{meta.sub}</p>
                  {stepContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation footer */}
          <div className="shrink-0 border-t border-sandstone/10 bg-obsidian-light/80 backdrop-blur-sm px-8 lg:px-14 xl:px-18 py-4 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep(n => Math.max(1, n - 1))}
              disabled={step === 1}
              className="font-body text-xs uppercase tracking-widest transition-colors disabled:text-alabaster/15 text-alabaster/50 hover:text-sandstone min-w-[60px]"
            >
              ← Back
            </button>

            {/* Dot strip progress indicator */}
            <div className="flex items-center gap-1.5">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setStep(i + 1)}
                  className={`rounded-full transition-all duration-300 ${
                    i + 1 === step ? "bg-sandstone w-5 h-1" : i + 1 < step ? "bg-sandstone/50 w-1 h-1" : "bg-alabaster/15 w-1 h-1"
                  }`}
                />
              ))}
            </div>

            {step < TOTAL ? (
              <button
                type="button"
                onClick={() => setStep(n => n + 1)}
                className="font-body text-xs uppercase tracking-widest text-sandstone hover:text-sandstone-light transition-colors min-w-[60px] text-right"
              >
                Continue →
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setDone(true)}
                className="font-body text-xs uppercase tracking-[0.2em] bg-sandstone text-obsidian px-5 py-2 hover:bg-sandstone-light transition-colors"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
