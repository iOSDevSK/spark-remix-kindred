import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const FREE_SHIPPING_THRESHOLD = 200;

function Field({
  id,
  label,
  type = "text",
  autoComplete,
  className,
  required = true,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
      />
    </div>
  );
}

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [payment, setPayment] = useState<"card" | "paypal">("card");
  const [placing, setPlacing] = useState(false);

  if (items.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-light text-foreground mb-4">Nothing to check out</h1>
        <p className="text-muted-foreground mb-8">Add a piece to your cart to continue.</p>
        <Link
          to="/shop"
          className="inline-block px-10 py-3 bg-foreground text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Browse the shop
        </Link>
      </section>
    );
  }

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 12;
  const tax = subtotal * 0.21;
  const total = subtotal + shipping + tax;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setPlacing(true);
    await new Promise(resolve => setTimeout(resolve, 900));
    clearCart();
    setPlacing(false);
    toast({
      title: "Order placed",
      description: "This is a demo checkout — no payment was taken.",
    });
    navigate("/");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-24">
      <h1 className="text-4xl md:text-5xl font-light text-foreground mb-12">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
        <div className="space-y-12">
          <fieldset>
            <legend className="text-xl font-light text-foreground mb-6">Contact information</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field id="email" label="Email" type="email" autoComplete="email" className="sm:col-span-2" placeholder="you@example.com" />
              <Field id="phone" label="Phone" type="tel" autoComplete="tel" required={false} placeholder="Optional" />
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-xl font-light text-foreground mb-6">Shipping details</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field id="firstName" label="First name" autoComplete="given-name" />
              <Field id="lastName" label="Last name" autoComplete="family-name" />
              <Field id="address" label="Address" autoComplete="address-line1" className="sm:col-span-2" />
              <Field id="apartment" label="Apartment, suite" autoComplete="address-line2" required={false} className="sm:col-span-2" placeholder="Optional" />
              <Field id="city" label="City" autoComplete="address-level2" />
              <Field id="postcode" label="Postal code" autoComplete="postal-code" />
              <div className="sm:col-span-2">
                <label htmlFor="country" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  defaultValue="Netherlands"
                  className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground"
                >
                  {["Netherlands", "Germany", "France", "Belgium", "United Kingdom", "United States"].map(c => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-xl font-light text-foreground mb-6">Payment</legend>
            <div className="border border-border">
              {(["card", "paypal"] as const).map(method => (
                <div key={method} className="border-b border-border last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setPayment(method)}
                    className="w-full flex items-center gap-3 px-5 py-4 text-left"
                  >
                    <span
                      className={cn(
                        "w-4 h-4 rounded-full border flex items-center justify-center",
                        payment === method ? "border-foreground" : "border-border"
                      )}
                    >
                      {payment === method && <span className="w-2 h-2 rounded-full bg-foreground" />}
                    </span>
                    <span className="text-sm text-foreground">
                      {method === "card" ? "Credit or debit card" : "PayPal"}
                    </span>
                  </button>

                  {method === "card" && payment === "card" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-5 pb-6">
                      <Field id="cardNumber" label="Card number" autoComplete="cc-number" className="sm:col-span-2" placeholder="4242 4242 4242 4242" />
                      <Field id="cardExpiry" label="Expiry" autoComplete="cc-exp" placeholder="MM / YY" />
                      <Field id="cardCvc" label="CVC" autoComplete="cc-csc" placeholder="123" />
                    </div>
                  )}
                  {method === "paypal" && payment === "paypal" && (
                    <p className="px-5 pb-6 text-sm text-muted-foreground">
                      You will be redirected to PayPal to complete your purchase.
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Lock className="w-3.5 h-3.5" />
              Demo checkout — no payment is processed and no card details are stored.
            </p>
          </fieldset>
        </div>

        <aside className="bg-background border border-border p-8 h-fit lg:sticky lg:top-24">
          <h2 className="text-xl font-light text-foreground mb-6">Order summary</h2>

          <div className="space-y-5 pb-6 border-b border-border">
            {items.map(item => (
              <div key={item.id} className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-16 aspect-[4/5] object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.size ? `${item.size} · ` : ""}Qty {item.quantity}
                  </p>
                </div>
                <p className="text-sm text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3 py-6 text-sm border-b border-border">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-foreground">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax (21%)</span>
              <span className="text-foreground">${tax.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-between items-baseline py-6">
            <span className="text-foreground">Total</span>
            <span className="text-2xl font-light text-foreground">${total.toFixed(2)}</span>
          </div>

          <button
            type="submit"
            disabled={placing}
            className="w-full py-4 bg-foreground text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {placing ? "Placing order…" : "Place order"}
          </button>

          <Link
            to="/cart"
            className="mt-4 block text-center text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            Return to cart
          </Link>
        </aside>
      </form>
    </section>
  );
}
