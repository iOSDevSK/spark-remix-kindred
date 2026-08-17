import { Link, useParams } from "react-router-dom";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeading from "@/components/SectionHeading";
import { getArticleBySlug, getRelatedArticles } from "@/data/journal";

export default function JournalArticle() {
  const { slug = "" } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-light text-foreground mb-4">Article not found</h1>
        <Link to="/journal" className="text-sm uppercase tracking-widest border-b border-foreground pb-1">
          Back to journal
        </Link>
      </div>
    );
  }

  const related = getRelatedArticles(article.slug, 3);
  const [firstParagraph, ...restParagraphs] = article.body;

  return (
    <>
      <article>
        <header className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
          <div className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground">
            <span>{article.category}</span>
            <span className="w-4 h-px bg-border" />
            <time dateTime={article.date}>{article.displayDate}</time>
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-light text-foreground leading-tight">
            {article.title}
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">{article.excerpt}</p>
        </header>

        <div className="max-w-5xl mx-auto px-6">
          <img
            src={article.image}
            alt={article.title}
            width={1200}
            height={800}
            className="w-full aspect-[16/9] object-cover"
          />
        </div>

        <div className="max-w-2xl mx-auto px-6 py-16">
          <p className="text-lg text-foreground leading-relaxed mb-6">{firstParagraph}</p>

          {article.pullQuote && (
            <blockquote className="my-10 border-l-2 border-foreground pl-6 text-xl md:text-2xl font-light text-foreground leading-snug">
              {article.pullQuote}
            </blockquote>
          )}

          <figure className="my-10">
            <img
              src={article.inlineImage}
              alt={`${article.title} — detail`}
              width={1200}
              height={800}
              loading="lazy"
              className="w-full aspect-[3/2] object-cover"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
              In the atelier — {article.category.toLowerCase()} notes.
            </figcaption>
          </figure>

          {restParagraphs.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}

          <div className="mt-12 pt-6 border-t border-border">
            <Link
              to="/journal"
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to journal
            </Link>
          </div>
        </div>
      </article>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionHeading title="Related reading" linkTo="/journal" linkLabel="All articles" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {related.map(item => (
            <ArticleCard key={item.slug} article={item} compact />
          ))}
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
