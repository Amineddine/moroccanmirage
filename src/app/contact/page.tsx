"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import RevealOnScroll from "@/components/ui/RevealOnScroll"
import Button from "@/components/ui/Button"

interface ContactItem {
  icon: React.ReactNode
  label: string
  value: string
  href: string | null
}

const contactItems: ContactItem[] = [
  { icon: <Phone size={16} />, label: "Phone", value: "+212 777-767-855", href: "tel:+212777767855" },
  { icon: <Mail size={16} />, label: "Email", value: "moroccomirage@gmail.com", href: "mailto:moroccomirage@gmail.com" },
  { icon: <MapPin size={16} />, label: "Location", value: "Marrakech, Morocco", href: null },
]

const inputClass =
  "w-full bg-obsidian border border-sandstone/20 focus:border-sandstone/60 text-alabaster font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-alabaster/30"

interface FieldWrapperProps {
  label: string
  children: React.ReactNode
}

function FieldWrapper({ label, children }: FieldWrapperProps) {
  return (
    <div>
      <label className="block font-body text-xs uppercase tracking-widest text-alabaster/50 mb-2">
        {label}
      </label>
      {children}
    </div>
  )
}

interface FormState {
  name: string
  email: string
  phone: string
  guests: string
  service: string
  dates: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    service: "",
    dates: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function update(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left column */}
        <RevealOnScroll>
          <SectionLabel className="mb-4">Get In Touch</SectionLabel>
          <h1 className="font-display text-5xl lg:text-6xl italic text-alabaster mb-8">
            Let&apos;s Craft Your Journey
          </h1>

          <div className="space-y-6 mb-12">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-sandstone mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-body text-xs text-alabaster/40 uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-body text-alabaster hover:text-sandstone transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-alabaster">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Right column — Form */}
        {submitted ? (
          <RevealOnScroll className="bg-obsidian-light border border-sandstone/20 p-12 text-center">
            <h3 className="font-display text-3xl italic text-alabaster mb-4">
              Message Received
            </h3>
            <p className="font-body text-alabaster/60">
              Thank you, {formData.name}. Our travel concierge will be in touch with you shortly.
            </p>
          </RevealOnScroll>
        ) : (
          <RevealOnScroll delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <FieldWrapper label="Full Name">
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Your full name"
                  required
                  value={formData.name}
                  onChange={update("name")}
                />
              </FieldWrapper>

              <FieldWrapper label="Email Address">
                <input
                  type="email"
                  className={inputClass}
                  placeholder="your@email.com"
                  required
                  value={formData.email}
                  onChange={update("email")}
                />
              </FieldWrapper>

              <FieldWrapper label="Phone / WhatsApp">
                <input
                  type="tel"
                  className={inputClass}
                  placeholder="+1 234 567 8900"
                  value={formData.phone}
                  onChange={update("phone")}
                />
              </FieldWrapper>

              <FieldWrapper label="Number of Guests">
                <input
                  type="number"
                  className={inputClass}
                  min="1"
                  value={formData.guests}
                  onChange={update("guests")}
                />
              </FieldWrapper>

              <FieldWrapper label="Service">
                <select
                  className={inputClass}
                  value={formData.service}
                  onChange={update("service")}
                >
                  <option value="">Select a service</option>
                  <option>Moroccan Tours</option>
                  <option>Excursions &amp; Activities</option>
                  <option>Private Airport Transfer</option>
                  <option>Customize My Trip</option>
                  <option>Other</option>
                </select>
              </FieldWrapper>

              <FieldWrapper label="Preferred Travel Dates">
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g. March 2026, flexible"
                  value={formData.dates}
                  onChange={update("dates")}
                />
              </FieldWrapper>

              <FieldWrapper label="Message">
                <textarea
                  rows={5}
                  className={inputClass}
                  placeholder="Tell us about your dream Moroccan experience..."
                  value={formData.message}
                  onChange={update("message")}
                />
              </FieldWrapper>

              <Button type="submit" variant="primary" showArrow>
                Send Inquiry
              </Button>
            </form>
          </RevealOnScroll>
        )}
      </div>
    </div>
  )
}
