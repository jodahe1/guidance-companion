import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { hotel } from "@/data/hotel";
import { img } from "@/data/images";

const nav = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms & Suites" },
  { to: "/dining", label: "Dining" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function Wordmark() {
  return (
    <Link to="/" className="flex items-baseline gap-2" aria-label="Gambella Hotel — home">
      <span className="font-serif text-2xl font-semibold text-primary">Gambella</span>
      <span className="eyebrow">Hotel</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Wordmark />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-6 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className="py-2 text-foreground/80 transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary font-semibold" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/book">Book a Room</Link>
          </Button>
          <button
            className="rounded-sm p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {[...nav, { to: "/book", label: "Book a Room" } as const].map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base"
                  activeOptions={{ exact: n.to === "/" }}
                  activeProps={{ className: "text-primary font-semibold" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={img.logo} alt="Gambella Hotel logo" width={180} height={67} className="h-14 w-auto" loading="lazy" />
          <p className="mt-4 max-w-sm text-sm text-surface-dark-foreground/75">{hotel.shortDescription}</p>
        </div>
        <div>
          <h2 className="eyebrow mb-4">Explore</h2>
          <ul className="space-y-2 text-sm">
            {nav.slice(1).map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>
            ))}
            <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="eyebrow mb-4">Contact</h2>
          <address className="space-y-2 text-sm not-italic text-surface-dark-foreground/85">
            <p>{hotel.address}</p>
            <p><a href={`mailto:${hotel.email}`} className="hover:text-gold">{hotel.email}</a></p>
          </address>
          <ul className="mt-5 space-y-2 text-sm">
            <li><Link to="/policies" className="hover:text-gold">Booking & cancellation policy</Link></li>
            <li><Link to="/privacy" className="hover:text-gold">Privacy policy</Link></li>
            <li><Link to="/terms" className="hover:text-gold">Terms of use</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-surface-dark-foreground/15">
        <p className="container-page py-5 text-xs text-surface-dark-foreground/60">
          © {new Date().getFullYear()} Gambella Hotel, Addis Ababa.
        </p>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro, image }: { eyebrow?: string; title: string; intro?: string; image?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-surface-dark text-surface-dark-foreground">
      {image && <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />}
      {image && <div className="absolute inset-0 -z-10 bg-scrim" />}
      <div className="container-page py-20 md:py-28">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-base text-surface-dark-foreground/85 md:text-lg">{intro}</p>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl text-primary md:text-5xl">{title}</h2>
      {children && <div className="mt-4 text-muted-foreground">{children}</div>}
    </div>
  );
}

export function FinalCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl md:text-4xl">Planning a stay in Addis Ababa?</h2>
          <p className="mt-2 text-primary-foreground/80">Send us an inquiry and our team will reply with availability and rates.</p>
        </div>
        <Button asChild variant="gold" size="lg"><Link to="/book">Book Your Stay</Link></Button>
      </div>
    </section>
  );
}
