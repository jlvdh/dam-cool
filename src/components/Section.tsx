import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="rounded-card p-section">
      <header className="mb-4">
        <h2 className="mb-1 font-display text-3xl leading-none tracking-tight">{title}</h2>
        {intro ? <p className="text-dam-muted">{intro}</p> : null}
      </header>
      {children}
    </section>
  );
}
