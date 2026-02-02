export function CircuitBoard() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          {/* Horizontal Lines */}
          <line x1="0" y1="20" x2="60" y2="20" stroke="#ef4444" strokeWidth="1" />
          <line x1="80" y1="20" x2="140" y2="20" stroke="#ef4444" strokeWidth="1" />
          <line x1="160" y1="20" x2="200" y2="20" stroke="#ef4444" strokeWidth="1" />
          
          <line x1="20" y1="80" x2="80" y2="80" stroke="#ef4444" strokeWidth="1" />
          <line x1="100" y1="80" x2="180" y2="80" stroke="#ef4444" strokeWidth="1" />
          
          <line x1="0" y1="140" x2="40" y2="140" stroke="#ef4444" strokeWidth="1" />
          <line x1="60" y1="140" x2="120" y2="140" stroke="#ef4444" strokeWidth="1" />
          <line x1="140" y1="140" x2="200" y2="140" stroke="#ef4444" strokeWidth="1" />
          
          {/* Vertical Lines */}
          <line x1="60" y1="0" x2="60" y2="60" stroke="#ef4444" strokeWidth="1" />
          <line x1="60" y1="80" x2="60" y2="140" stroke="#ef4444" strokeWidth="1" />
          <line x1="60" y1="160" x2="60" y2="200" stroke="#ef4444" strokeWidth="1" />
          
          <line x1="140" y1="20" x2="140" y2="80" stroke="#ef4444" strokeWidth="1" />
          <line x1="140" y1="100" x2="140" y2="180" stroke="#ef4444" strokeWidth="1" />
          
          {/* Circuit Nodes */}
          <circle cx="60" cy="20" r="3" fill="#ef4444" />
          <circle cx="140" cy="20" r="3" fill="#ef4444" />
          <circle cx="80" cy="80" r="3" fill="#ef4444" />
          <circle cx="60" cy="140" r="3" fill="#ef4444" />
          <circle cx="140" cy="140" r="3" fill="#ef4444" />
          
          {/* Small rectangles (chips) */}
          <rect x="55" y="75" width="10" height="10" fill="none" stroke="#ef4444" strokeWidth="1" />
          <rect x="135" y="15" width="10" height="10" fill="none" stroke="#ef4444" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}
