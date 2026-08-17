import { Link } from "react-router-dom";
import aboutBg from "@/assets/about-bg.jpg";
import atelier from "@/assets/atelier.jpg";
import materials from "@/assets/journal/materials.jpg";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function About() {
  return (
    <>
      <section className="relative w-full h-[52vh] min-h-[360px]">
        <img src={aboutBg} alt="Terra Studios knitwear" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 pb-12">
            <p className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/80 mb-3">About</p>
            <h1 className="text-4xl md:text-6xl font-light text-primary-foreground">Terra Studios</h1>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-light text-foreground leading-snug mb-6">
          We make knitwear the slow way — by hand, in small batches, from fibres chosen for how they age.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Terra Studios began in 2016 in a single-room atelier with one loom, a shelf of undyed yarn and a
          stubborn belief that clothing should outlive its season. What started as a handful of cardigans
          made for friends became a small studio of six knitters working to the same simple standard:
          nothing leaves unless we would wear it ourselves for a decade.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We release two collections a year, both intentionally small. Restocks are limited by how much a
          person can knit in a week — which is, we think, exactly the right constraint.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <img
          src={atelier}
          alt="Inside the Terra Studios atelier"
          width={1200}
          height={900}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover"
        />
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Craftsmanship</p>
          <h2 className="text-3xl font-light text-foreground mb-5">Every stitch has a hand behind it</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Each garment is knitted at a denser gauge than the industry standard, which takes longer but
            produces a fabric that keeps its structure and resists pilling. Cuffs, collars and hems are worked
            in a deep rib so they recover rather than stretch.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Seams are joined by hand where a machine would leave a hard ridge, and every piece is blocked,
            pressed and inspected on the same table it was made on.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="md:order-2">
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Materials</p>
            <h2 className="text-3xl font-light text-foreground mb-5">Natural fibres, traced to source</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We work with British lambswool, undyed Shetland, extra-fine merino, baby alpaca and Mongolian
              cashmere — sourced from a small group of family-run spinners we visit each year.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Where we dye, we dye in small vats with low-impact pigments. Where we can leave a fibre in its
              natural colour, we do.
            </p>
          </div>
          <img
            src={materials}
            alt="Natural wool and cashmere yarn"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover md:order-1"
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Slow fashion</p>
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 leading-snug">
          Fewer pieces, made properly, worn for years.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We do not run seasonal sales, we do not chase trends, and we do not produce more than we can sell.
          Every garment comes with care instructions and a free repair service for life — because the most
          sustainable knit is the one you never need to replace.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-6 px-10 py-3 bg-foreground text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Explore the collection
        </Link>
      </section>

      <NewsletterSignup />
    </>
  );
}
