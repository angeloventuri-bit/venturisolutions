export function GridPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        }}
      />
      
      {/* Diagonal Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonal" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="100" y2="100" stroke="rgb(239, 68, 68)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal)" />
      </svg>
    </div>
  );
}
