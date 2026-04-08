"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, ArrowLeft, Send, CheckCircle, MapPin } from "lucide-react";

const services = [
  "Moroccan Tours",
  "Excursions & Activities",
  "Private Airport Transfer",
  "Customize My Trip",
  "Other",
];

function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";
  const preselectedTour = searchParams.get("tour") || "";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedService || "",
    tour: preselectedTour || "",
    guests: "2",
    dates: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center py-24 px-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mb-10"
          >
            <CheckCircle size={64} className="text-sandstone mx-auto" strokeWidth={1} />
          </motion.div>
          <h3 className="font-serif text-4xl md:text-5xl text-alabaster mb-6 leading-tight">
            Message Received
          </h3>
          <p className="font-sans text-sm font-light leading-[2.2] text-alabaster/60 max-w-sm mx-auto mb-12">
            Thank you, <span className="text-sandstone font-medium">{formState.name}</span>. Our travel concierge will be in touch with you shortly to craft your perfect Moroccan journey.
          </p>
          <div className="h-px w-24 bg-sandstone/30 mb-12" />
          <Link
            href="/"
            className="font-sans text-xs uppercase tracking-[0.4em] text-alabaster/50 hover:text-sandstone transition-colors flex items-center gap-3"
          >
            <ArrowLeft size={14} />
            Return Home
          </Link>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-0"
        >
          {/* Pre-filled tour info banner */}
          {preselectedTour && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 px-6 py-4 border-l-2 border-sandstone bg-sandstone/5"
            >
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-sandstone mb-1">Inquiring About</p>
              <p className="font-serif text-lg text-alabaster">{preselectedTour}</p>
            </motion.div>
          )}

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            <div className="bg-obsidian p-6 group">
              <label className="block font-sans text-[10px] uppercase tracking-[0.4em] text-sandstone mb-3">
                Full Name *
              </label>
              <input
                required
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-transparent font-sans text-base text-alabaster placeholder:text-alabaster/20 outline-none border-b border-white/10 focus:border-sandstone pb-2 transition-colors duration-300"
              />
            </div>
            <div className="bg-obsidian p-6">
              <label className="block font-sans text-[10px] uppercase tracking-[0.4em] text-sandstone mb-3">
                Email Address *
              </label>
              <input
                required
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-transparent font-sans text-base text-alabaster placeholder:text-alabaster/20 outline-none border-b border-white/10 focus:border-sandstone pb-2 transition-colors duration-300"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            <div className="bg-obsidian p-6">
              <label className="block font-sans text-[10px] uppercase tracking-[0.4em] text-sandstone mb-3">
                Phone / WhatsApp
              </label>
              <input
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="+1 000 000 0000"
                className="w-full bg-transparent font-sans text-base text-alabaster placeholder:text-alabaster/20 outline-none border-b border-white/10 focus:border-sandstone pb-2 transition-colors duration-300"
              />
            </div>
            <div className="bg-obsidian p-6">
              <label className="block font-sans text-[10px] uppercase tracking-[0.4em] text-sandstone mb-3">
                Number of Guests
              </label>
              <input
                type="number"
                name="guests"
                min="1"
                max="50"
                value={formState.guests}
                onChange={handleChange}
                className="w-full bg-transparent font-sans text-base text-alabaster placeholder:text-alabaster/20 outline-none border-b border-white/10 focus:border-sandstone pb-2 transition-colors duration-300"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            <div className="bg-obsidian p-6">
              <label className="block font-sans text-[10px] uppercase tracking-[0.4em] text-sandstone mb-3">
                Service *
              </label>
              <select
                required
                name="service"
                value={formState.service}
                onChange={handleChange}
                className="w-full bg-obsidian font-sans text-base text-alabaster outline-none border-b border-white/10 focus:border-sandstone pb-2 transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-alabaster/40">
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-obsidian">
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-obsidian p-6">
              <label className="block font-sans text-[10px] uppercase tracking-[0.4em] text-sandstone mb-3">
                Preferred Travel Dates
              </label>
              <input
                type="text"
                name="dates"
                value={formState.dates}
                onChange={handleChange}
                placeholder="e.g. June 10–20, 2025"
                className="w-full bg-transparent font-sans text-base text-alabaster placeholder:text-alabaster/20 outline-none border-b border-white/10 focus:border-sandstone pb-2 transition-colors duration-300"
              />
            </div>
          </div>

          {/* Row 4: Message */}
          <div className="bg-obsidian border-t border-white/5 p-6">
            <label className="block font-sans text-[10px] uppercase tracking-[0.4em] text-sandstone mb-3">
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell us about your dream Moroccan experience, any special requests, or questions you have…"
              className="w-full bg-transparent font-sans text-sm text-alabaster placeholder:text-alabaster/20 outline-none resize-none leading-[2] border-b border-white/10 focus:border-sandstone pb-2 transition-colors duration-300"
            />
          </div>

          {/* Submit */}
          <div className="bg-obsidian border-t border-white/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-sans text-xs text-alabaster/30 leading-relaxed max-w-sm">
              We will contact you within{" "}
              <span className="text-sandstone">24 hours</span> to confirm your
              inquiry and begin crafting your journey.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="group relative overflow-hidden bg-sandstone px-12 py-5 font-sans text-xs font-bold uppercase tracking-[0.4em] text-obsidian transition-all duration-500 hover:bg-alabaster disabled:opacity-50 flex items-center gap-4 whitespace-nowrap"
            >
              {loading ? (
                <span className="flex items-center gap-3">
                  <span className="inline-block h-4 w-4 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin" />
                  Sending…
                </span>
              ) : (
                <>
                  Send Inquiry
                  <Send size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-obsidian text-alabaster">
      {/* Back link */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 pt-8 pointer-events-none">
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.4em] text-alabaster/50 hover:text-sandstone transition-colors duration-300 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
          Home
        </Link>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16 pt-32 pb-32">

        {/* Top spacer */}
        <div className="h-[12vh] sm:h-[16vh] lg:h-[22vh]" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32 lg:mb-44"
        >
          <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.6em] text-sandstone mb-10">
            Get In Touch
          </p>
          <h1 className="font-serif text-[3.8rem] sm:text-[5rem] lg:text-[8.5rem] leading-[0.92] tracking-[-0.02em] text-alabaster max-w-5xl">
            Begin Your{" "}
            <span className="text-sandstone italic">Moroccan</span>
            <br />
            Journey
          </h1>
          <div className="mt-14 h-px w-40 bg-sandstone/30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div className="space-y-20">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.5em] text-sandstone mb-10">
                  Our Promise
                </p>
                <p className="font-sans text-base font-light leading-[2.6] text-alabaster/60 max-w-sm">
                  Every inquiry is handled personally by our travel experts. We craft each itinerary with precision, passion, and an intimate knowledge of Morocco&apos;s hidden gems.
                </p>
              </div>

              <div className="space-y-12">
                <p className="font-sans text-[11px] uppercase tracking-[0.5em] text-sandstone">
                  Reach Us Directly
                </p>

                <a
                  href="tel:+212777767855"
                  className="flex items-center gap-5 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 border border-sandstone/30 flex items-center justify-center group-hover:bg-sandstone/10 transition-colors duration-300">
                    <Phone size={16} className="text-sandstone" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-alabaster/40 mb-2">
                      Phone / WhatsApp
                    </p>
                    <p className="font-sans text-base text-alabaster group-hover:text-sandstone transition-colors duration-300">
                      +212 777-767-855
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:moroccomirage@gmail.com"
                  className="flex items-center gap-5 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 border border-sandstone/30 flex items-center justify-center group-hover:bg-sandstone/10 transition-colors duration-300">
                    <Mail size={16} className="text-sandstone" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-alabaster/40 mb-2">
                      Email
                    </p>
                    <p className="font-sans text-base text-alabaster group-hover:text-sandstone transition-colors duration-300 break-all">
                      moroccomirage@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 w-10 h-10 border border-sandstone/30 flex items-center justify-center">
                    <MapPin size={16} className="text-sandstone" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-alabaster/40 mb-2">
                      Based In
                    </p>
                    <p className="font-sans text-base text-alabaster">
                      Marrakech, Morocco
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response promise */}
            <div className="mt-24 pt-12 border-t border-white/5">
              <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-sandstone mb-6">
                Response Time
              </p>
              <p className="font-serif text-4xl text-alabaster leading-tight">
                Within{" "}
                <span className="text-sandstone">24 hours</span>
              </p>
              <p className="font-sans text-sm text-alabaster/40 mt-4 leading-[2]">
                Your journey begins the moment you reach out.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 border border-white/5"
          >
            <Suspense fallback={<div className="p-12 text-alabaster/40 font-sans text-sm">Loading form…</div>}>
              <ContactForm />
            </Suspense>
          </motion.div>
        </div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 h-px bg-gradient-to-r from-transparent via-sandstone/30 to-transparent origin-left"
        />
      </div>
    </div>
  );
}
