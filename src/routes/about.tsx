import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { FinalCta, PageHero } from "@/components/site/Layout";
import { img } from "@/data/images";

const t = "About Gambella Hotel — Piassa, Addis Ababa";
const d = "Gambella Hotel is located in Piassa near Ras Mekonnen Bridge, with rooms, suites, a restaurant and a Cultural Hall.";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] }),
  component: () => (
    <>
      <PageHero eyebrow="Our hotel" title="About Gambella Hotel" image={img.exterior}
        intro="Welcome to Gambella Hotel. We aim to provide guests with clear information, welcoming accommodation, and helpful service throughout their stay." />
      <section className="container-page grid gap-12 py-20 md:grid-cols-2">
        <div className="space-y-5 text-lg text-muted-foreground">
          <h2 className="text-3xl text-primary md:text-5xl">In the heart of Piassa</h2>
          <p>Gambella Hotel is located in Addis Ababa's historic Piassa area, around Ras Mekonnen Bridge near 70 Dereja. Opened in 2021, the hotel welcomes both business and leisure travellers.</p>
          <p>Our accommodation ranges from Standard Single and Twin rooms to King rooms and Suite Apartments with their own kitchen and living room. Guests can also enjoy our restaurant and the Cultural Hall, a space celebrating Ethiopian and Gambella regional culture.</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild><Link to="/rooms">Explore rooms</Link></Button>
            <Button asChild variant="outline"><Link to="/contact">Contact us</Link></Button>
          </div>
        </div>
        <img src={img.about} alt="Staircase landing at Gambella Hotel" loading="lazy" className="aspect-[4/5] w-full object-cover" />
      </section>
      <FinalCta />
    </>
  ),
});
