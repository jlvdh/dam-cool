import type { Place } from "@/content/siteContent";

type PlaceCardProps = {
  place: Place;
  typeLabel: string;
};

export function PlaceCard({ place, typeLabel }: PlaceCardProps) {
  return (
    <article
      className="grid gap-2 rounded-card p-4"
      itemScope
      itemType="https://schema.org/Place"
    >
      <div className="flex gap-2 text-xs text-dam-muted">
        <span>{place.category}</span>
        <span>{place.neighborhood}</span>
      </div>
      <h3 className="font-display text-2xl leading-none tracking-tight" itemProp="name">
        {place.name}
      </h3>
      <p className="leading-6 text-dam-muted" itemProp="description">
        {place.description}
      </p>
      <p className="text-sm text-dam-muted" itemProp="address">
        {place.address}
      </p>
      <span className="inline-block w-fit rounded-chip px-2 py-1 text-xs text-dam-soft">
        {typeLabel}
      </span>
    </article>
  );
}
