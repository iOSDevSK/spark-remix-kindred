import everydayKnitwear from "@/assets/journal/everyday-knitwear.jpg";
import timelessWardrobe from "@/assets/journal/timeless-wardrobe.jpg";
import materials from "@/assets/journal/materials.jpg";
import newCollection from "@/assets/journal/new-collection.jpg";
import atelier from "@/assets/atelier.jpg";

/**
 * Article model mirrors the WordPress REST post shape:
 * slug, title, date, categories, featured_media (image), excerpt, content.
 */
export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  displayDate: string;
  image: string;
  inlineImage: string;
  excerpt: string;
  body: string[];
  pullQuote?: string;
}

export const articles: Article[] = [
  {
    slug: "the-art-of-everyday-knitwear",
    title: "The Art of Everyday Knitwear",
    category: "Craft",
    date: "2026-03-12",
    displayDate: "12 March 2026",
    image: everydayKnitwear,
    inlineImage: atelier,
    excerpt:
      "Why the pieces we reach for most are rarely the loudest ones — and how a good knit earns its place in daily life.",
    body: [
      "There is a particular kind of garment that disappears into a life. You reach for it without thinking on a cold morning, wear it through the day, and forget you are wearing it at all. That quiet reliability is the hardest thing to design, and the thing we care about most.",
      "Everyday knitwear asks more of a garment than occasion wear ever does. It must hold its shape after the hundredth wear, soften rather than fray, and sit comfortably against skin for hours at a time. Achieving that has less to do with pattern than with tension, gauge and the character of the yarn itself.",
      "We knit at a slightly denser gauge than most, which slows production but produces a fabric that resists pilling and keeps its structure. Cuffs and hems are worked in a deep rib so they recover instead of stretching out. Seams are joined by hand where a machine would leave a hard ridge.",
    ],
    pullQuote: "A good knit should feel unremarkable to wear and impossible to replace.",
  },
  {
    slug: "how-to-build-a-timeless-wardrobe",
    title: "How to Build a Timeless Wardrobe",
    category: "Style",
    date: "2026-02-24",
    displayDate: "24 February 2026",
    image: timelessWardrobe,
    inlineImage: materials,
    excerpt:
      "A short guide to buying less and wearing it longer, built around a small number of pieces that work together.",
    body: [
      "A timeless wardrobe is not a uniform. It is a small, deliberate set of garments that share a palette and a proportion, so that almost any combination works without thought.",
      "Start with colour. Choosing a narrow range of neutrals — oatmeal, sand, charcoal, undyed cream — means every piece you own can be layered over another. Introduce colour sparingly, through a scarf or a single knit, and let the rest stay quiet.",
      "Then consider proportion. If your knitwear is generous, keep your trousers clean and straight. If your outerwear is structured, let what sits underneath be soft. Consistency in proportion does more for a wardrobe than any individual purchase.",
      "Finally, buy slowly. One well-made piece each season will outlast a drawer full of compromises, and you will find you wear it far more often.",
    ],
  },
  {
    slug: "materials-that-age-beautifully",
    title: "Materials That Age Beautifully",
    category: "Materials",
    date: "2026-01-30",
    displayDate: "30 January 2026",
    image: materials,
    inlineImage: everydayKnitwear,
    excerpt:
      "Cashmere, lambswool, alpaca and Shetland — what each fibre gives you, and how it changes with time.",
    body: [
      "Not all natural fibres age the same way. Some soften, some bloom, some hold their crispness for years. Knowing the difference is the easiest way to buy well.",
      "Lambswool is springy and forgiving. It resists creasing, holds a cable pattern crisply and develops a gentle halo after a season of wear. Shetland wool is sturdier and slightly rustic, which is exactly why it suits colourwork and outerwear.",
      "Cashmere is the softest of the four and the most demanding. Worn regularly and washed gently by hand, it becomes more supple every year. Alpaca sits between the two: warm, drapey, and naturally lustrous, with almost no lanolin — which makes it a good choice for sensitive skin.",
      "Whatever the fibre, the care is the same. Wash rarely, air often, dry flat, and store folded rather than hung.",
    ],
    pullQuote: "Good fibre does not wear out. It wears in.",
  },
  {
    slug: "behind-the-new-collection",
    title: "Behind the New Collection",
    category: "Collection",
    date: "2026-01-08",
    displayDate: "8 January 2026",
    image: newCollection,
    inlineImage: atelier,
    excerpt:
      "Notes from the atelier on the yarns, silhouettes and small decisions behind this season's pieces.",
    body: [
      "This collection began with a single skein of undyed heritage wool left over from last winter. We liked its irregularity — the way the colour shifted slightly along the length — and built the season's palette outward from there.",
      "The silhouettes are quieter than last year. Shoulders have dropped, bodies have widened slightly, and hems now sit a little lower. The aim was ease: pieces that layer without bulk and look as considered untucked as they do styled.",
      "Everything was sampled three times before it went into production, and every piece is finished by hand in our studio. It takes longer. We think you can feel it.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  return articles.filter(a => a.slug !== slug).slice(0, count);
}
