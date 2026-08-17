import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import coreCollection from "@/assets/collections/core-collection.jpg";
import setsAndPairs from "@/assets/collections/sets-and-pairs.jpg";
import atelier from "@/assets/atelier.jpg";
import NewsletterSignup from "@/components/NewsletterSignup";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/SectionHeading";
import { featuredProducts, newArrivals, bestSellers } from "@/data/products";
import { articles } from "@/data/journal";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="w-full h-[78vh] relative -mt-[72px]">
        <img
          src={heroBg}
          alt="Model wearing handcrafted Terra Studios knitwear"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(30_30%_22%/0.32)]" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto">
            <p className="text-primary-foreground/80 text-xs uppercase tracking-[0.25em] mb-4">
              Autumn / Winter 2026
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground tracking-wide leading-none">
              New Collection
            </h1>
            <Link
              to="/shop"
              className="inline-block mt-8 px-8 py-3 bg-background text-foreground text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Shop the collection
            </Link>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <h2 className="text-3xl md:text-4xl font-light text-foreground leading-snug">
            Handcrafted knitwear for every season.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured collection */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Link to="/shop?category=Knitwear" className="relative overflow-hidden group block">
            <img
              src={coreCollection}
              alt="The Knitwear collection"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-foreground/25 group-hover:bg-foreground/35 transition-colors duration-500 flex flex-col justify-between p-8">
              <span className="text-sm uppercase tracking-widest text-primary-foreground/80">Featured collection</span>
              <h3 className="text-2xl md:text-3xl font-light text-primary-foreground">Knitwear</h3>
            </div>
          </Link>
          <Link to="/shop?category=Scarves" className="relative overflow-hidden group block">
            <img
              src={setsAndPairs}
              alt="Scarves and wraps"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-foreground/25 group-hover:bg-foreground/35 transition-colors duration-500 flex flex-col justify-between p-8">
              <span className="text-sm uppercase tracking-widest text-primary-foreground/80">Featured collection</span>
              <h3 className="text-2xl md:text-3xl font-light text-primary-foreground">Scarves &amp; Wraps</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* New arrivals */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionHeading eyebrow="Just in" title="New Arrivals" linkTo="/shop" linkLabel="View all" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Brand story */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <img
            src={atelier}
            alt="The Terra Studios atelier"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover"
          />
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Our story</p>
            <h2 className="text-3xl md:text-4xl font-light text-foreground leading-snug mb-6">
              Made slowly, in small batches.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Terra Studios began in a small atelier with a single loom and a belief that clothing should
              outlive its season. Every piece is knitted by hand from natural fibres, finished with care and
              made to be worn for years rather than months.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We work with a handful of family-run spinners across Europe, choosing yarn for how it ages
              rather than how it photographs.
            </p>
            <Link
              to="/about"
              className="inline-block text-sm uppercase tracking-widest text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
            >
              Read our story
            </Link>
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeading eyebrow="Loved most" title="Best Sellers" linkTo="/shop" linkLabel="Shop all" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Journal */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Journal" title="From the Studio" linkTo="/journal" linkLabel="All articles" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {articles.slice(0, 2).map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
