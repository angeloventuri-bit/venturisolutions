export function HexagonPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
          <polygon
            points="50,0 93.3,25 93.3,62 50,87 6.7,62 6.7,25"
            fill="none"
            stroke="#ef4444"
            strokeWidth="0.5"
          />
          <polygon
            points="50,0 93.3,25 93.3,62 50,87 6.7,62 6.7,25"
            fill="none"
            stroke="#ef4444"
            strokeWidth="0.5"
            transform="translate(50, -43.5)"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  );
}
