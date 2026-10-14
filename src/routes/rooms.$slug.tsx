import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/site/Lightbox";
import { RoomCard, RoomFacts } from "@/components/site/RoomCard";
import { Verify } from "@/components/site/Verify";
import { getRoom, hotel, rooms } from "@/data/hotel";

export const Route = createFileRoute("/rooms/$slug")({
  loader: ({ params }) => {
    const room = getRoom(params.slug);
    if (!room) throw notFound();
    return { room };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Room not found — Gambella Hotel" }, { name: "robots", content: "noindex" }] };
    const t = `${loaderData.room.name} — Gambella Hotel`;
    return { meta: [{ title: t }, { name: "description", content: loaderData.room.summary }, { property: "og:title", content: t }, { property: "og:description", content: loaderData.room.summary }] };
  },
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-4xl text-primary">Room not found</h1>
      <Button asChild className="mt-6"><Link to="/rooms">See all rooms</Link></Button>
    </div>
  ),
  component: RoomPage,
});

function RoomPage() {
  const { room } = Route.useLoaderData();
  const [lb, setLb] = useState<number | null>(null);
  const main = room.images[0]!;
  const rest = room.images.slice(1);
  return (
    <>
      <nav aria-label="Breadcrumb" className="container-page pt-8 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/rooms" className="hover:text-primary">Rooms & Suites</Link> / <span className="text-foreground">{room.name}</span>
      </nav>
      <section className="container-page grid gap-3 py-8 md:grid-cols-4 md:grid-rows-2">
        <button onClick={() => setLb(0)} className="md:col-span-2 md:row-span-2" aria-label={`Open photo: ${main.alt}`}>
          <img src={main.src} alt={main.alt} className="aspect-[4/3] h-full w-full object-cover" />
        </button>
        {rest.slice(0, 4).map((im, i) => (
          <button key={im.src} onClick={() => setLb(i + 1)} className="relative hidden md:block" aria-label={`Open photo: ${im.alt}`}>
            <img src={im.src} alt={im.alt} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
            {i === 3 && room.images.length > 5 && <span className="absolute inset-0 flex items-center justify-center bg-surface-dark/60 text-sm font-semibold text-surface-dark-foreground">+{room.images.length - 5} photos</span>}
          </button>
        ))}
        <Button variant="outline" size="sm" className="md:hidden" onClick={() => setLb(0)}>View all {room.images.length} photos</Button>
      </section>
      <Lightbox images={room.images} index={lb} onChange={setLb} />

      <section className="container-page grid gap-12 pb-20 lg:grid-cols-[1fr_22rem]">
        <div>
          <h1 className="text-4xl text-primary md:text-6xl">{room.name}</h1>
          <div className="mt-5"><RoomFacts room={room} /></div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{room.description}</p>
          <h2 className="mt-12 text-3xl text-primary">In the room</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {room.amenities.map((a) => <li key={a} className="flex gap-2"><Check className="size-5 text-gold" aria-hidden />{a}</li>)}
          </ul>
          <h2 className="mt-12 text-3xl text-primary">Cancellation & payment</h2>
          <p className="mt-3 text-muted-foreground">Terms are shared with your rate when we reply to your inquiry. <Verify /> See our <Link to="/policies" className="underline">booking policies</Link>.</p>
        </div>
        <aside className="h-fit bg-card p-6 shadow-soft lg:sticky lg:top-24">
          <p className="eyebrow">Rate</p>
          <p className="mt-2 font-serif text-3xl text-primary">On request</p>
          <p className="mt-2 text-sm text-muted-foreground">Rates depend on dates and party size. Send an inquiry and our team will reply.</p>
          <Button asChild className="mt-6 w-full" size="lg"><Link to="/book" search={{ room: room.slug }}>Check Availability</Link></Button>
          <Button asChild variant="outline" className="mt-2 w-full"><a href={`mailto:${hotel.email}?subject=${encodeURIComponent(room.name + " inquiry")}`}>Email the hotel</a></Button>
        </aside>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-page">
          <h2 className="mb-10 text-3xl text-primary md:text-4xl">Other rooms</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {rooms.filter((r) => r.slug !== room.slug).map((r) => <RoomCard key={r.slug} room={r} />)}
          </div>
        </div>
      </section>
    </>
  );
}
