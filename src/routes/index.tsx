import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Negin Shafaei — Senior Frontend Developer" },
      { name: "description", content: "Negin Shafaei, Senior Frontend Developer & Team Lead building scalable Next.js web experiences." },
      { property: "og:title", content: "Negin Shafaei — Senior Frontend Developer" },
      { property: "og:description", content: "Senior Frontend Developer & Team Lead building scalable Next.js web experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SCENES = 6;
const clamp = (v: number) => Math.min(1, Math.max(0, v));

const experience = [
  { role: "Senior Frontend & Team Lead", co: "Saba System (Immigo)", time: "2020 — Present", d: "Decoupled a monolithic Vue/Laravel app, migrated to Vue 3 & Next.js, standardized dev with Docker. 60% better LCP." },
  { role: "Frontend Developer", co: "Samfintech", time: "2019 — 2020", d: "High-frequency trading dashboard with real-time WebSocket data visualization." },
  { role: "Frontend Developer (Contract)", co: "Ajor Nik", time: "2019 · 6 mo", d: "B2C e-commerce for construction materials on Next.js with Firebase push notifications." },
  { role: "Chemical Eng. → Tech", co: "University of Guilan / Graduate", time: "2015 — 2019", d: "Harvard CS50 & Khan Academy — algorithms and CS foundations." },
];

const projects = [
  { t: "High-Frequency Data Grid", c: "Personal Lab", tags: "Next.js 15 · Web Workers", url: "https://neginshafaei.github.io/performance-grid-demo/" },
  { t: "Immigo Migration Platform", c: "Saba System", tags: "Next.js · Docker", url: "https://immigo.org" },
  { t: "SIEM Mavara Security Core", c: "Saba System Sadra · NDA", tags: "React · Big Data" },
  { t: "Fintech Trading Dashboard", c: "Samfintech · NDA", tags: "React · WebSockets" },
  { t: "Ajor Nik E-commerce", c: "Ajor Nik · NDA", tags: "Next.js · Firebase" },
  { t: "German Railway Navigator", c: "PANTOhealth", tags: "React 19 · Leaflet", url: "https://station-io.vercel.app/" },
];

const skills = ["Next.js", "React", "TypeScript", "Vue 3", "Docker", "CI/CD", "WebSockets", "Web Workers", "Zustand", "Redux"];

function Index() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      setP(h.scrollTop / (h.scrollHeight - h.clientHeight || 1));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const total = p * (SCENES - 1);
  const L = (i: number) => clamp(total - (i - 1));
  const active = Math.round(total);

  return (
    <main className="relative bg-background text-foreground" style={{ height: `${SCENES * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute left-0 top-0 z-50 h-1 w-full origin-left bg-primary" style={{ transform: `scaleX(${p})` }} />

        {/* 0 Intro */}
        <section className="layer bg-background">
          <div className="absolute -right-32 top-10 h-120 w-120 rounded-full bg-primary/25 blur-3xl" style={{ transform: `scale(${1 + L(1) * 2})` }} />
          <div className="relative max-w-5xl" style={{ transform: `scale(${1 - L(1) * 0.3})`, opacity: 1 - L(1) }}>
            <p className="font-mono text-sm text-primary">// Negin Shafaei — frontend Developer</p>
            <h1 className="mt-4 font-display text-6xl font-bold leading-[0.9] tracking-tight md:text-8xl">
              Architecting<br /><span className="text-gradient">scalable</span><br />web experiences.
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground">5+ years building high-performance Next.js apps, optimizing DX and leading frontend teams.</p>
            <p className="mt-8 font-mono text-xs text-muted-foreground animate-bounce">scroll ↓</p>
          </div>
        </section>

        {/* 1 Flood */}
        <section className="layer bg-primary text-primary-foreground" style={{ clipPath: `circle(${L(1) * 150}% at 50% 50%)` }}>
          <div className="text-center font-display text-5xl font-bold leading-tight md:text-8xl">
            {["Performance.", "Leadership.", "Architecture."].map((w, i) => {
              const t = clamp(L(1) * 3 - i);
              return <div key={w} style={{ opacity: t, transform: `translateY(${(1 - t) * 60}px)` }}>{w}</div>;
            })}
          </div>
        </section>

        {/* 2 Experience */}
        <section className="layer bg-card" style={{ transform: `translateY(${(1 - L(2)) * 100}%)` }}>
          <div className="w-full max-w-5xl">
            <p className="font-mono text-sm text-primary">// experience</p>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {experience.map((e, i) => {
                const k = clamp(L(2) * 4 - i * 0.6);
                return (
                  <div key={e.co} className="grid gap-1 py-4 md:grid-cols-[1fr_auto]" style={{ opacity: k, transform: `translateX(${(1 - k) * -80}px)` }}>
                    <div>
                      <h3 className="font-display text-2xl font-bold md:text-3xl">{e.role} <span className="text-primary">@ {e.co}</span></h3>
                      <p className="mt-1 text-sm text-muted-foreground">{e.d}</p>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{e.time}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3 Projects */}
        <section className="layer bg-background" style={{ clipPath: `inset(0 ${(1 - L(3)) * 100}% 0 0)` }}>
          <div className="w-full max-w-6xl">
            <p className="font-mono text-sm text-primary">// the lab & case studies</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {projects.map((pr, i) => {
                const k = clamp(L(3) * 3 - i * 0.3);
                const Tag = pr.url ? "a" : "div";
                return (
                  <Tag key={pr.t} {...(pr.url ? { href: pr.url, target: "_blank", rel: "noreferrer" } : {})}
                    className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
                    style={{ opacity: k, transform: `translateY(${(1 - k) * 50}px) scale(${0.9 + k * 0.1})` }}>
                    <span className="font-mono text-xs text-primary">{pr.url ? "LIVE ↗" : "NDA"}</span>
                    <h3 className="mt-3 font-display text-xl font-bold group-hover:text-primary">{pr.t}</h3>
                    <p className="text-sm text-muted-foreground">{pr.c}</p>
                    <p className="mt-3 font-mono text-xs text-muted-foreground">{pr.tags}</p>
                  </Tag>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4 Skills */}
        <section className="layer bg-accent text-accent-foreground" style={{ clipPath: `inset(${(1 - L(4)) * 50}% 0 ${(1 - L(4)) * 50}% 0)` }}>
          <div className="max-w-4xl text-center">
            <p className="font-mono text-sm">// toolkit</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {skills.map((s, i) => {
                const k = clamp(L(4) * 3 - i * 0.2);
                return <span key={s} className="rounded-full border-2 border-current px-6 py-3 font-display text-2xl font-bold md:text-4xl" style={{ opacity: k, transform: `scale(${0.5 + k * 0.5})` }}>{s}</span>;
              })}
            </div>
          </div>
        </section>

        {/* 5 Contact */}
        <section className="layer bg-background" style={{ clipPath: `circle(${L(5) * 150}% at 100% 100%)` }}>
          <div className="text-center" style={{ opacity: L(5), transform: `translateY(${(1 - L(5)) * 40}px)` }}>
            <p className="font-mono text-sm text-primary">// open to work — let's talk</p>
            <a href="mailto:3rdoperson@gmail.com" className="mt-6 inline-block font-display text-4xl font-bold hover:text-primary md:text-7xl">3rdoperson@gmail.com</a>
            <div className="mt-8 flex justify-center gap-6 font-mono text-sm">
              <a href="https://github.com/neginshafaei" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/negin-shafaei/" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn ↗</a>
            </div>
          </div>
        </section>

        <Widgets />

        <div className="absolute bottom-6 right-6 z-50 flex gap-2">
          {Array.from({ length: SCENES }).map((_, i) => (
            <span key={i} className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40"}`} />
          ))}
        </div>
      </div>
    </main>
  );
}

function Widgets() {
  const [fps, setFps] = useState(60);
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    let frames = 0, last = performance.now(), id = 0;
    const loop = (t: number) => {
      frames++;
      if (t - last >= 1000) { setFps(Math.round((frames * 1000) / (t - last))); frames = 0; last = t; }
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    const tick = () => setTime(new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "UTC" }));
    tick();
    const iv = setInterval(tick, 10000);
    return () => { cancelAnimationFrame(id); clearInterval(iv); };
  }, []);
  const card = "rounded-xl border border-border bg-card/80 px-4 py-2 font-mono text-xs text-card-foreground backdrop-blur";
  return (
    <div className="absolute bottom-6 left-6 z-50 flex flex-wrap gap-2">
      <div className={card}>
        <p className="text-muted-foreground">STATUS</p>
        <p className="flex items-center gap-2 font-bold text-primary"><span className="h-2 w-2 animate-pulse rounded-full bg-primary" />Open to Work</p>
      </div>
      <div className={card}>
        <p className="text-muted-foreground">LIVE METRICS</p>
        <p className="font-bold">{fps} FPS</p>
      </div>
      <div className={card}>
        <p className="text-muted-foreground">LOCAL · UTC</p>
        <p className="font-bold">{time}</p>
      </div>
      <div className={card}>
        <p className="text-muted-foreground">MODE</p>
        <p className="font-bold">Focus / Coding</p>
      </div>
    </div>
  );
}
