import mossStitchCardigan from "@/assets/products/spring-blade.jpg";
import cableKnitSweater from "@/assets/products/classic-set.jpg";
import merinoScarfSet from "@/assets/products/country-feast-set.jpg";
import alpacaBeanie from "@/assets/products/earth-sky-planter.jpg";
import ribbedWoolVest from "@/assets/products/golden-blush-cup.jpg";
import chunkyPullover from "@/assets/products/harvest-moon-cup.jpg";
import cashmereWrap from "@/assets/products/milk-dip-cup.jpg";
import heritageMittens from "@/assets/products/salt-spout.jpg";
import lambswoolSocks from "@/assets/products/golden-mist-pair.jpg";
import alpacaWrapCoat from "@/assets/products/alpaca-wrap-coat.jpg";
import woolGloves from "@/assets/products/wool-gloves.jpg";
import cashmereTurtleneck from "@/assets/products/cashmere-turtleneck.jpg";

/**
 * Product model kept intentionally close to the WooCommerce product schema so
 * this catalogue can later be replaced by the WooCommerce Store API:
 * slug, name, price, regular_price (originalPrice), categories, images,
 * short_description, description, attributes (sizes), stock_status.
 */
export type ProductCategory = "Knitwear" | "Scarves" | "Accessories";

export const categories: ProductCategory[] = ["Knitwear", "Scarves", "Accessories"];

export interface Product {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  sizes?: string[];
  materials: string;
  badge?: "sale" | "sold-out";
  availability?: string;
  tags?: ("new" | "best-seller" | "featured")[];
}

export const products: Product[] = [
  {
    slug: "moss-stitch-cardigan",
    name: "Moss Stitch Cardigan",
    price: 285,
    category: "Knitwear",
    image: mossStitchCardigan,
    gallery: [mossStitchCardigan, cableKnitSweater, chunkyPullover],
    shortDescription: "A relaxed hand-knitted cardigan in textured moss stitch with hand-carved wooden buttons.",
    description:
      "Hand-knitted from locally sourced wool using a textured moss stitch pattern. The relaxed silhouette drapes naturally, with hand-carved wooden buttons and ribbed cuffs for a refined finish. Made in small batches in our atelier.",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: "100% British lambswool",
    tags: ["new", "featured"],
  },
  {
    slug: "cable-knit-sweater",
    name: "Cable Knit Sweater",
    price: 320,
    category: "Knitwear",
    image: cableKnitSweater,
    gallery: [cableKnitSweater, chunkyPullover, mossStitchCardigan],
    shortDescription: "A timeless cable knit pullover in undyed heritage wool.",
    description:
      "A timeless cable knit pullover crafted from undyed heritage wool. Each twist and braid is worked by hand, creating a rich surface texture that softens beautifully with wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: "100% undyed heritage wool",
    tags: ["best-seller", "featured"],
  },
  {
    slug: "cashmere-turtleneck",
    name: "Cashmere Turtleneck",
    price: 395,
    category: "Knitwear",
    image: cashmereTurtleneck,
    gallery: [cashmereTurtleneck, cashmereWrap, ribbedWoolVest],
    shortDescription: "An oversized turtleneck in pure Mongolian cashmere.",
    description:
      "An oversized ribbed turtleneck knitted from pure Mongolian cashmere. Generously cut through the body with dropped shoulders and a soft, folded collar — the quiet centrepiece of a cold-weather wardrobe.",
    sizes: ["XS", "S", "M", "L"],
    materials: "100% Mongolian cashmere",
    tags: ["new", "best-seller", "featured"],
  },
  {
    slug: "alpaca-wrap-coat",
    name: "Alpaca Wrap Coat",
    price: 480,
    category: "Knitwear",
    image: alpacaWrapCoat,
    gallery: [alpacaWrapCoat, cashmereTurtleneck, mossStitchCardigan],
    shortDescription: "A soft, unstructured wrap coat in brushed alpaca blend.",
    description:
      "An unstructured wrap coat knitted from a brushed baby alpaca blend. Designed to be belted or left open, it layers easily over knitwear and holds its shape season after season.",
    sizes: ["S", "M", "L"],
    materials: "70% baby alpaca, 30% merino wool",
    tags: ["new"],
  },
  {
    slug: "chunky-knit-pullover",
    name: "Chunky Knit Pullover",
    price: 340,
    category: "Knitwear",
    image: chunkyPullover,
    gallery: [chunkyPullover, cableKnitSweater, cashmereTurtleneck],
    shortDescription: "A chunky-gauge herringbone pullover in hand-dyed rust wool.",
    description:
      "Our most substantial knit — a chunky-gauge pullover worked in a bold herringbone pattern. Made from hand-dyed wool in our signature rust colourway, with dropped shoulders and a relaxed fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: "100% hand-dyed wool",
    availability: "Only 4 available",
    tags: ["best-seller"],
  },
  {
    slug: "ribbed-wool-vest",
    name: "Ribbed Wool Vest",
    price: 185,
    category: "Knitwear",
    image: ribbedWoolVest,
    gallery: [ribbedWoolVest, cableKnitSweater, cashmereTurtleneck],
    shortDescription: "A deep-rib layering vest in medium-weight lambswool.",
    description:
      "A versatile layering piece in a deep rib knit, crafted from medium-weight lambswool. The V-neck and clean armholes make it perfect over a shirt or worn alone in warmer months.",
    sizes: ["XS", "S", "M", "L"],
    materials: "100% lambswool",
  },
  {
    slug: "cashmere-wrap",
    name: "Cashmere Wrap",
    price: 265,
    category: "Scarves",
    image: cashmereWrap,
    gallery: [cashmereWrap, merinoScarfSet, cashmereTurtleneck],
    shortDescription: "An oversized cashmere wrap with a soft fringed edge.",
    description:
      "An oversized wrap knitted from pure Mongolian cashmere in a delicate stockinette stitch. Finished with a subtle fringe edge, this piece is as soft as it is elegant.",
    materials: "100% Mongolian cashmere",
    tags: ["best-seller", "featured"],
  },
  {
    slug: "merino-wool-scarf-set",
    name: "Merino Wool Scarf Set",
    price: 150,
    category: "Scarves",
    image: merinoScarfSet,
    gallery: [merinoScarfSet, cashmereWrap, alpacaBeanie],
    shortDescription: "Two generously sized merino scarves in complementary earth tones.",
    description:
      "A coordinated set of two generously sized scarves in complementary earth tones. Knitted from extra-fine merino for a soft hand feel, with hand-twisted fringe detailing.",
    materials: "100% extra-fine merino wool",
  },
  {
    slug: "alpaca-blend-beanie",
    name: "Alpaca Blend Beanie",
    price: 68,
    originalPrice: 85,
    category: "Accessories",
    image: alpacaBeanie,
    gallery: [alpacaBeanie, woolGloves, heritageMittens],
    shortDescription: "A ribbed beanie in a baby alpaca and wool blend.",
    description:
      "A cosy ribbed beanie knitted from a baby alpaca and wool blend. Lightweight yet warm, with a gently slouched crown and a folded brim that fits all head sizes.",
    sizes: ["One size"],
    materials: "60% baby alpaca, 40% wool",
    badge: "sale",
    tags: ["best-seller"],
  },
  {
    slug: "heritage-mittens",
    name: "Heritage Mittens",
    price: 95,
    category: "Accessories",
    image: heritageMittens,
    gallery: [heritageMittens, woolGloves, alpacaBeanie],
    shortDescription: "Stranded colourwork mittens in undyed Shetland wool.",
    description:
      "Traditional stranded colourwork mittens inspired by Nordic knitting heritage. Knitted from sturdy Shetland wool in natural undyed shades for a piece that tells a story.",
    sizes: ["S/M", "L/XL"],
    materials: "100% Shetland wool",
    badge: "sold-out",
  },
  {
    slug: "wool-gloves",
    name: "Merino Wool Gloves",
    price: 78,
    category: "Accessories",
    image: woolGloves,
    gallery: [woolGloves, heritageMittens, alpacaBeanie],
    shortDescription: "Fine-gauge merino gloves with a ribbed cuff.",
    description:
      "Fine-gauge gloves knitted from extra-fine merino with a close ribbed cuff. Slim enough to wear under a coat sleeve, warm enough for long winter walks.",
    sizes: ["S/M", "L/XL"],
    materials: "100% extra-fine merino wool",
    tags: ["new"],
  },
  {
    slug: "lambswool-socks",
    name: "Lambswool Socks",
    price: 42,
    category: "Accessories",
    image: lambswoolSocks,
    gallery: [lambswoolSocks, woolGloves, alpacaBeanie],
    shortDescription: "Mid-calf socks in brushed lambswool with reinforced heels.",
    description:
      "A pair of mid-calf socks knitted from brushed lambswool with reinforced heels and toes. The ribbed leg ensures a snug fit, while the soft fibre keeps feet warm all day.",
    sizes: ["36–38", "39–41", "42–44"],
    materials: "80% lambswool, 20% nylon",
  },
];

export const featuredProducts = products.filter(p => p.tags?.includes("featured")).slice(0, 3);
export const newArrivals = products.filter(p => p.tags?.includes("new")).slice(0, 4);
export const bestSellers = products.filter(p => p.tags?.includes("best-seller")).slice(0, 4);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  const current = getProductBySlug(slug);
  const sameCategory = products.filter(
    p => p.slug !== slug && p.badge !== "sold-out" && p.category === current?.category
  );
  const others = products.filter(
    p => p.slug !== slug && p.badge !== "sold-out" && p.category !== current?.category
  );
  return [...sameCategory, ...others].slice(0, count);
}
