import { useState } from "react";
import { Info, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hotel, rooms } from "@/data/hotel";

const field =
  "mt-1.5 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus-visible:border-gold aria-[invalid=true]:border-destructive";
const label = "text-sm font-semibold";

export function PrototypeNotice() {
  return (
    <p className="flex gap-2 rounded-sm border border-dashed border-gold bg-gold/10 p-3 text-sm">
      <Info className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
      Online booking isn't connected yet. This form prepares an email to our team — it is an inquiry, not a confirmed reservation, and no payment is taken.
    </p>
  );
}

function Err({ id, msg }: { id: string; msg?: string | undefined }) {
  return msg ? <p id={id} role="alert" className="mt-1 text-xs text-destructive">{msg}</p> : null;
}

function Ready({ subject, body, onReset }: { subject: string; body: string; onReset: () => void }) {
  const href = `mailto:${hotel.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <div role="status" className="space-y-4 rounded-sm border border-border bg-card p-6">
      <h3 className="text-2xl text-primary">Your inquiry is ready to send</h3>
      <p className="text-sm text-muted-foreground">
        Nothing has been sent yet. Open the email draft and press send in your email app. Our team will reply to confirm availability and rates — your stay is not reserved until they do.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button asChild><a href={href}><Mail /> Open email draft</a></Button>
        <Button variant="outline" onClick={onReset}>Edit details</Button>
      </div>
    </div>
  );
}

type Errs = Partial<Record<"checkIn" | "checkOut" | "name" | "email" | "message", string>>;

const todayISO = () => new Date().toISOString().slice(0, 10);

export function validateStay(v: { checkIn: string; checkOut: string }, today = todayISO()) {
  const e: Errs = {};
  if (!v.checkIn) e.checkIn = "Choose a check-in date.";
  else if (v.checkIn < today) e.checkIn = "Check-in can't be in the past.";
  if (!v.checkOut) e.checkOut = "Choose a check-out date.";
  else if (v.checkIn && v.checkOut <= v.checkIn) e.checkOut = "Check-out must be after check-in.";
  return e;
}

const emailOk = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export function BookingInquiryForm({ initialRoom = "", compact = false }: { initialRoom?: string; compact?: boolean }) {
  const [v, setV] = useState({ checkIn: "", checkOut: "", adults: "2", children: "0", roomsCount: "1", room: initialRoom, name: "", email: "", phone: "", notes: "" });
  const [errors, setErrors] = useState<Errs>({});
  const [ready, setReady] = useState(false);
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setV({ ...v, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateStay(v);
    if (!v.name.trim()) errs.name = "Enter your full name.";
    if (!emailOk(v.email)) errs.email = "Enter a valid email address.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setReady(true);
  };

  if (ready) {
    const roomName = rooms.find((r) => r.slug === v.room)?.name ?? "No preference";
    const body = `Reservation inquiry\n\nName: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone || "-"}\nCheck-in: ${v.checkIn}\nCheck-out: ${v.checkOut}\nAdults: ${v.adults}\nChildren: ${v.children}\nRooms: ${v.roomsCount}\nRoom type: ${roomName}\n\nNotes:\n${v.notes || "-"}`;
    return <Ready subject={`Reservation inquiry — ${v.checkIn} to ${v.checkOut}`} body={body} onReset={() => setReady(false)} />;
  }

  const inp = (k: keyof typeof v, lbl: string, type = "text", extra: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div>
      <label htmlFor={`b-${k}`} className={label}>{lbl}</label>
      <input id={`b-${k}`} type={type} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k as keyof Errs]} aria-describedby={errors[k as keyof Errs] ? `b-${k}-err` : undefined} className={field} {...extra} />
      <Err id={`b-${k}-err`} msg={errors[k as keyof Errs]} />
    </div>
  );
  const num = (k: keyof typeof v, lbl: string, min: number, max: number) => (
    <div>
      <label htmlFor={`b-${k}`} className={label}>{lbl}</label>
      <select id={`b-${k}`} value={v[k]} onChange={set(k)} className={field}>
        {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((n) => <option key={n}>{n}</option>)}
      </select>
    </div>
  );

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        {inp("checkIn", "Check-in", "date", { min: todayISO() })}
        {inp("checkOut", "Check-out", "date", { min: v.checkIn || todayISO() })}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {num("adults", "Adults", 1, 8)}
        {num("children", "Children", 0, 6)}
        {num("roomsCount", "Rooms", 1, 6)}
      </div>
      {!compact && (
        <>
          <div>
            <label htmlFor="b-room" className={label}>Room type</label>
            <select id="b-room" value={v.room} onChange={set("room")} className={field}>
              <option value="">No preference</option>
              {rooms.map((r) => <option key={r.slug} value={r.slug}>{r.name}</option>)}
            </select>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {inp("name", "Full name", "text", { autoComplete: "name" })}
            {inp("email", "Email", "email", { autoComplete: "email" })}
          </div>
          {inp("phone", "Phone (optional)", "tel", { autoComplete: "tel" })}
          <div>
            <label htmlFor="b-notes" className={label}>Notes (optional)</label>
            <textarea id="b-notes" rows={4} value={v.notes} onChange={set("notes")} className={field} />
          </div>
        </>
      )}
      {compact ? null : <PrototypeNotice />}
      <Button type="submit" size="lg" className="w-full sm:w-auto">Prepare inquiry</Button>
    </form>
  );
}

export function ContactForm() {
  const [v, setV] = useState({ name: "", email: "", phone: "", topic: "Reservation", message: "" });
  const [errors, setErrors] = useState<Errs>({});
  const [ready, setReady] = useState(false);
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setV({ ...v, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Errs = {};
    if (!v.name.trim()) errs.name = "Enter your full name.";
    if (!emailOk(v.email)) errs.email = "Enter a valid email address.";
    if (v.message.trim().length < 10) errs.message = "Please write a message of at least 10 characters.";
    setErrors(errs);
    if (!Object.keys(errs).length) setReady(true);
  };
  if (ready)
    return <Ready subject={`${v.topic} inquiry from ${v.name}`} body={`${v.message}\n\n${v.name}\n${v.email}\n${v.phone}`} onReset={() => setReady(false)} />;
  const err = (k: keyof Errs) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `c-${k}-err` : undefined });
  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label htmlFor="c-name" className={label}>Full name</label><input id="c-name" value={v.name} onChange={set("name")} className={field} {...err("name")} /><Err id="c-name-err" msg={errors.name} /></div>
        <div><label htmlFor="c-email" className={label}>Email</label><input id="c-email" type="email" value={v.email} onChange={set("email")} className={field} {...err("email")} /><Err id="c-email-err" msg={errors.email} /></div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label htmlFor="c-phone" className={label}>Phone (optional)</label><input id="c-phone" type="tel" value={v.phone} onChange={set("phone")} className={field} /></div>
        <div>
          <label htmlFor="c-topic" className={label}>Inquiry type</label>
          <select id="c-topic" value={v.topic} onChange={set("topic")} className={field}>
            {["Reservation", "Rooms", "Dining", "General"].map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div><label htmlFor="c-message" className={label}>Message</label><textarea id="c-message" rows={5} value={v.message} onChange={set("message")} className={field} {...err("message")} /><Err id="c-message-err" msg={errors.message} /></div>
      <p className="text-xs text-muted-foreground">Prototype: submitting prepares an email draft to {hotel.email}; nothing is sent automatically.</p>
      <Button type="submit" size="lg">Prepare message</Button>
    </form>
  );
}
