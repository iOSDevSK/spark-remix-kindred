import { Link } from "react-router-dom";

interface Props {
  eyebrow?: string;
  title: string;
  linkTo?: string;
  linkLabel?: string;
}

export default function SectionHeading({ eyebrow, title, linkTo, linkLabel }: Props) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
      <div>
        {eyebrow && (
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">{eyebrow}</p>
        )}
        <h2 className="text-3xl md:text-4xl font-light text-foreground">{title}</h2>
      </div>
      {linkTo && linkLabel && (
        <Link
          to={linkTo}
          className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground border-b border-border hover:border-foreground pb-1 transition-colors"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
