import {
  Server, Cpu, Activity, Bell, Database, Bot, Shield, Cloud, GitBranch,
  Workflow, BarChart3, Network, Lock, Zap, Eye, Target, AlertTriangle,
  CheckCircle2, MessageSquare, Terminal, Layers, Settings, LineChart,
  Code2, Brain, Sparkles, Rocket, ArrowRight, Wrench,
} from "lucide-react";
import { ScaledSlide, SlideChrome } from "./ScaledSlide";

const TOTAL = 12;

/* ============ SLIDE 1 — TÍTULO ============ */
export function Slide01() {
  return (
    <ScaledSlide>
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 slide-content flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center glow-cyan">
              <Activity className="w-7 h-7 text-cyan" />
            </div>
            <div className="slide-kicker">TCC · 2026</div>
          </div>
          <div className="slide-chrome flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan pulse-dot" />
            <span>01 / 12</span>
          </div>
        </div>

        <div className="max-w-[1500px]">
          <div className="slide-kicker mb-8">Defesa de Trabalho de Conclusão de Curso</div>
          <h1 className="slide-title-lg gradient-text mb-10">
            Plataforma Web de Observabilidade para VPS Debian com Apoio de Inteligência Artificial
          </h1>
          <p className="slide-subtitle max-w-[1300px]">
            Aplicação de DevOps, SRE e IA no monitoramento de serviços em ambiente de VPS.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {[
            { label: "Aluno", value: "Nome do Aluno" },
            { label: "Curso", value: "Análise e Desenvolvimento de Sistemas" },
            { label: "Instituição", value: "Nome da Instituição" },
            { label: "Orientador", value: "Prof. Nome" },
            { label: "Ano", value: "2026" },
          ].map((m) => (
            <div key={m.label} className="glass p-6">
              <div className="slide-chrome text-cyan mb-2">{m.label}</div>
              <div className="text-2xl font-semibold leading-tight">{m.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* floating tech icons */}
      <div className="absolute top-40 right-40 opacity-30">
        <Server className="w-28 h-28 text-purple" />
      </div>
      <div className="absolute top-1/2 right-72 opacity-25">
        <Brain className="w-20 h-20 text-cyan" />
      </div>
      <div className="absolute bottom-72 right-56 opacity-20">
        <Network className="w-24 h-24 text-cyan-glow" />
      </div>
    </ScaledSlide>
  );
}

/* ============ SLIDE 2 — CONTEXTUALIZAÇÃO ============ */
export function Slide02() {
  const steps = [
    { icon: GitBranch, name: "DevOps", desc: "Integração entre desenvolvimento e operações" },
    { icon: Shield, name: "SRE", desc: "Confiabilidade, disponibilidade e automação" },
    { icon: Brain, name: "AIOps", desc: "IA aplicada nas operações de TI" },
    { icon: Bot, name: "Agentes Inteligentes", desc: "Análise contextual e apoio à decisão" },
  ];
  return (
    <ScaledSlide>
      <SlideChrome index={2} total={TOTAL} kicker="01 · Contexto" title="A evolução das operações de TI">
        <div className="grid grid-cols-4 gap-6 mb-12">
          {steps.map((s, i) => (
            <div key={s.name} className="relative">
              <div className="glass p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                    <s.icon className="w-7 h-7 text-cyan" />
                  </div>
                  <span className="slide-chrome text-purple">0{i + 1}</span>
                </div>
                <div className="text-3xl font-semibold mb-3">{s.name}</div>
                <p className="slide-caption">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute top-1/2 -right-5 w-8 h-8 text-cyan/70 -translate-y-1/2 z-10" />
              )}
            </div>
          ))}
        </div>
        <div className="glass p-8 border-l-4 border-l-cyan">
          <div className="slide-kicker mb-3">Mensagem principal</div>
          <p className="slide-body-lg">
            A evolução dos sistemas web exige <span className="text-cyan">monitoramento contínuo</span>,{" "}
            <span className="text-cyan">automação</span> e <span className="text-purple">apoio inteligente</span> para
            tomada de decisão.
          </p>
        </div>
      </SlideChrome>
    </ScaledSlide>
  );
}

/* ============ SLIDE 3 — MCP, SRE, LLM ============ */
export function Slide03() {
  const cards = [
    { icon: Workflow, name: "MCP", full: "Model Context Protocol", desc: "Protocolo que conecta aplicações de IA a ferramentas e fontes de dados externas." },
    { icon: Shield, name: "SRE", full: "Site Reliability Engineering", desc: "Práticas para manter sistemas confiáveis, observáveis e disponíveis em produção." },
    { icon: Brain, name: "LLM", full: "Large Language Model", desc: "Modelo capaz de interpretar contexto, raciocinar e gerar respostas em linguagem natural." },
  ];
  return (
    <ScaledSlide>
      <SlideChrome index={3} total={TOTAL} kicker="02 · Conceitos" title="MCP, SRE e LLM como base do agente">
        <div className="grid grid-cols-3 gap-8 mb-12">
          {cards.map((c) => (
            <div key={c.name} className="glass p-10 relative">
              <div className="w-16 h-16 rounded-2xl bg-purple/10 border border-purple/40 flex items-center justify-center mb-6">
                <c.icon className="w-8 h-8 text-purple-glow" />
              </div>
              <div className="text-5xl font-bold gradient-text mb-2">{c.name}</div>
              <div className="slide-caption text-cyan mb-5">{c.full}</div>
              <p className="slide-body">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="glass glow-purple px-12 py-6 flex items-center gap-4">
              <Sparkles className="w-8 h-8 text-cyan" />
              <span className="text-3xl font-semibold">Agente Inteligente de Observabilidade</span>
            </div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-transparent to-cyan" />
          </div>
        </div>
      </SlideChrome>
    </ScaledSlide>
  );
}

/* ============ SLIDE 4 — PROBLEMA ============ */
export function Slide04() {
  const issues = [
    { icon: AlertTriangle, t: "Falhas tardias", d: "Problemas só são percebidos quando o usuário reclama." },
    { icon: Eye, t: "Pouca visibilidade", d: "Sem painel central dos serviços e recursos da VPS." },
    { icon: Wrench, t: "Diagnóstico manual", d: "Acesso via SSH para investigar logs e processos." },
    { icon: Activity, t: "Análise manual", d: "Dependência do operador para correlacionar eventos." },
    { icon: Bell, t: "Sem alertas inteligentes", d: "Alertas inexistentes ou muito ruidosos." },
    { icon: Lock, t: "Indisponibilidade", d: "Usuários finais impactados por períodos prolongados." },
  ];
  return (
    <ScaledSlide>
      <SlideChrome index={4} total={TOTAL} kicker="03 · Problema" title="VPS sem monitoramento inteligente 24/7">
        <div className="grid grid-cols-[1fr_2fr] gap-10 h-full">
          <div className="glass p-10 flex flex-col items-center justify-center text-center glow-purple">
            <div className="relative">
              <Server className="w-44 h-44 text-cyan-glow" />
              <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-red-500/90 flex items-center justify-center pulse-dot">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
            </div>
            <div className="mt-8 slide-kicker text-red-300">vps debian · offline</div>
            <div className="mt-2 text-2xl text-muted-foreground">api · 502 bad gateway</div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {issues.map((i) => (
              <div key={i.t} className="glass p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-400/30 flex items-center justify-center shrink-0">
                  <i.icon className="w-6 h-6 text-red-300" />
                </div>
                <div>
                  <div className="text-2xl font-semibold mb-1">{i.t}</div>
                  <p className="slide-caption">{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideChrome>
    </ScaledSlide>
  );
}

/* ============ SLIDE 5 — PROPOSTA ============ */
export function Slide05() {
  const flow = [
    { icon: Server, label: "VPS Debian" },
    { icon: Eye, label: "Agente Monitor" },
    { icon: BarChart3, label: "Dashboard" },
    { icon: Brain, label: "IA / LLM" },
    { icon: MessageSquare, label: "Gestor / Técnico" },
  ];
  const bullets = [
    "Monitorar serviços e recursos da VPS",
    "Identificar indisponibilidades em tempo real",
    "Exibir métricas e gráficos no dashboard",
    "Apoiar a análise de incidentes com IA",
    "Preparar base para ações automatizadas",
  ];
  return (
    <ScaledSlide>
      <SlideChrome index={5} total={TOTAL} kicker="04 · Proposta" title="Plataforma web com agente e apoio de IA">
        <div className="flex items-center justify-between gap-4 mb-12">
          {flow.map((f, i) => (
            <div key={f.label} className="contents">
              <div className="glass px-6 py-7 flex flex-col items-center gap-3 flex-1">
                <div className="w-14 h-14 rounded-xl bg-cyan/10 border border-cyan/40 flex items-center justify-center">
                  <f.icon className="w-7 h-7 text-cyan" />
                </div>
                <div className="text-xl font-semibold text-center">{f.label}</div>
              </div>
              {i < flow.length - 1 && <ArrowRight className="w-7 h-7 text-purple shrink-0" />}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-5">
          {bullets.map((b, i) => (
            <div key={b} className="glass p-6">
              <div className="text-3xl font-bold text-cyan mb-3">0{i + 1}</div>
              <p className="slide-body leading-tight">{b}</p>
            </div>
          ))}
        </div>
      </SlideChrome>
    </ScaledSlide>
  );
}

/* ============ SLIDE 6 — OBJETIVOS ============ */
export function Slide06() {
  const specific = [
    { icon: Activity, t: "Monitorar 24/7", d: "Serviços e recursos da VPS continuamente." },
    { icon: AlertTriangle, t: "Detectar falhas", d: "Identificar indisponibilidades rapidamente." },
    { icon: BarChart3, t: "Visualizar métricas", d: "Dashboard com gráficos em tempo real." },
    { icon: Lock, t: "Gerenciar usuários", d: "Autenticação e perfis de acesso." },
    { icon: Brain, t: "IA na análise", d: "Apoio à investigação de incidentes." },
    { icon: Zap, t: "Base para automação", d: "Preparado para ações em tempo real." },
  ];
  return (
    <ScaledSlide>
      <SlideChrome index={6} total={TOTAL} kicker="05 · Objetivos" title="Objetivo geral e objetivos específicos">
        <div className="grid grid-cols-[1.1fr_2fr] gap-10 h-full">
          <div className="glass p-10 flex flex-col justify-center glow-cyan">
            <div className="slide-kicker mb-4">Objetivo geral</div>
            <p className="text-4xl font-semibold leading-tight">
              Desenvolver uma <span className="text-cyan">plataforma web de monitoramento</span> para infraestrutura e
              serviços em <span className="text-purple-glow">VPS Debian</span> com apoio de IA.
            </p>
          </div>
          <div>
            <div className="slide-kicker mb-5">Objetivos específicos</div>
            <div className="grid grid-cols-2 gap-5">
              {specific.map((s) => (
                <div key={s.t} className="glass p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple/15 border border-purple/40 flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-purple-glow" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold mb-1">{s.t}</div>
                    <p className="slide-caption">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideChrome>
    </ScaledSlide>
  );
}

/* ============ SLIDE 7 — DESENVOLVIDO ============ */
export function Slide07() {
  const cols = [
    { icon: Layers, name: "Frontend", color: "cyan", items: ["Tela de login", "Dashboard com métricas", "Cards e gráficos", "Serviços monitorados", "Alertas em tempo real", "Chat com IA"] },
    { icon: Terminal, name: "Backend", color: "purple", items: ["API Node.js / Express", "Rotas: métricas, serviços, alertas, chat", "Estrutura de autenticação", "Integração com banco de dados", "Camada de integração com LLM"] },
    { icon: Database, name: "Banco de Dados", color: "cyan", items: ["PostgreSQL local", "Supabase Auth", "Tabela de perfis de usuário", "Histórico de métricas", "Persistência de alertas"] },
  ];
  return (
    <ScaledSlide>
      <SlideChrome index={7} total={TOTAL} kicker="06 · Entregas" title="O que foi desenvolvido até o momento">
        <div className="grid grid-cols-3 gap-8 h-full">
          {cols.map((c) => (
            <div key={c.name} className="glass p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${c.color === "cyan" ? "bg-cyan/10 border border-cyan/40" : "bg-purple/10 border border-purple/40"}`}>
                  <c.icon className={`w-7 h-7 ${c.color === "cyan" ? "text-cyan" : "text-purple-glow"}`} />
                </div>
                <div className="text-3xl font-bold">{c.name}</div>
              </div>
              <ul className="space-y-3 flex-1">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 slide-body">
                    <CheckCircle2 className={`w-6 h-6 mt-1 shrink-0 ${c.color === "cyan" ? "text-cyan" : "text-purple-glow"}`} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SlideChrome>
    </ScaledSlide>
  );
}

/* ============ SLIDE 8 — METODOLOGIA ============ */
export function Slide08() {
  const stages = [
    { n: "01", t: "Levantamento do problema", tags: ["Falhas", "Visibilidade", "Indisponibilidade"] },
    { n: "02", t: "Estudo dos conceitos", tags: ["DevOps", "SRE", "AIOps", "MCP", "LLM"] },
    { n: "03", t: "Definição dos requisitos", tags: ["Monitoramento", "Dashboard", "Auth", "IA"] },
    { n: "04", t: "Desenvolvimento", tags: ["Frontend", "Backend", "Banco", "API"] },
    { n: "05", t: "Testes em VPS Debian", tags: ["Serviços", "Métricas", "Login", "Alertas"] },
    { n: "06", t: "Avaliação e melhorias", tags: ["Limitações", "Trabalhos futuros"] },
  ];
  return (
    <ScaledSlide>
      <SlideChrome index={8} total={TOTAL} kicker="07 · Metodologia" title="Etapas da pesquisa e desenvolvimento">
        <div className="grid grid-cols-6 gap-4 h-full">
          {stages.map((s, i) => (
            <div key={s.n} className="relative flex flex-col">
              <div className="glass p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-4xl font-bold gradient-text">{s.n}</span>
                  <div className="w-3 h-3 rounded-full bg-cyan pulse-dot" />
                </div>
                <div className="text-xl font-semibold mb-4 leading-tight">{s.t}</div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {s.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-md bg-purple/15 border border-purple/30 text-sm text-purple-glow font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {i < stages.length - 1 && (
                <ArrowRight className="absolute top-12 -right-3 w-5 h-5 text-cyan z-10" />
              )}
            </div>
          ))}
        </div>
      </SlideChrome>
    </ScaledSlide>
  );
}

/* ============ SLIDE 9 — ARQUITETURA ============ */
export function Slide09() {
  const stack = [
    { icon: MessageSquare, label: "Usuário", sub: "Browser" },
    { icon: Code2, label: "Frontend", sub: "React + Vite" },
    { icon: Network, label: "Nginx", sub: "Reverse proxy" },
    { icon: Terminal, label: "Backend", sub: "Node.js · Express · PM2" },
    { icon: Server, label: "VPS Debian", sub: "Serviços · Métricas · Logs" },
  ];
  return (
    <ScaledSlide>
      <SlideChrome index={9} total={TOTAL} kicker="08 · Arquitetura" title="Visão técnica da plataforma">
        <div className="grid grid-cols-[2fr_1fr] gap-10 h-full">
          <div className="flex flex-col items-center justify-between py-4">
            {stack.map((s, i) => (
              <div key={s.label} className="w-full flex flex-col items-center">
                <div className="glass px-8 py-5 flex items-center gap-5 w-[520px]">
                  <div className="w-14 h-14 rounded-xl bg-cyan/10 border border-cyan/40 flex items-center justify-center">
                    <s.icon className="w-7 h-7 text-cyan" />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold">{s.label}</div>
                    <div className="slide-caption">{s.sub}</div>
                  </div>
                </div>
                {i < stack.length - 1 && <div className="arrow-down" />}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center gap-8">
            <div className="glass p-7 glow-purple">
              <div className="flex items-center gap-4 mb-3">
                <Database className="w-9 h-9 text-purple-glow" />
                <div className="text-2xl font-semibold">Persistência</div>
              </div>
              <p className="slide-caption mb-3">Backend ↔ dados</p>
              <div className="flex flex-wrap gap-2">
                {["Supabase Auth", "PostgreSQL"].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-md bg-purple/15 border border-purple/30 text-base text-purple-glow font-mono">{t}</span>
                ))}
              </div>
            </div>
            <div className="glass p-7 glow-cyan">
              <div className="flex items-center gap-4 mb-3">
                <Brain className="w-9 h-9 text-cyan" />
                <div className="text-2xl font-semibold">Inteligência Artificial</div>
              </div>
              <p className="slide-caption mb-3">Backend ↔ LLM</p>
              <div className="flex flex-wrap gap-2">
                {["LLM API", "Análise de incidentes"].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-md bg-cyan/10 border border-cyan/40 text-base text-cyan font-mono">{t}</span>
                ))}
              </div>
            </div>
            <div className="glass p-6">
              <div className="slide-kicker mb-3">Stack</div>
              <div className="flex flex-wrap gap-2">
                {["React", "Vite", "Node.js", "Express", "Nginx", "Debian", "PostgreSQL", "Supabase", "PM2", "LLM"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded bg-navy border border-cyan/20 text-base font-mono text-foreground">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SlideChrome>
    </ScaledSlide>
  );
}

/* ============ SLIDE 10 — DEMONSTRAÇÃO ============ */
export function Slide10() {
  const steps = ["Login do usuário", "Acesso ao dashboard", "Métricas da VPS", "Status dos serviços", "Alertas recentes", "Chat com IA"];
  return (
    <ScaledSlide>
      <SlideChrome index={10} total={TOTAL} kicker="09 · Demonstração" title="Fluxo de uso da plataforma">
        <div className="grid grid-cols-[1.4fr_1fr] gap-10 h-full">
          {/* Mock dashboard */}
          <div className="glass p-6 glow-cyan flex flex-col">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-cyan/15">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan/15 border border-cyan/40 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-cyan" />
                </div>
                <div className="text-xl font-semibold">VPS · Observability</div>
              </div>
              <div className="flex items-center gap-2 slide-chrome">
                <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" /> online · 14d 6h
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-5">
              {[
                { l: "CPU", v: "42%", c: "cyan" },
                { l: "RAM", v: "3.1/8 GB", c: "purple" },
                { l: "Disk", v: "67%", c: "cyan" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-navy-deep/80 border border-cyan/20 p-4">
                  <div className="slide-chrome">{s.l}</div>
                  <div className={`text-3xl font-bold mt-1 ${s.c === "cyan" ? "text-cyan" : "text-purple-glow"}`}>{s.v}</div>
                  <div className="mt-3 h-1.5 rounded-full bg-navy overflow-hidden">
                    <div className={`h-full ${s.c === "cyan" ? "bg-cyan" : "bg-purple-glow"}`} style={{ width: s.l === "RAM" ? "39%" : s.l === "CPU" ? "42%" : "67%" }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-navy-deep/80 border border-cyan/20 p-5 mb-5 flex-1">
              <div className="flex items-center justify-between mb-3">
                <div className="text-lg font-semibold">Tráfego de requisições · 24h</div>
                <LineChart className="w-5 h-5 text-cyan" />
              </div>
              <svg viewBox="0 0 400 120" className="w-full h-32">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.18 200)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="oklch(0.78 0.18 200)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,80 L40,60 L80,70 L120,40 L160,55 L200,30 L240,45 L280,25 L320,35 L360,20 L400,40 L400,120 L0,120 Z" fill="url(#g1)" />
                <path d="M0,80 L40,60 L80,70 L120,40 L160,55 L200,30 L240,45 L280,25 L320,35 L360,20 L400,40" stroke="oklch(0.82 0.18 200)" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { s: "nginx", ok: true },
                { s: "node-api", ok: true },
                { s: "postgres", ok: true },
                { s: "redis", ok: false },
              ].map((x) => (
                <div key={x.s} className="rounded-lg bg-navy-deep/80 border border-cyan/15 px-4 py-2.5 flex items-center justify-between">
                  <span className="font-mono text-base">{x.s}</span>
                  <span className={`text-sm font-mono ${x.ok ? "text-emerald-400" : "text-red-400"}`}>
                    {x.ok ? "● running" : "● down"}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Steps + insight */}
          <div className="flex flex-col gap-5">
            <div className="glass p-6">
              <div className="slide-kicker mb-4">Fluxo da demo</div>
              <ol className="space-y-3">
                {steps.map((s, i) => (
                  <li key={s} className="flex items-center gap-4 slide-body">
                    <span className="w-9 h-9 rounded-lg bg-cyan/15 border border-cyan/40 flex items-center justify-center text-cyan font-bold">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="glass p-6 border-l-4 border-l-purple flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-purple-glow" />
                <div className="slide-kicker">Mensagem principal</div>
              </div>
              <p className="slide-body">
                O sistema transforma <span className="text-cyan">dados técnicos da VPS</span> em uma interface visual
                simples para acompanhamento e <span className="text-purple-glow">tomada de decisão</span>.
              </p>
            </div>
          </div>
        </div>
      </SlideChrome>
    </ScaledSlide>
  );
}

/* ============ SLIDE 11 — LIMITAÇÕES ============ */
export function Slide11() {
  const items = [
    { icon: Lock, t: "Sem ações automáticas", d: "Nenhuma ação é executada sem autorização do operador." },
    { icon: Eye, t: "Escopo inicial", d: "Monitoramento limitado aos serviços configurados manualmente." },
    { icon: Cloud, t: "Dependência de IA externa", d: "Uso de API externa para o modelo de linguagem." },
    { icon: Wrench, t: "Mais testes em produção", d: "Necessidade de validação em ambientes reais e variados." },
    { icon: Shield, t: "Segurança e auditoria", d: "Permissões, auditoria e hardening ainda podem evoluir." },
    { icon: Zap, t: "Recuperação automática", d: "Integração com ações de recuperação prevista para o futuro." },
  ];
  return (
    <ScaledSlide>
      <SlideChrome index={11} total={TOTAL} kicker="10 · Limitações" title="Limitações atuais da versão entregue">
        <div className="grid grid-cols-3 gap-6 h-full">
          {items.map((i) => (
            <div key={i.t} className="glass p-7 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-yellow-400/10 border border-yellow-400/40 flex items-center justify-center">
                  <i.icon className="w-7 h-7 text-yellow-300" />
                </div>
                <AlertTriangle className="w-5 h-5 text-yellow-300/80 ml-auto" />
              </div>
              <div className="text-2xl font-semibold mb-3">{i.t}</div>
              <p className="slide-body">{i.d}</p>
            </div>
          ))}
        </div>
      </SlideChrome>
    </ScaledSlide>
  );
}

/* ============ SLIDE 12 — TRABALHOS FUTUROS / CONCLUSÃO ============ */
export function Slide12() {
  const roadmap = [
    { icon: Bell, t: "Alertar", d: "Detectar eventos automaticamente." },
    { icon: MessageSquare, t: "Avisar", d: "Mensagem ao gestor com contexto." },
    { icon: Sparkles, t: "Sugerir", d: "Soluções recomendadas pela IA." },
    { icon: Shield, t: "Autorizar", d: "Pedir aprovação antes de agir." },
    { icon: Zap, t: "Agir", d: "Executar ações de recuperação." },
    { icon: Rocket, t: "Terraform", d: "Infra como código e provisionamento." },
  ];
  return (
    <ScaledSlide>
      <SlideChrome index={12} total={TOTAL} kicker="11 · Encerramento" title="Trabalhos futuros e conclusão">
        <div className="grid grid-rows-[auto_1fr] gap-8 h-full">
          <div>
            <div className="slide-kicker mb-4">Roadmap evolutivo</div>
            <div className="flex items-stretch gap-3">
              {roadmap.map((r, i) => (
                <div key={r.t} className="contents">
                  <div className="glass p-5 flex-1 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/40 flex items-center justify-center mb-3">
                      <r.icon className="w-6 h-6 text-cyan" />
                    </div>
                    <div className="text-xl font-bold mb-1">{r.t}</div>
                    <p className="slide-caption">{r.d}</p>
                  </div>
                  {i < roadmap.length - 1 && <ArrowRight className="w-6 h-6 text-purple self-center shrink-0" />}
                </div>
              ))}
            </div>
          </div>
          <div className="glass p-10 glow-purple flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-5">
              <Target className="w-9 h-9 text-purple-glow" />
              <div className="slide-kicker">Conclusão</div>
            </div>
            <p className="text-3xl leading-snug">
              A proposta demonstra a aplicação prática de <span className="text-cyan">DevOps</span>,{" "}
              <span className="text-cyan">SRE</span> e <span className="text-purple-glow">IA</span> em uma plataforma
              web de monitoramento para VPS Debian, criando uma <span className="gradient-text font-semibold">base
              funcional para um agente inteligente de observabilidade</span>.
            </p>
            <div className="mt-8 flex items-center gap-4 slide-caption">
              <Settings className="w-5 h-5 text-cyan" />
              <span>Obrigado · perguntas são bem-vindas</span>
            </div>
          </div>
        </div>
      </SlideChrome>
    </ScaledSlide>
  );
}

export const slides = [
  { component: Slide01, notes: "Apresente-se, leia o título completo, cite orientador e instituição. Diga: vou apresentar uma plataforma web de observabilidade para VPS Debian, com apoio de IA, aplicando DevOps e SRE." },
  { component: Slide02, notes: "Explique a evolução: DevOps une dev e ops, SRE adiciona engenharia de confiabilidade, AIOps traz IA, e agentes inteligentes apoiam decisões em tempo real." },
  { component: Slide03, notes: "Defina cada sigla em uma frase. Reforce que MCP permite ao LLM acessar ferramentas, SRE garante operação confiável, e juntos formam a base do agente inteligente." },
  { component: Slide04, notes: "Mostre o cenário: VPS pequenas não têm monitoramento 24/7. Liste consequências e enfatize o impacto no usuário final." },
  { component: Slide05, notes: "Apresente a proposta como solução direta ao problema: agente coleta, dashboard mostra, IA apoia, e o gestor decide. Cite os cinco pilares." },
  { component: Slide06, notes: "Leia o objetivo geral em uma frase. Percorra rapidamente os seis específicos, sem detalhar cada um — eles estão aí para apoiar a fala." },
  { component: Slide07, notes: "Explique o estado atual do desenvolvimento por camada: frontend funcional, backend com rotas principais, banco com auth e perfis." },
  { component: Slide08, notes: "Caminhe pelas etapas como uma linha do tempo: do problema ao desenvolvimento e à avaliação. Reforce que é um processo iterativo." },
  { component: Slide09, notes: "Descreva o fluxo principal de cima para baixo, e depois cite as integrações laterais com banco e IA. Liste as tecnologias rapidamente." },
  { component: Slide10, notes: "Se possível, abra a aplicação real. Caso contrário, use o mockup para narrar o fluxo: login, dashboard, métricas, serviços, alertas, chat com IA." },
  { component: Slide11, notes: "Seja transparente: explique cada limitação como ponto de evolução, não como falha. Foque em segurança, escopo e dependência de IA externa." },
  { component: Slide12, notes: "Apresente o roadmap como visão de futuro: alertar, avisar, sugerir, autorizar, agir, automatizar com Terraform. Conclua reforçando a contribuição do trabalho. Agradeça e abra para perguntas." },
];
