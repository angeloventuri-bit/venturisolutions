export function CornerBrackets({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Top Left */}
      <svg className="absolute top-0 left-0 w-16 h-16 text-primary/30" viewBox="0 0 64 64">
        <path d="M 0 16 L 0 0 L 16 0" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M 0 20 L 0 0 L 20 0" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>

      {/* Top Right */}
      <svg className="absolute top-0 right-0 w-16 h-16 text-primary/30" viewBox="0 0 64 64">
        <path d="M 64 16 L 64 0 L 48 0" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M 64 20 L 64 0 L 44 0" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>

      {/* Bottom Left */}
      <svg className="absolute bottom-0 left-0 w-16 h-16 text-primary/30" viewBox="0 0 64 64">
        <path d="M 0 48 L 0 64 L 16 64" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M 0 44 L 0 64 L 20 64" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>

      {/* Bottom Right */}
      <svg className="absolute bottom-0 right-0 w-16 h-16 text-primary/30" viewBox="0 0 64 64">
        <path d="M 64 48 L 64 64 L 48 64" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M 64 44 L 64 64 L 44 64" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
  );
}
