import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, LayoutGrid, X, StickyNote, FileDown } from "lucide-react";
import { slides } from "@/components/slides/slides";
import { useKeyboardNav } from "@/components/slides/ScaledSlide";

export default function App() {
  const print = new URLSearchParams(window.location.search).get("print") === "1";
  return print ? <PrintMode /> : <Presentation />;
}

function PrintMode() {
  useEffect(() => {
    const t = setTimeout(() => window.print(), 800);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="print-root" style={{ background: "var(--navy-deep)" }}>
      <div className="no-print fixed top-4 left-1/2 -translate-x-1/2 z-50 glass px-5 py-3 flex items-center gap-3">
        <FileDown className="w-5 h-5 text-cyan" />
        <span className="text-sm">
          Diálogo de impressão abrindo... escolha <b>Salvar como PDF</b>, layout <b>Paisagem</b>, margens <b>Nenhuma</b>.
        </span>
        <button onClick={() => window.print()} className="ml-2 px-3 py-1.5 rounded-lg bg-cyan/15 border border-cyan/40 text-cyan text-sm hover:bg-cyan/25 transition">
          Reabrir
        </button>
        <a href={import.meta.env.BASE_URL} className="px-3 py-1.5 rounded-lg border border-cyan/20 text-sm hover:bg-cyan/10 transition">Voltar</a>
      </div>
      {slides.map((s, i) => {
        const C = s.component;
        return (
          <div key={i} className="print-page">
            <C />
          </div>
        );
      })}
    </div>
  );
}

function Presentation() {
  const [index, setIndex] = useState(0);
  const [grid, setGrid] = useState(false);
  const [notes, setNotes] = useState(false);
  const total = slides.length;
  const printHref = `${import.meta.env.BASE_URL}?print=1`;

  const next = useCallback(() => setIndex((i) => Math.min(total - 1, i + 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);

  useKeyboardNav(prev, next);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "g" || e.key === "G") setGrid((g) => !g);
      else if (e.key === "n" || e.key === "N") setNotes((n) => !n);
      else if (e.key === "f" || e.key === "F") document.documentElement.requestFullscreen?.();
      else if (e.key === "p" || e.key === "P") window.open(printHref, "_blank");
      else if (e.key === "Escape") setGrid(false);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [printHref]);

  useEffect(() => {
    document.title = `${index + 1}/${total} · TCC · Observabilidade com IA`;
  }, [index, total]);

  const Current = slides[index].component;

  if (grid) {
    return (
      <div className="fixed inset-0 overflow-auto p-10 bg-navy-deep">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="slide-kicker text-cyan">Visão geral</div>
            <h1 className="text-3xl font-display font-bold gradient-text">12 slides · TCC</h1>
          </div>
          <div className="flex items-center gap-2">
            <a href={printHref} target="_blank" rel="noreferrer" className="glass px-5 py-3 flex items-center gap-2 hover:glow-cyan transition">
              <FileDown className="w-5 h-5 text-cyan" /> Exportar PDF
            </a>
            <button onClick={() => setGrid(false)} className="glass px-5 py-3 flex items-center gap-2 hover:glow-cyan transition">
              <X className="w-5 h-5" /> Fechar
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {slides.map((s, i) => {
            const C = s.component;
            return (
              <button
                key={i}
                onClick={() => { setIndex(i); setGrid(false); }}
                className={`glass overflow-hidden text-left hover:glow-cyan transition group ${i === index ? "glow-cyan" : ""}`}
                style={{ aspectRatio: "16 / 9" }}
              >
                <div className="relative w-full h-full">
                  <C />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-navy-deep/80 border border-cyan/40 font-mono text-sm text-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col">
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="glass px-4 py-2 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan pulse-dot" />
            <span className="font-mono text-sm text-muted-foreground">TCC · OBSERVABILIDADE · IA</span>
          </div>
        </div>
        <div className="flex items-center gap-2 pointer-events-auto">
          <a href={printHref} target="_blank" rel="noreferrer" className="glass px-4 py-3 flex items-center gap-2 hover:glow-cyan transition" title="Exportar para PDF (P)">
            <FileDown className="w-5 h-5 text-cyan" />
            <span className="text-sm font-medium">Exportar PDF</span>
          </a>
          <button onClick={() => setNotes((n) => !n)} className={`glass p-3 hover:glow-cyan transition ${notes ? "glow-cyan" : ""}`} title="Notas (N)">
            <StickyNote className="w-5 h-5" />
          </button>
          <button onClick={() => setGrid(true)} className="glass p-3 hover:glow-cyan transition" title="Grade (G)">
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button onClick={() => document.documentElement.requestFullscreen?.()} className="glass p-3 hover:glow-cyan transition" title="Apresentar (F)">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="flex-1 relative">
        <Current />
      </main>

      <footer className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-4 px-6 py-5 pointer-events-none">
        <div className="glass px-3 py-2 flex items-center gap-2 pointer-events-auto">
          <button onClick={prev} disabled={index === 0} className="p-2 rounded-lg hover:bg-cyan/10 disabled:opacity-30 transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1 px-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-cyan" : "w-2 bg-muted-foreground/40 hover:bg-cyan/60"}`}
              />
            ))}
          </div>
          <span className="font-mono text-sm text-muted-foreground px-3 min-w-[70px] text-center">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button onClick={next} disabled={index === total - 1} className="p-2 rounded-lg hover:bg-cyan/10 disabled:opacity-30 transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </footer>

      {notes && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 max-w-3xl w-[90%] glass p-6 glow-purple pointer-events-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="slide-kicker text-purple-glow">Sugestão de fala · slide {index + 1}</div>
            <button onClick={() => setNotes(false)} className="text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-lg leading-relaxed">{slides[index].notes}</p>
        </div>
      )}
    </div>
  );
}
