import styles from "./Board.module.css";

const dots: [number, number][] = [[40, 70], [40, 110], [40, 150], [440, 70], [440, 110], [440, 150], [220, 310], [260, 310], [240, 40]];

const traces = [
  "M40 70H150V120", "M40 110H110V160H150", "M40 150H80V210H150",
  "M440 70H330V120", "M440 110H370V160H330", "M440 150H400V210H330",
  "M150 260V310H220", "M330 260V310H260", "M240 40V120",
];

type Props = {
  /** Caminho da logomarca (ex.: "/logo.svg" na pasta public). Sem ele, aparece o texto "GPU". */
  logoSrc?: string;
  /** Texto alternativo da logo. */
  logoAlt?: string;
  /** Mostra a leitura de temperatura abaixo da logo. */
  showTemp?: boolean;
};

export default function Board({ logoSrc = "/logo.svg", logoAlt = "Logomarca", showTemp = true }: Props) {
  return (
    <svg viewBox="0 0 480 360" role="img" aria-label="Ilustração de uma placa de circuito com trilhas e chip central" className={styles.board}>
      <rect x="8" y="8" width="464" height="344" rx="14" fill="#14503C" stroke="#E0B040" strokeOpacity=".35" />

      <g className={styles.traceDim}>
        {traces.map((d) => <path key={d} d={d} />)}
      </g>
      <g className={styles.traceRun}>
        {traces.map((d) => <path key={d} d={d} />)}
      </g>

      {/* Chip */}
      <rect x="150" y="120" width="180" height="140" rx="8" fill="#0B1F1A" stroke="#E0B040" strokeWidth="2" />
      {/* Núcleo da GPU */}
      <rect x="170" y="140" width="140" height="100" rx="4" fill="none" stroke="#E0B040" strokeOpacity=".4" strokeDasharray="3 5" />

      {/* Área da logo: caixa 100x60 centrada em (240, 180) */}
      {logoSrc ? (
        <image
          href={logoSrc}
          x="190"
          y="150"
          width="100"
          height="60"
          preserveAspectRatio="xMidYMid meet"
          aria-label={logoAlt}
        />
      ) : (
        <text x="240" y="188" textAnchor="middle" fill="#E0B040" fontSize="22" fontWeight="600">GPU</text>
      )}

      {showTemp && (
        <text x="240" y="228" textAnchor="middle" fill="#E8EDEA" fontSize="11" opacity=".7">temperatura 62 °C</text>
      )}

      {dots.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#E0B040" />
      ))}
    </svg>
  );
}
