export function EnigmaIsotipo({ size = 40, variant = "dark", className = "" }) {
  const isDark = variant === "dark";
  const strokeColor = isDark ? "#f0f2f8" : "#0d0f18";
  const nodeColor = isDark ? "#a5b4fc" : "#6366f1";

  return (
    <svg width={size} height={size} viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={`ring-${variant}`} x1="0" y1="0" x2="68" y2="68" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isDark ? "#818cf8" : "#6366f1"} />
          <stop offset="100%" stopColor={isDark ? "#6366f1" : "#4f46e5"} />
        </linearGradient>
      </defs>
      <circle cx="34" cy="34" r="30" stroke={`url(#ring-${variant})`} strokeWidth="3.5" strokeLinecap="round" strokeDasharray="170 20" strokeDashoffset="-5" />
      <circle cx="34" cy="34" r="20" stroke={isDark ? "#818cf8" : "#6366f1"} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="108 18" strokeDashoffset="20" opacity={isDark ? "0.55" : "0.4"} />
      <line x1="26" y1="22" x2="40" y2="22" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="26" y1="34" x2="36" y2="34" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="26" y1="46" x2="40" y2="46" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="26" y1="22" x2="26" y2="46" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="58" cy="22" r="3" fill={nodeColor} />
    </svg>
  );
}

export function EnigmaLogotype({ variant = "dark", className = "" }) {
  const isDark = variant === "dark";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <EnigmaIsotipo size={36} variant={variant} />
      <div className="flex flex-col">
        <span className={`font-heading font-[800] text-lg leading-none tracking-tight uppercase ${isDark ? "text-off-white" : "text-void"}`}>
          Enigma
        </span>
        <span className={`font-mono text-[0.55rem] tracking-[0.22em] uppercase mt-0.5 ${isDark ? "text-indigo-light" : "text-indigo"}`}>
          Developers
        </span>
      </div>
    </div>
  );
}
