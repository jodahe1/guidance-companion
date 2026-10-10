import { Link } from "@tanstack/react-router";
import { BedDouble, Maximize2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Room } from "@/data/hotel";
import { Verify } from "./Verify";

export function RoomFacts({ room }: { room: Room }) {
  const facts = [
    { icon: BedDouble, label: room.bed },
    { icon: Users, label: room.occupancy },
    { icon: Maximize2, label: room.size },
  ];
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
      {facts.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-1.5">
          <Icon className="size-4 text-gold" aria-hidden />
          {label === "Confirm with hotel" ? <Verify /> : label}
        </li>
      ))}
    </ul>
  );
}

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group flex flex-col overflow-hidden bg-card shadow-soft">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={room.images[0].src}
          alt={room.images[0].alt}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl text-primary">{room.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{room.summary}</p>
        <div className="mt-4"><RoomFacts room={room} /></div>
        <p className="mt-4 text-sm">Rate: <span className="font-semibold">on request</span></p>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <Button asChild variant="outline" size="sm">
            <Link to="/rooms/$slug" params={{ slug: room.slug }}>View Details</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/book" search={{ room: room.slug }}>Check Availability</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
