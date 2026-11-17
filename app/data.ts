// Nome da marca: altere só aqui e reflete em toda a página.
export const BRAND = "Bancada Tech";

// Ano do copyright.
export const COPYRIGHT_YEAR = new Date().getFullYear();

export const WHATSAPP = "https://wa.me/5581999999999?text=Olá! Quero um orçamento.";

export const services = [
  { t: "Placas de vídeo", d: "Reballing, troca de memórias VRAM, reparo de fase de energia e artefatos na tela.", big: true },
  { t: "Notebooks", d: "Não liga, não carrega, tela apagada, dobradiças, teclado e troca de display." },
  { t: "PCs e desktops", d: "Fontes, placas-mãe, upgrades, formatação e limpeza com troca de pasta térmica." },
  { t: "Placas-mãe", d: "Curto, BIOS corrompida e trilhas rompidas, com microsoldagem." },
  { t: "Equipamentos de informática", d: "Monitores, impressoras, nobreaks e periféricos." },
  { t: "Recuperação de dados", d: "Backup antes de qualquer procedimento que ofereça risco ao disco." },
];

export const steps = [
  { t: "Triagem", d: "Recebemos o equipamento, registramos o estado e abrimos a ordem de serviço." },
  { t: "Diagnóstico", d: "Medições na bancada e laudo por escrito, com a causa do defeito." },
  { t: "Orçamento", d: "Você aprova valor e prazo. Sem aprovação, nada é trocado." },
  { t: "Reparo e teste", d: "Conserto, teste de estresse e entrega com garantia." },
];

export const courses = [
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
