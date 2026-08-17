import { Minus, Plus } from "lucide-react";

interface Props {
  quantity: number;
  onChange: (q: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({ quantity, onChange, min = 1, max = 99 }: Props) {
  return (
    <div className="flex items-center border border-border w-fit">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-muted transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus className="w-3.5 h-3.5" />
      </button>
      <input
        type="number"
        value={quantity}
        onChange={e => {
          const val = parseInt(e.target.value);
          if (!isNaN(val)) onChange(Math.min(max, Math.max(min, val)));
        }}
        className="w-12 h-10 bg-transparent text-center text-sm text-foreground focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        min={min}
        max={max}
        aria-label="Quantity"
      />
      <button
        type="button"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-muted transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
