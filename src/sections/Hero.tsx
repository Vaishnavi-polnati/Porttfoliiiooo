import { useEffect, useRef } from "react";
import { KineticText } from "../components/KineticText";
import { identity } from "../data/content";
import { gsap } from "../lib/gsap";
import { prefersReducedMotion } from "../lib/useReducedMotion";

export function Hero() {
  const cueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !cueRef.current) return;
    const tween = gsap.to(cueRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.1,
      ease: "sine.inOut",
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center pt-24"
      aria-label="Introduction"
    >
      <div className="section-shell">
        <p className="mb-6 flex items-center gap-3 font-sans text-fluid-sm uppercase tracking-[0.3em] text-ink-soft">
          <span className="h-px w-10 bg-iris" />
          {identity.role}
        </p>

        {/* Kinetic name — the hero typographic moment */}
        <h1 className="font-display font-semibold leading-[0.86] tracking-tight">
          <KineticText
            as="span"
            text="Vaishnavi"
            delay={0.15}
            className="block text-[clamp(2.75rem,1rem+6vw,6.5rem)] pr-[0.25em]"
            ariaLabel={identity.name}
          />
          <KineticText
            as="span"
            text="Polnati"
            delay={0.3}
            className="block text-[clamp(2.75rem,1rem+6vw,6.5rem)] text-iris-a"
            ariaLabel=""
          />
        </h1>

        <div className="mt-8 flex max-w-xl flex-wrap items-center gap-x-3 gap-y-2">
          {identity.tagline.map((word, i) => (
            <span key={word} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-iris-a" />}
              <span className="font-sans text-fluid-base text-ink-soft">{word}</span>
            </span>
          ))}
        </div>

        <p className="mt-8 max-w-md font-sans text-fluid-base text-ink-soft">
          {identity.blurb}
        </p>
      </div>

      <div
        ref={cueRef}
        className="section-shell mt-16 flex items-center gap-3 text-ink-soft"
        aria-hidden="true"
      >
        <span className="font-sans text-fluid-sm uppercase tracking-[0.25em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-iris-a to-transparent" />
      </div>
    </section>
  );
}
