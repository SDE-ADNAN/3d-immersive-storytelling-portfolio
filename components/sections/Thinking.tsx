export default function Thinking() {
  return (
    <section id="thinking" className="h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full px-6">
        <div className="glass p-6">
          <h2 className="text-2xl font-semibold">Thinking</h2>
          <p className="mt-2 text-sm text-neutral-300">Architecture diagram (static) — SSR vs CSR, editor, APIs, CI/CD.</p>

          <figure className="mt-6" aria-label="Architecture diagram mapping SSR and CSR boundaries">
            <svg viewBox="0 0 1000 480" width="100%" height="360" role="img">
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="rgba(255,255,255,0.7)" />
                </marker>
                <filter id="glassBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>

              {/* <!-- Background lanes --> */}
              <rect x="0" y="0" width="1000" height="480" fill="none" />

              {/* <!-- SSR Layer --> */}
              <g>
                <rect x="24" y="40" width="420" height="160" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
                <text x="36" y="72" fill="white" fontSize="16" fontWeight="600">SSR / Edge</text>
                <text x="36" y="96" fill="rgba(255,255,255,0.75)" fontSize="12">Rendering, SEO, initial payload</text>
                <rect x="36" y="112" width="160" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />
                <text x="48" y="148" fill="white" fontSize="12">CDN / Edge Cache</text>
                <rect x="212" y="112" width="188" height="64" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />
                <text x="224" y="148" fill="white" fontSize="12">Server Rendering</text>
              </g>

              {/* <!-- CSR Layer --> */}
              <g>
                <rect x="24" y="220" width="420" height="200" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
                <text x="36" y="252" fill="white" fontSize="16" fontWeight="600">CSR / Client</text>
                <text x="36" y="276" fill="rgba(255,255,255,0.75)" fontSize="12">Runtime interactions, editors, controls</text>
                <rect x="48" y="296" width="180" height="96" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />
                <text x="60" y="332" fill="white" fontSize="12">React / R3F Scene</text>
                <rect x="248" y="296" width="180" height="96" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />
                <text x="260" y="332" fill="white" fontSize="12">Konva Editor</text>
              </g>

              {/* <!-- API / Backend --> */}
              <g>
                <rect x="520" y="120" width="420" height="140" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
                <text x="540" y="152" fill="white" fontSize="16" fontWeight="600">APIs / Services</text>
                <text x="540" y="176" fill="rgba(255,255,255,0.75)" fontSize="12">Data services, Auth, Analytics, CI/CD</text>
                <rect x="540" y="196" width="180" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />
                <text x="560" y="232" fill="white" fontSize="12">Metrics / Logging</text>
              </g>

              {/* <!-- Connections --> */}
              <line x1="460" y1="160" x2="520" y2="160" stroke="rgba(255,255,255,0.4)" strokeWidth="2" markerEnd="url(#arrow)" />
              <line x1="460" y1="330" x2="520" y2="330" stroke="rgba(255,255,255,0.4)" strokeWidth="2" markerEnd="url(#arrow)" />
              <line x1="260" y1="176" x2="260" y2="296" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />

              {/* <!-- Notes --> */}
              <text x="520" y="280" fill="rgba(255,255,255,0.7)" fontSize="12">Decisions: Keep SSR for content-critical pages; use CSR for interactive editors.</text>
            </svg>
          </figure>
        </div>
      </div>
    </section>
  );
}
