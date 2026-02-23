import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  badge,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {badge ? <Badge className="mb-3">{badge}</Badge> : null}
      <div className={align === "center" ? "mx-auto editorial-line" : "editorial-line"} />
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
