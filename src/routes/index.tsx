import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Asterisk, Circle } from "lucide-react";
import { useEffect } from "react";
import portrait from "@/assets/david-portrait.jpg";
import projectBranding from "@/assets/project-branding.jpg";
import projectShopify from "@/assets/project-shopify.jpg";
import projectSystems from "@/assets/project-systems.jpg";
import { Button } from "@/components/ui/button";
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "David Blanes — Diseñador Gráfico → Especialista en Sistemas" },
      { name: "description", content: "Portfolio de David Blanes: diseño web, branding, experiencia de usuario y sistemas." },
      { property: "og:title", content: "David Blanes — Diseño & Sistemas" },
      { property: "og:description", content: "Creando experiencias visuales técnicamente sólidas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  { number: "01", title: "Diseño & Creatividad", items: ["Photoshop · Illustrator · InDesign", "After Effects · Cinema 4D", "Figma · Adobe XD · WordPress", "Identidad visual · Logotipos · Guidelines"] },
  { number: "02", title: "Técnico & Desarrollo", label: "En progreso", items: ["HTML · CSS · JavaScript (ES6+)", "Shopify · Liquid · Apps", "Python · Bash scripting", "SQL · Linux · Windows Server"] },
  { number: "03", title: "Proceso & Metodología", items: ["Design Thinking", "User-centered design", "Scrum · Kanban", "Git · GitHub · CI/CD básico"] },
];

const projects = [
  { number: "01", category: "Diseño web · Identidad visual", title: "Hazlo bello", image: projectShopify, description: "Una landing de una directora de arte donde interacción, diseño e identidad trabajan como un único sistema.", tools: "Figma · Webflow" },
  { number: "02", category: "Branding · Identidad", title: "Pulso — Identidad cultural", image: projectBranding, description: "Sistema visual flexible para conectar arte, música, ideas y personas en distintos formatos.", tools: "Illustrator · InDesign · After Effects" },
  { number: "03", category: "Técnico · Mixto", title: "Flow — Automatización creativa", image: projectSystems, description: "Scripts y flujos internos para reducir tareas repetitivas y convertir procesos de diseño en sistemas fiables.", tools: "Python · Bash · Git · Linux" },
];

function Index() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("translate-y-8", "opacity-0");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <> 
    <CustomCursor />
    <main className="bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between border-b border-foreground/10 bg-background/90 px-5 backdrop-blur-md md:px-10">
        <a href="#inicio" className="font-display text-3xl text-primary" aria-label="David Blanes, inicio">DB<span className="text-secondary">.</span></a>
        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest md:flex" aria-label="Navegación principal">
          <a className="transition-colors hover:text-primary" href="#sobre-mi">Sobre mí</a>
          <a className="transition-colors hover:text-primary" href="#proyectos">Proyectos</a>
          <a className="transition-colors hover:text-primary" href="#habilidades">Habilidades</a>
        </nav>
        <Button asChild variant="portfolio" size="sm"><a href="#contacto">Hablemos <ArrowUpRight /></a></Button>
      </header>

      <section id="inicio" className="relative flex min-h-[calc(100svh-2rem)] flex-col justify-center overflow-hidden px-5 pb-9 pt-24 md:min-h-[92svh] md:px-10 md:pb-12 md:pt-28 lg:px-16">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mb-7 flex items-end justify-between border-b border-foreground/20 pb-3 text-[10px] font-semibold uppercase tracking-[0.2em] md:text-xs">
            <span>Diseñador gráfico · ASIR</span><span>Alicante · 2026</span>
          </div>
          <p className="mb-2 flex items-center gap-2 text-sm font-medium text-primary md:text-lg"><span className="size-2 rounded-full bg-secondary" />¡Hola! Soy David</p>
          <h1 className="text-balance font-display text-[3.35rem] leading-[0.78] text-primary md:text-[clamp(4rem,12vw,11rem)]">
            Diseñador <span className="text-foreground">gráfico</span>
            <span className="relative mt-2 block pl-[10vw]">→ Sistemas<span className="absolute -right-1 -top-3 font-sans text-sm font-semibold uppercase tracking-widest text-secondary md:right-8 md:top-6">En evolución</span></span>
          </h1>
          <div className="mt-5 grid items-end gap-5 md:mt-7 md:grid-cols-[1fr_280px_1fr] md:gap-8">
            <div className="max-w-xs text-sm leading-relaxed md:pb-10"><p>Diseñador gráfico desde 2020.</p><p className="text-muted-foreground">6 años en agencias y estudios.</p></div>
            <div className="relative mx-auto w-[165px] rotate-2 md:w-[280px]">
              <div className="absolute -left-5 -top-5 z-10 flex size-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground animate-float-soft"><Asterisk /></div>
              <img src={portrait} alt="Retrato editorial de David Blanes" width={1200} height={1504} fetchPriority="high" className="aspect-[4/5] w-full object-cover grayscale-[15%]" />
            </div>
            <div className="text-center md:pb-10 md:text-right"><p className="font-display text-xl leading-tight md:text-2xl">Creando experiencias visuales<br />técnicamente sólidas.</p></div>
          </div>
          <a href="#sobre-mi" className="mt-4 hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary md:inline-flex">Descubrir <ArrowDown className="size-4" /></a>
        </div>
      </section>

      <section id="sobre-mi" className="bg-foreground px-5 py-24 text-background md:px-10 md:py-36 lg:px-16">
        <div data-reveal className="mx-auto grid max-w-[1440px] gap-12 opacity-0 transition-all duration-700 translate-y-8 md:grid-cols-[0.65fr_1.35fr]">
          <div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">( Sobre mí )</span></div>
          <div>
            <h2 className="text-balance font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">Pienso con imágenes.<br /><span className="text-primary">Construyo con lógica.</span></h2>
            <div className="mt-12 grid gap-6 text-sm leading-relaxed text-background/70 md:grid-cols-2 md:text-base">
              <p>Durante seis años he convertido ideas en identidades, webs y experiencias. Ahora estudio ASIR para entender también la infraestructura que hay detrás de cada producto digital.</p>
              <p>Mi perfil vive en ese cruce: criterio visual, pensamiento de usuario y una base técnica cada vez más sólida.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="habilidades" className="px-5 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 flex items-end justify-between"><h2 className="font-display text-6xl text-primary md:text-8xl">Mis herramientas</h2><Circle className="hidden size-10 text-secondary md:block" /></div>
          <div className="editorial-rule">
            {skills.map((skill) => <article key={skill.number} data-reveal className="grid gap-5 border-b border-border py-10 opacity-0 transition-all duration-700 translate-y-8 md:grid-cols-[80px_1fr_1.15fr] md:py-14">
              <span className="text-xs font-bold text-primary">/{skill.number}</span>
              <div><h3 className="font-display text-3xl md:text-4xl">{skill.title}</h3>{skill.label && <span className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-secondary-foreground">{skill.label}</span>}</div>
              <ul className="grid gap-3 text-sm text-muted-foreground md:grid-cols-2">{skill.items.map((item) => <li key={item} className="flex gap-2"><span className="text-secondary">↗</span>{item}</li>)}</ul>
            </article>)}
          </div>
        </div>
      </section>

      <section id="proyectos" className="bg-muted px-5 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 grid gap-6 md:grid-cols-2"><h2 className="font-display text-6xl leading-none text-primary md:text-8xl">Trabajo<br />seleccionado</h2><p className="max-w-md self-end text-sm leading-relaxed text-muted-foreground md:justify-self-end">Diseño, tecnología y los proyectos que nacen justo en medio.</p></div>
          <div className="space-y-24">
            {projects.map((project, index) => <article key={project.title} data-reveal className="group grid items-start gap-6 opacity-0 transition-all duration-700 translate-y-8 md:grid-cols-12">
              <div className={`overflow-hidden md:col-span-8 ${index % 2 ? "md:col-start-5" : ""}`}><img src={project.image} alt={project.title} width={1600} height={1104} loading="lazy" className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></div>
              <div className={`md:col-span-4 ${index % 2 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <div className="flex items-center justify-between border-b border-foreground/20 pb-3 text-[10px] font-bold uppercase tracking-widest"><span>{project.category}</span><span>{project.number}</span></div>
                <h3 className="mt-5 font-display text-4xl leading-none md:text-5xl">{project.title}</h3><p className="mt-5 text-sm leading-relaxed text-muted-foreground">{project.description}</p><p className="mt-5 text-xs font-semibold text-primary">{project.tools}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Caso completo próximamente <ArrowUpRight className="size-4" /></span>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <footer id="contacto" className="bg-primary px-5 pb-10 pt-24 text-primary-foreground md:px-10 md:pt-36 lg:px-16">
        <div data-reveal className="mx-auto max-w-[1440px] opacity-0 transition-all duration-700 translate-y-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">Disponible para colaboraciones</p>
          <h2 className="mt-8 max-w-5xl font-display text-6xl leading-[0.9] md:text-8xl lg:text-9xl">¿Creamos algo que funcione y se vea increíble?</h2>
          <Button asChild variant="portfolioOutline" size="xl" className="mt-12 border-primary-foreground/60 text-primary-foreground hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"><a href="mailto:hola@davidblanes.com">hola@davidblanes.com <ArrowUpRight /></a></Button>
          <div className="mt-24 flex flex-col gap-5 border-t border-primary-foreground/30 pt-6 text-xs font-semibold uppercase tracking-widest md:flex-row md:items-center md:justify-between"><span>© 2026 David Blanes</span><div className="flex gap-6"><span>Behance ↗</span><span>LinkedIn ↗</span><a href="#inicio">Volver arriba ↑</a></div></div>
        </div>
      </footer>
    </main>
    </> 
  );
}
