import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function Lightbox({ images, index, onChange }: { images: { src: string; alt: string }[]; index: number | null; onChange: (i: number | null) => void }) {
  const open = index !== null;
  const cur = open ? images[index] : null;
  const go = (d: number) => index !== null && onChange((index + d + images.length) % images.length);
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onChange(null)}>
      <DialogContent
        className="max-w-5xl border-none bg-surface-dark p-2 text-surface-dark-foreground [&>button]:hidden"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
      >
        <DialogTitle className="sr-only">{cur?.alt ?? "Photo"}</DialogTitle>
        {cur && <img src={cur.src} alt={cur.alt} className="max-h-[80vh] w-full object-contain" />}
        <div className="flex items-center justify-between px-2 pb-1 text-sm">
          <button onClick={() => go(-1)} aria-label="Previous photo" className="p-2 hover:text-gold"><ChevronLeft /></button>
          <span>{cur?.alt} · {(index ?? 0) + 1}/{images.length}</span>
          <div className="flex">
            <button onClick={() => go(1)} aria-label="Next photo" className="p-2 hover:text-gold"><ChevronRight /></button>
            <button onClick={() => onChange(null)} aria-label="Close" className="p-2 hover:text-gold"><X /></button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
