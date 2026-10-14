import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Lightbox } from "@/components/site/Lightbox";
import { PageHero } from "@/components/site/Layout";
import { gallery } from "@/data/hotel";
import { cn } from "@/lib/utils";

const t = "Photo Gallery — Gambella Hotel";
const d = "Photos of rooms, dining spaces, the Cultural Hall and views at Gambella Hotel, Addis Ababa.";
export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] }),
  component: Gallery,
});

const cats = ["All", "Rooms", "Dining", "Spaces", "Views"] as const;

function Gallery() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [lb, setLb] = useState<number | null>(null);
  const items = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);
  return (
    <>
      <PageHero eyebrow="Gallery" title="Explore Gambella Hotel"
        intro="Take a closer look at our accommodation, dining spaces, and hotel facilities through our photo gallery." />
      <section className="container-page py-16">
        <div role="group" aria-label="Filter photos" className="mb-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}
              className={cn("rounded-sm border px-4 py-2 text-sm font-semibold transition-colors", cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary")}>
              {c}
            </button>
          ))}
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((g, i) => (
            <button key={g.src} onClick={() => setLb(i)} className="mb-4 block w-full break-inside-avoid overflow-hidden" aria-label={`Open photo: ${g.alt}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="w-full transition-transform duration-500 hover:scale-105" />
            </button>
          ))}
        </div>
      </section>
      <Lightbox images={items} index={lb} onChange={setLb} />
    </>
  );
}
