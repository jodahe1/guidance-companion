import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";

const t = "Booking & Cancellation Policies — Gambella Hotel";
const d = "Booking, payment, cancellation, check-in and guest policies at Gambella Hotel.";
export const Route = createFileRoute("/policies")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] }),
  component: () => (
    <PolicyPage title="Booking & Cancellation Policies" intro="What to know before you reserve."
      sections={[
        { h: "Booking and payment", p: "Reservations are confirmed only after our team replies in writing with your rate and terms. Accepted payment methods and any deposit will be stated in that confirmation." },
        { h: "Cancellation and refunds", p: "Cancellation deadlines and refund conditions are being confirmed and will be included with each reservation confirmation." },
        { h: "Check-in and check-out", p: "Check-in and check-out times are being confirmed. Please ask our team if you need early arrival or late departure." },
        { h: "Children and additional guests", p: "Extra beds may be available on request. Policies for children and additional guests are being confirmed." },
        { h: "Smoking and pets", p: "Our smoking and pet policies are being confirmed. Please contact us before your stay." },
      ]} />
  ),
});
