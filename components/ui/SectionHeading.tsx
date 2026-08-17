export function SectionHeading({
  title,
  centered = false,
  eyebrow,
}: {
  title: string;
  centered?: boolean;
  eyebrow?: string;
}) {
  return (
    <div className={centered ? "section-heading centered" : "section-heading"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      <span className="orange-rule" aria-hidden="true" />
    </div>
  );
}
