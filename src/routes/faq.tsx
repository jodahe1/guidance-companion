import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero } from "@/components/site/Layout";
import { Verify } from "@/components/site/Verify";
import { faqs } from "@/data/hotel";

const t = "Frequently Asked Questions — Gambella Hotel";
const d = "Answers about reservations, rooms, payments and your stay at Gambella Hotel in Addis Ababa.";
export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }] }),
  component: () => (
    <>
      <PageHero eyebrow="Help" title="Frequently Asked Questions"
        intro="Find answers to common questions about reservations, rooms, payments, and your stay at Gambella Hotel." />
      <section className="container-page max-w-3xl py-16">
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`}>
              <AccordionTrigger className="text-left font-serif text-xl">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {f.a ?? <>Please <Link to="/contact" className="underline">contact us</Link> for details. <Verify>Answer pending</Verify></>}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  ),
});
