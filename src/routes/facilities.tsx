import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, PageHero } from "@/components/site/Layout";
import { Verify } from "@/components/site/Verify";
import { facilities } from "@/data/hotel";
import { img } from "@/data/images";

const t = "Facilities & Services — Gambella Hotel";
const d = "Wi-Fi, restaurant, airport transfer, laundry, room service and more at Gambella Hotel, Addis Ababa.";
export const Route = createFileRoute("/facilities")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] }),
  component: () => (
    <>
      <PageHero eyebrow="Services" title="Facilities & Services" image={img.e9754}
        intro="At Gambella Hotel, we want you to know what to expect before you arrive. Explore our available facilities and guest services to help plan a convenient and comfortable stay." />
      <section className="container-page py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {facilities.map((f) => (
            <div key={f.group} className="bg-card p-8 shadow-soft">
              <h2 className="text-3xl text-primary">{f.group}</h2>
              <ul className="mt-5 divide-y divide-border">
                {f.items.map((i) => <li key={i} className="flex items-center justify-between gap-4 py-3"><span>{i}</span><Verify>Hours & charges</Verify></li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  ),
});
