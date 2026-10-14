import { createFileRoute } from "@tanstack/react-router";
import { BookingInquiryForm } from "@/components/site/Forms";
import { PageHero } from "@/components/site/Layout";
import { hotel } from "@/data/hotel";

const t = "Book a Room — Reservation Inquiry | Gambella Hotel";
const d = "Send a reservation inquiry to Gambella Hotel in Addis Ababa with your dates, guests and preferred room.";
export const Route = createFileRoute("/book")({
  validateSearch: (s: Record<string, unknown>): { room?: string } => (typeof s.room === "string" ? { room: s.room } : {}),
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] }),
  component: Book,
});

function Book() {
  const { room } = Route.useSearch();
  return (
    <>
      <PageHero eyebrow="Reservations" title="Book a Room" intro="Tell us when you'd like to stay. We'll reply with availability and rates — your request is an inquiry, not a confirmed booking." />
      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_20rem]">
        <div className="bg-card p-6 shadow-soft md:p-10"><BookingInquiryForm initialRoom={room ?? ""} /></div>
        <aside className="space-y-4 text-sm text-muted-foreground">
          <h2 className="text-2xl text-primary">Prefer to write directly?</h2>
          <p>Email our reservations team at <a className="text-primary underline" href={`mailto:${hotel.email}`}>{hotel.email}</a>.</p>
          <p>Include your dates, number of guests and room preference so we can respond quickly.</p>
        </aside>
      </section>
    </>
  );
}
