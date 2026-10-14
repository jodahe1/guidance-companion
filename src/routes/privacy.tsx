import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";

const t = "Privacy Policy — Gambella Hotel";
const d = "How Gambella Hotel handles information you share through this website.";
export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] }),
  component: () => (
    <PolicyPage title="Privacy Policy" intro="How we handle the information you share with us."
      sections={[
        { h: "What this website collects", p: "The inquiry and contact forms on this website do not store or transmit your information. They prepare an email in your own email app, which you choose whether to send." },
        { h: "Emails you send us", p: "When you email the hotel, we use your details only to respond to your inquiry and manage your stay." },
        { h: "Questions", p: "For privacy questions, please contact us at info@gambellahotel.com." },
      ]} />
  ),
});
