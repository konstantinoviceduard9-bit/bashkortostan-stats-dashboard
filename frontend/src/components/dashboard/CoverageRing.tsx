export function CoverageRing({
  filled,
  total,
  label,
}: {
  filled: number;
  total: number;
  label: string;
}) {
  const pct = total > 0 ? Math.round((filled / total) * 100) : 0;
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="coverage-ring" aria-label={`${label}: ${pct}%`}>
      <svg width="88" height="88" viewBox="0 0 88 88" className="-rotate-90">
        <circle cx="44" cy="44" r={radius} fill="none" stroke="rgba(100,116,139,0.15)" strokeWidth="8" />
        <circle
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          stroke="url(#coverageGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700"
        />
        <defs>
          <linearGradient id="coverageGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0077B6" />
            <stop offset="100%" stopColor="#1B5E3B" />
          </linearGradient>
        </defs>
      </svg>
      <div className="coverage-ring__center">
        <span className="coverage-ring__pct">{pct}%</span>
        <span className="coverage-ring__label">{label}</span>
      </div>
    </div>
  );
}
