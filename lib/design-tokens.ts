// Design tokens helper — exposes CSS variable references for use in TS/JS
export const tokens = {
  colors: {
    bg900: 'var(--bg-900)',
    bg800: 'var(--bg-800)',
    textPrimary: 'var(--text-primary)'
  },
  glass: {
    bg: 'var(--glass-bg)',
    bgStrong: 'var(--glass-bg-strong)',
    border: 'var(--glass-border)',
    blur: 'var(--glass-blur)'
  },
  radius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)'
  },
  space: {
    1: 'var(--space-1)',
    2: 'var(--space-2)',
    3: 'var(--space-3)',
    4: 'var(--space-4)'
  },
  motion: {
    fast: 'var(--motion-duration-fast)',
    normal: 'var(--motion-duration)',
    slow: 'var(--motion-duration-slow)',
    ease: 'var(--motion-ease)'
  },
  z: {
    hero: 'var(--z-hero)',
    overlay: 'var(--z-overlay)'
  }
};

export function cssVar(name: string) {
  return `var(--${name})`;
}
