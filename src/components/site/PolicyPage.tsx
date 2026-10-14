import { PageHero } from "./Layout";
import { Verify } from "./Verify";

export function PolicyPage({ title, intro, sections }: { title: string; intro: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero eyebrow="Policies" title={title} intro={intro} />
      <article className="container-page max-w-3xl space-y-10 py-16">
        <p className="text-sm"><Verify>Draft — to be reviewed and approved by Gambella Hotel</Verify></p>
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-2xl text-primary md:text-3xl">{s.h}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.p}</p>
          </section>
        ))}
      </article>
    </>
  );
}
