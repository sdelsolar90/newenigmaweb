export function EnigmaIsotipo({ size = 40, variant = "dark", className = "" }) {
  const innerFill = variant === "light" ? "#F0EDE6" : variant === "mono" ? "#000000" : "#1C1C1E";

  const contacts = [0, 18, 36, 90, 108, 162, 180, 198, 216, 270, 288, 324, 342];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="60" cy="60" r="54" stroke="#F0EDE6" strokeWidth="3" fill="none" />
      <circle cx="60" cy="60" r="44" fill="#C44A20" />

      {contacts.map((angle) => (
        <rect
          key={angle}
          x="57.5"
          y="2"
          width="5"
          height="3"
          rx="1"
          fill="#F0EDE6"
          transform={`rotate(${angle} 60 60)`}
        />
      ))}

      <g transform="rotate(-60 60 60)">
        <rect x="58" y="8" width="4" height="14" rx="2" fill="#B8B0A4" />
        <polygon points="60,6 56,12 64,12" fill="#B8B0A4" />
      </g>

      <circle cx="60" cy="60" r="28" stroke="#F0EDE6" strokeWidth="2" fill={innerFill} />
      <circle cx="60" cy="60" r="11" fill="#C44A20" stroke="#F0EDE6" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="3" fill="#F0EDE6" />
      <line x1="57" y1="60" x2="63" y2="60" stroke={innerFill} strokeWidth="1" />
    </svg>
  );
}

export function EnigmaLogotype({ variant = "dark", className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <EnigmaIsotipo size={42} variant={variant} />
      <span className="w-px h-9 bg-line" />
      <div className="flex flex-col gap-0.5">
        <span className="font-body font-light text-base tracking-[0.42em] uppercase text-cream leading-none">
          Enigma
        </span>
        <span className="font-mono text-[0.5rem] tracking-[0.48em] uppercase text-cream2 opacity-40 leading-none">
          Developers
        </span>
      </div>
    </div>
  );
}
