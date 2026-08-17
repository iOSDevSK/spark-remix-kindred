import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products, categories, type ProductCategory } from "@/data/products";
import { cn } from "@/lib/utils";

type SortKey = "featured" | "price-asc" | "price-desc" | "name-asc";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name-asc", label: "Alphabetical" },
];

const PAGE_SIZE = 8;

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = (searchParams.get("category") as ProductCategory | null) ?? null;
  const [sort, setSort] = useState<SortKey>("featured");
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [activeCategory, sort]);

  const filtered = useMemo(() => {
    const list = activeCategory ? products.filter(p => p.category === activeCategory) : [...products];
    switch (sort) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "name-asc":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return list;
    }
  }, [activeCategory, sort]);

  const setCategory = (category: ProductCategory | null) => {
    if (category) setSearchParams({ category });
    else setSearchParams({});
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Shop</p>
        <h1 className="text-4xl md:text-5xl font-light text-foreground">
          {activeCategory ?? "All Pieces"}
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
          Hand-knitted garments and accessories made in small batches from natural fibres.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 py-5 border-y border-border">
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => setCategory(null)}
              className={cn(
                "text-sm uppercase tracking-widest pb-1 border-b transition-colors",
                !activeCategory
                  ? "text-foreground border-foreground"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              )}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setCategory(category)}
                className={cn(
                  "text-sm uppercase tracking-widest pb-1 border-b transition-colors",
                  activeCategory === category
                    ? "text-foreground border-foreground"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-xs uppercase tracking-widest text-muted-foreground">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={e => setSort(e.target.value as SortKey)}
              className="bg-transparent border border-border px-3 py-2 text-sm text-foreground focus:outline-none focus:border-foreground"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filtered.slice(0, visible).map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Showing {Math.min(visible, filtered.length)} of {filtered.length}
          </p>
          {visible < filtered.length && (
            <button
              onClick={() => setVisible(v => v + PAGE_SIZE)}
              className="mt-5 px-10 py-3 border border-foreground text-sm uppercase tracking-widest text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
            >
              Load more
            </button>
          )}
        </div>
      </section>
    </>
  );
}
