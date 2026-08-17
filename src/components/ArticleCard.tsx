import { Link } from "react-router-dom";
import type { Article } from "@/data/journal";

interface Props {
  article: Article;
  compact?: boolean;
}

export default function ArticleCard({ article, compact = false }: Props) {
  return (
    <Link to={`/journal/${article.slug}`} className="group block">
      <div className="overflow-hidden bg-[hsl(var(--warm-bg))]">
        <img
          src={article.image}
          alt={article.title}
          width={1200}
          height={800}
          loading="lazy"
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            compact ? "aspect-[3/2]" : "aspect-[4/3]"
          }`}
        />
      </div>
      <div className="mt-5">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground">
          <span>{article.category}</span>
          <span className="w-4 h-px bg-border" />
          <time dateTime={article.date}>{article.displayDate}</time>
        </div>
        <h3 className="mt-2 text-xl md:text-2xl font-light text-foreground group-hover:opacity-70 transition-opacity">
          {article.title}
        </h3>
        {!compact && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-prose">{article.excerpt}</p>
        )}
      </div>
    </Link>
  );
}
