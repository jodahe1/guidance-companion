import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/Forms";
import { PageHero } from "@/components/site/Layout";
import { Verify } from "@/components/site/Verify";
import { hotel } from "@/data/hotel";

const t = "Find Us — Contact Gambella Hotel, Addis Ababa";
const d = "Address, directions and contact details for Gambella Hotel near Ras Mekonnen Bridge, Piassa.";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] }),
  component: () => (
    <>
      <PageHero eyebrow="Contact" title="Find Us"
        intro="Planning your visit to Gambella Hotel? Find our location, get directions, or contact our team for assistance with room reservations and general inquiries." />
      <section className="container-page grid gap-12 py-16 lg:grid-cols-2">
        <div className="space-y-6">
          <ul className="space-y-4">
            <li className="flex gap-3"><MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden />{hotel.address}</li>
            <li className="flex gap-3"><Mail className="mt-1 size-5 shrink-0 text-gold" aria-hidden /><a href={`mailto:${hotel.email}`} className="underline">{hotel.email}</a></li>
            <li className="flex gap-3"><Phone className="mt-1 size-5 shrink-0 text-gold" aria-hidden />Phone: <Verify /></li>
            <li className="flex gap-3"><Clock className="mt-1 size-5 shrink-0 text-gold" aria-hidden />Reception hours: <Verify /></li>
          </ul>
          <iframe title="Map showing Gambella Hotel" loading="lazy" className="aspect-[4/3] w-full border-0"
            src={`https://www.google.com/maps?q=${encodeURIComponent(hotel.mapQuery)}&output=embed`} />
          <a className="text-sm text-primary underline" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.mapQuery)}`}>Get directions in Google Maps</a>
        </div>
        <div className="bg-card p-6 shadow-soft md:p-10">
          <h2 className="mb-6 text-3xl text-primary">Send us a message</h2>
          <ContactForm />
        </div>
      </section>
    </>
  ),
});
