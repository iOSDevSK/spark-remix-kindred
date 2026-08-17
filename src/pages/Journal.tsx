import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { articles } from "@/data/journal";

export default function Journal() {
  const [lead, ...rest] = articles;

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Journal</p>
        <h1 className="text-4xl md:text-5xl font-light text-foreground">Notes from the Studio</h1>
        <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
          Writing on craft, materials and dressing slowly — from the people who make our knitwear.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <ArticleCard article={lead} />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-border">
          {rest.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
