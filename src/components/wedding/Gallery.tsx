import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery1.jpeg";
import g2 from "@/assets/gallery2.jpeg";
import g3 from "@/assets/gallery3.jpg";
import g4 from "@/assets/gallery4.jpeg";

const images = [g1, g2, g3, g4];

export function Gallery() {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + images.length) % images.length);
  const next = () => setI((p) => (p + 1) % images.length);

  return (
    <div className="relative">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Moment ${idx + 1}`}
            loading="lazy"
            width={896}
            height={1152}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={prev}
          className="glass rounded-full p-2.5 text-primary hover:scale-105 transition"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-accent" : "w-1.5 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="glass rounded-full p-2.5 text-primary hover:scale-105 transition"
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
