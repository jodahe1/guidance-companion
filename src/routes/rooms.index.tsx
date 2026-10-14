import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, PageHero } from "@/components/site/Layout";
import { RoomCard } from "@/components/site/RoomCard";
import { rooms } from "@/data/hotel";
import { img } from "@/data/images";

const t = "Rooms & Suites — Gambella Hotel, Addis Ababa";
const d = "Compare Standard Single, Twin, King and Suite Apartment rooms at Gambella Hotel in Piassa.";
export const Route = createFileRoute("/rooms/")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] }),
  component: () => (
    <>
      <PageHero eyebrow="Accommodation" title="Rooms & Suites" image={img.hero_1}
        intro="Find the right room for your stay at Gambella Hotel. Explore our available accommodation, compare room features, and review the details you need before making a reservation." />
      <section className="container-page py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {rooms.map((r) => <RoomCard key={r.slug} room={r} />)}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">Rates vary by date and are provided on request. Room sizes and occupancy are being confirmed with the hotel.</p>
      </section>
      <FinalCta />
    </>
  ),
});
