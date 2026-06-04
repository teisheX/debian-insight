import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

interface ScaledSlideProps {
  children: ReactNode;
}

export function ScaledSlide({ children }: ScaledSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const { width, height } = el.getBoundingClientRect();
      setScale(Math.min(width / 1920, height / 1080));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <div className="slide-wrapper" style={{ ["--scale" as any]: scale }}>
        <div className="slide-content">{children}</div>
      </div>
    </div>
  );
}

interface SlideChromeProps {
  index: number;
  total: number;
  title: string;
  children: ReactNode;
  kicker?: string;
}

export function SlideChrome({ index, total, title, children, kicker }: SlideChromeProps) {
  return (
    <div className="absolute inset-0 grid-bg">
      <div className="slide-content" style={{ padding: "96px 128px" }}>
        <div className="flex items-start justify-between mb-12">
          <div>
            {kicker && <div className="slide-kicker mb-4">{kicker}</div>}
            <h2 className="slide-title gradient-text max-w-[1500px]">{title}</h2>
          </div>
          <div className="slide-chrome flex items-center gap-3 mt-2">
            <span className="w-2 h-2 rounded-full bg-cyan pulse-dot" />
            <span>{String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
          </div>
        </div>
        <div className="relative" style={{ height: "calc(1080px - 96px - 96px - 200px)" }}>
          {children}
        </div>
        <div className="absolute bottom-12 left-32 right-32 flex items-center justify-between slide-chrome">
          <span>// TCC · Observabilidade com IA</span>
          <span className="text-cyan">obs.vps.ai</span>
        </div>
      </div>
    </div>
  );
}

export function useKeyboardNav(onPrev: () => void, onNext: () => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); onNext(); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); onPrev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onPrev, onNext]);
}
