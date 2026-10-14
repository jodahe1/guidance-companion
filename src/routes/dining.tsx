import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { FinalCta, PageHero } from "@/components/site/Layout";
import { Verify } from "@/components/site/Verify";
import { img } from "@/data/images";

const t = "Dining at Gambella Hotel — Restaurant in Piassa";
const d = "Our in-house restaurant serves local and international dishes, from breakfast to dinner.";
export const Route = createFileRoute("/dining")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] }),
  component: () => (
    <>
      <PageHero eyebrow="Dining" title="Dining at Gambella Hotel" image={img.slider_2}
        intro="Discover the dining experiences available at Gambella Hotel. Explore our food offerings and find information about menus, service hours, and available options." />
      <section className="container-page grid items-center gap-12 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl text-primary md:text-5xl">The restaurant</h2>
          <p className="mt-5 text-lg text-muted-foreground">Our chefs prepare a range of local and international dishes. Start the day with breakfast, or return for dinner after a day exploring Addis Ababa.</p>
          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex gap-3"><dt className="w-32 font-semibold">Opening hours</dt><dd><Verify /></dd></div>
            <div className="flex gap-3"><dt className="w-32 font-semibold">Breakfast</dt><dd><Verify>Times & inclusion to confirm</Verify></dd></div>
            <div className="flex gap-3"><dt className="w-32 font-semibold">Room service</dt><dd>Available <Verify>hours to confirm</Verify></dd></div>
            <div className="flex gap-3"><dt className="w-32 font-semibold">Menu</dt><dd>Available on request</dd></div>
          </dl>
          <Button asChild className="mt-8"><Link to="/contact">Contact Us</Link></Button>
        </div>
        <img src={img.slider_3} alt="Chef preparing the breakfast buffet" loading="lazy" className="aspect-[4/3] w-full object-cover" />
      </section>
      <section className="bg-secondary py-20">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <img src={img.hero_2} alt="Cultural Hall decorated with traditional art" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div>
            <h2 className="text-3xl text-primary md:text-5xl">Cultural Hall</h2>
            <p className="mt-5 text-lg text-muted-foreground">A venue celebrating Ethiopian and Gambella regional culture, suited to traditional ceremonies and modern gatherings. Contact us to discuss your event.</p>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  ),
});
