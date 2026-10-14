import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";

const t = "Terms of Use — Gambella Hotel";
const d = "Terms for using the Gambella Hotel website.";
export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] }),
  component: () => (
    <PolicyPage title="Terms of Use" intro="Using the Gambella Hotel website."
      sections={[
        { h: "Information on this site", p: "We aim to keep room, dining and facility information accurate, but details may change. Please confirm important details with our team before you travel." },
        { h: "No online reservations", p: "Submitting a form on this website does not create a reservation or a contract. A stay is reserved only once confirmed in writing by the hotel." },
        { h: "Photos", p: "Photos show the hotel's spaces and rooms; individual rooms may vary." },
      ]} />
  ),
});
