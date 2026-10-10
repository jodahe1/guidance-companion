import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta, SectionHeading } from "@/components/site/Layout";
import { RoomCard } from "@/components/site/RoomCard";
import { BookingInquiryForm } from "@/components/site/Forms";
import { facilities, hotel, rooms } from "@/data/hotel";
import { img } from "@/data/images";

const title = "Gambella Hotel — Your Stay in Piassa, Addis Ababa";
const desc = "Welcome to Gambella Hotel in Piassa, Addis Ababa. Explore rooms, dining and services, and send a reservation inquiry.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[86vh] items-end overflow-hidden text-surface-dark-foreground">
        <img src={img.hero_3} alt="Guest room at Gambella Hotel with a double bed and soft lighting" className="absolute inset-0 -z-10 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 -z-10 bg-scrim" />
        <div className="container-page pb-24 pt-32">
          <p className="eyebrow mb-5">Piassa · Addis Ababa</p>
          <h1 className="max-w-3xl text-5xl leading-[1.02] md:text-7xl">Your Stay, Made Comfortable.</h1>
          <p className="mt-6 max-w-xl text-lg text-surface-dark-foreground/85">
            Welcome to Gambella Hotel. Explore our accommodation, discover our dining options, and plan your next stay in Addis Ababa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg"><Link to="/rooms">Explore Rooms</Link></Button>
            <Button asChild variant="heroOutline" size="lg"><Link to="/book">Book Your Stay</Link></Button>
          </div>
        </div>
      </section>

      <section className="container-page relative z-10 -mt-12">
        <div className="bg-card p-6 shadow-soft md:p-8">
          <p className="eyebrow mb-4">Plan your stay</p>
          <QuickSearch />
        </div>
      </section>

      <section className="container-page grid items-center gap-12 py-24 md:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Welcome" title="Welcome to Gambella Hotel" />
          <p className="text-lg leading-relaxed text-muted-foreground">
            Whether you are visiting for business, exploring Addis Ababa, or planning a short getaway, Gambella Hotel offers a convenient starting point for your stay. Explore our rooms, learn about our services, and find the accommodation that best suits your needs. Our team is here to help you plan your visit.
          </p>
          <Button asChild variant="link" className="mt-4 px-0"><Link to="/about">About the hotel →</Link></Button>
        </div>
        <img src={img.about} alt="Bright staircase landing with tall windows at Gambella Hotel" loading="lazy" className="aspect-[4/5] w-full object-cover md:max-w-md md:justify-self-end" />
      </section>

      <section className="bg-secondary py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Accommodation" title="Featured rooms" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {rooms.map((r) => <RoomCard key={r.slug} room={r} />)}
          </div>
        </div>
      </section>

      <section className="container-page grid items-center gap-12 py-24 md:grid-cols-2">
        <img src={img.slider_2} alt="Restaurant tables set beside the window" loading="lazy" className="aspect-[4/3] w-full object-cover" />
        <div>
          <SectionHeading eyebrow="Dining" title="Local and international flavours">
            Our in-house restaurant serves local and international dishes, from breakfast to dinner.
          </SectionHeading>
          <Button asChild variant="outline"><Link to="/dining">Discover dining</Link></Button>
        </div>
      </section>

      <section className="bg-surface-dark py-24 text-surface-dark-foreground">
        <div className="container-page">
          <p className="eyebrow mb-3">Facilities & services</p>
          <h2 className="mb-12 max-w-2xl text-3xl md:text-5xl">What's available to guests</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f) => (
              <div key={f.group}>
                <h3 className="border-b border-surface-dark-foreground/20 pb-3 text-xl">{f.group}</h3>
                <ul className="mt-4 space-y-2 text-sm text-surface-dark-foreground/80">
                  {f.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <Button asChild variant="heroOutline" className="mt-12"><Link to="/facilities">All facilities</Link></Button>
        </div>
      </section>

      <section className="container-page py-24">
        <SectionHeading eyebrow="Why stay with us" title="A practical base in Piassa" />
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["Central location", "In the historic Piassa area, near Ras Mekonnen Bridge."],
            ["Rooms for every trip", "From single rooms to suite apartments with their own kitchen."],
            ["Cultural Hall", "A venue for traditional ceremonies and modern gatherings."],
          ].map(([t, d]) => (
            <div key={t} className="border-t-2 border-gold pt-5">
              <h3 className="text-2xl text-primary">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Location" title="Find us" />
            <p className="flex gap-3"><MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden />{hotel.address}</p>
            <p className="mt-3 flex gap-3"><Mail className="mt-1 size-5 shrink-0 text-gold" aria-hidden /><a href={`mailto:${hotel.email}`} className="underline-offset-4 hover:underline">{hotel.email}</a></p>
            <Button asChild className="mt-8"><Link to="/contact">Contact & directions</Link></Button>
          </div>
          <img src={img.exterior} alt="View over Addis Ababa from Gambella Hotel" loading="lazy" className="aspect-[16/9] w-full object-cover" />
        </div>
      </section>

      <FinalCta />
    </>
  );
}

function QuickSearch() {
  return <BookingInquiryFormCompactLink />;
}

function BookingInquiryFormCompactLink() {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
      <p className="text-muted-foreground">
        Tell us your dates and party size — we'll reply with availability and rates. Online booking isn't live yet, so every request is an inquiry.
      </p>
      <div className="flex gap-2">
        <Button asChild size="lg"><Link to="/book">Start an inquiry</Link></Button>
        <Button asChild size="lg" variant="outline"><a href={`mailto:${hotel.email}`}>Email us</a></Button>
      </div>
    </div>
  );
}

export { BookingInquiryForm };
