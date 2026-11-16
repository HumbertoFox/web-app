import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import styles from "./page.module.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f-display" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--f-body" });

const WHATSAPP = "https://wa.me/5581999999999?text=Olá! Quero um orçamento.";

const services = [
  { t: "Placas de vídeo", d: "Reballing, troca de memórias VRAM, reparo de fase de energia e artefatos na tela.", big: true },
  { t: "Notebooks", d: "Não liga, não carrega, tela apagada, dobradiças, teclado e troca de display." },
  { t: "PCs e desktops", d: "Fontes, placas-mãe, upgrades, formatação e limpeza com troca de pasta térmica." },
  { t: "Placas-mãe", d: "Curto, BIOS corrompida e trilhas rompidas, com microsoldagem." },
  { t: "Equipamentos de informática", d: "Monitores, impressoras, nobreaks e periféricos." },
  { t: "Recuperação de dados", d: "Backup antes de qualquer procedimento que ofereça risco ao disco." },
];

const steps = [
  { t: "Triagem", d: "Recebemos o equipamento, registramos o estado e abrimos a ordem de serviço." },
  { t: "Diagnóstico", d: "Medições na bancada e laudo por escrito, com a causa do defeito." },
  { t: "Orçamento", d: "Você aprova valor e prazo. Sem aprovação, nada é trocado." },
  { t: "Reparo e teste", d: "Conserto, teste de estresse e entrega com garantia." },
];

const courses = [
  {
    level: "Nível 1",
    name: "Reparo de notebook e placa de vídeo: base",
    desc: "Para quem está começando na bancada e quer diagnosticar com segurança.",
    items: ["Uso de multímetro e fonte de bancada", "Leitura de esquemas elétricos", "Diagnóstico de curto e de falha de energia", "Troca de componentes SMD simples", "Limpeza e manutenção preventiva"],
    featured: false,
  },
  {
    level: "Nível 2",
    name: "Reparo de notebook e placa de vídeo: avançado",
    desc: "Para quem já solda e quer resolver defeitos que outros técnicos recusam.",
    items: ["Microsoldagem e retrabalho em BGA", "Reballing de GPU e chipset", "Troca de memórias VRAM", "BIOS, EC e firmware", "Diagnóstico com termográfica e osciloscópio"],
    featured: true,
  },
];

const dots: [number, number][] = [[40, 70], [40, 110], [40, 150], [440, 70], [440, 110], [440, 150], [220, 310], [260, 310], [240, 40]];

function Board() {
  return (
    <svg viewBox="0 0 480 360" role="img" aria-label="Ilustração de uma placa de circuito com trilhas e chip central" className={styles.board}>
      <rect x="8" y="8" width="464" height="344" rx="14" fill="#14503C" stroke="#E0B040" strokeOpacity=".35" />
      <g className={styles.traceDim}>
        <path d="M40 70H150V120" /><path d="M40 110H110V160H150" /><path d="M40 150H80V210H150" />
        <path d="M440 70H330V120" /><path d="M440 110H370V160H330" /><path d="M440 150H400V210H330" />
        <path d="M150 260V310H220" /><path d="M330 260V310H260" /><path d="M240 40V120" />
      </g>
      <g className={styles.traceRun}>
        <path d="M40 70H150V120" /><path d="M40 110H110V160H150" /><path d="M40 150H80V210H150" />
        <path d="M440 70H330V120" /><path d="M440 110H370V160H330" /><path d="M440 150H400V210H330" />
        <path d="M150 260V310H220" /><path d="M330 260V310H260" /><path d="M240 40V120" />
      </g>
      <rect x="150" y="120" width="180" height="140" rx="8" fill="#0B1F1A" stroke="#E0B040" strokeWidth="2" />
      <rect x="170" y="140" width="140" height="100" rx="4" fill="none" stroke="#E0B040" strokeOpacity=".4" strokeDasharray="3 5" />
      <text x="240" y="196" textAnchor="middle" fill="#E0B040" fontSize="22" fontWeight="600">GPU</text>
      <text x="240" y="218" textAnchor="middle" fill="#E8EDEA" fontSize="11" opacity=".7">temperatura 62 °C</text>
      {dots.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#E0B040" />
      ))}
    </svg>
  );
}

export default function Page() {
  return (
    <div className={`${display.variable} ${body.variable} ${styles.page}`}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#" className={styles.logo}>Bancada Tech</a>
          <ul className={styles.links}>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#como-funciona">Como funciona</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
          <a href={WHATSAPP} className={`${styles.btn} ${styles.btnGreen} ${styles.navCta}`}>Pedir orçamento</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <h1 className={styles.heroTitle}>Seu equipamento só é consertado depois do laudo.</h1>
            <p className={styles.heroText}>
              Reparo de PCs, notebooks e placas de vídeo com diagnóstico em bancada, orçamento aprovado por você e garantia por escrito. Também ensinamos a técnica em cursos presenciais.
            </p>
            <div className={styles.actions}>
              <a href={WHATSAPP} className={`${styles.btn} ${styles.btnGold}`}>Pedir orçamento no WhatsApp</a>
              <a href="#cursos" className={`${styles.btn} ${styles.btnGhost}`}>Ver cursos</a>
            </div>
            <dl className={styles.stats}>
              <div><dt>Garantia no serviço</dt><dd>90 dias</dd></div>
              <div><dt>Laudo técnico</dt><dd>Sempre incluso</dd></div>
            </dl>
          </div>
          <Board />
        </div>
      </section>

      <section id="servicos" className={`${styles.wrap} ${styles.section}`}>
        <h2 className={styles.h2}>O que consertamos na bancada</h2>
        <div className={styles.services}>
          {services.map((s) => (
            <article key={s.t} className={`${styles.card} ${s.big ? styles.cardBig : ""}`}>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="como-funciona" className={`${styles.process} ${styles.section}`}>
        <div className={styles.wrap}>
          <h2 className={styles.h2}>Do balcão à entrega, em quatro etapas</h2>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li key={s.t} className={styles.step}>
                <span className={styles.stepNum}>Etapa {i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="cursos" className={`${styles.wrap} ${styles.section}`}>
        <h2 className={styles.h2}>Aprenda reparo de placas com quem trabalha nelas todos os dias</h2>
        <div className={styles.courses}>
          {courses.map((c) => (
            <article key={c.level} className={`${styles.course} ${c.featured ? styles.courseFeatured : ""}`}>
              <span className={styles.level}>{c.level}</span>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
              <ul className={styles.list}>
                {c.items.map((it) => (
                  <li key={it}>
                    <svg viewBox="0 0 20 20" className={styles.check} aria-hidden="true">
                      <path d="M4 10.5l4 4 8-9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {it}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP} className={`${styles.btn} ${c.featured ? styles.btnGold : styles.btnGreen}`}>Ver próximas turmas</a>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className={styles.contact}>
        <div className={styles.contactGrid}>
          <div>
            <h2>Descreva o defeito e receba um retorno no mesmo dia</h2>
            <a href={WHATSAPP} className={`${styles.btn} ${styles.btnGold}`}>Chamar no WhatsApp</a>
          </div>
          <address className={styles.address}>
            <p>Rua Exemplo, 123, Centro, Recife, PE</p>
            <p>Segunda a sexta, 8h às 18h</p>
            <p>Sábado, 8h às 12h</p>
            <p>(81) 99999-9999</p>
          </address>
        </div>
        <p className={styles.copy}>© 2026 Bancada Tech</p>
      </section>
    </div>
  );
}