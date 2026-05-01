// Shared components for Viktoria & Florian
const { useState, useEffect, useRef, useMemo } = React;

// ——— Olive sprig (subtle, hand-drawn feel) ———
function Sprig({ size = 60, rotate = 0, color, style }) {
  const c = color || 'currentColor';
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 200 100" style={{ transform: `rotate(${rotate}deg)`, ...style }} fill="none" stroke={c} strokeWidth="1.1" strokeLinecap="round">
      <path d="M 10 50 Q 60 50 100 50 T 190 50" />
      <ellipse cx="40" cy="38" rx="10" ry="4" transform="rotate(-25 40 38)" fill={c} fillOpacity="0.18" />
      <ellipse cx="55" cy="62" rx="10" ry="4" transform="rotate(20 55 62)" fill={c} fillOpacity="0.18" />
      <ellipse cx="80" cy="36" rx="11" ry="4" transform="rotate(-22 80 36)" fill={c} fillOpacity="0.18" />
      <ellipse cx="100" cy="64" rx="11" ry="4" transform="rotate(22 100 64)" fill={c} fillOpacity="0.18" />
      <ellipse cx="125" cy="36" rx="10" ry="4" transform="rotate(-20 125 36)" fill={c} fillOpacity="0.18" />
      <ellipse cx="145" cy="62" rx="10" ry="4" transform="rotate(22 145 62)" fill={c} fillOpacity="0.18" />
      <ellipse cx="170" cy="40" rx="9" ry="3.5" transform="rotate(-18 170 40)" fill={c} fillOpacity="0.18" />
    </svg>
  );
}

// ——— Section divider with center ornament ———
function Divider({ ornament = "✺", color }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 18, padding: '0 0', color: color || 'var(--sage-deep)',
      opacity: 0.85,
    }}>
      <Sprig size={70} rotate={0} color="currentColor" />
      <span style={{ fontFamily: 'var(--script)', fontSize: 32, lineHeight: 1, color: 'var(--rose-deep)' }}>{ornament}</span>
      <Sprig size={70} rotate={180} color="currentColor" />
    </div>
  );
}

// ——— Photo placeholder ———
function PhotoPlaceholder({ caption, ratio = "4 / 5", tint = "sage", style, label }) {
  const tintMap = {
    sage: { bg: 'var(--sage-tint)', stripe: 'var(--sage)', ink: 'var(--sage-deep)' },
    rose: { bg: 'var(--rose-tint)', stripe: 'var(--rose)', ink: 'var(--rose-deep)' },
    cream: { bg: 'var(--cream-deep)', stripe: 'var(--gold)', ink: 'var(--ink-soft)' },
  };
  const t = tintMap[tint] || tintMap.sage;
  return (
    <figure style={{
      position: 'relative',
      aspectRatio: ratio,
      background: t.bg,
      backgroundImage: `repeating-linear-gradient(135deg, transparent 0 22px, rgba(0,0,0,0.025) 22px 23px)`,
      border: `1px solid ${t.stripe}`,
      borderRadius: 2,
      overflow: 'hidden',
      ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 12, border: `1px dashed ${t.stripe}`, opacity: 0.55,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 10, color: t.ink, textAlign: 'center', padding: 16,
      }}>
        <svg width="38" height="32" viewBox="0 0 48 40" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6">
          <rect x="2" y="6" width="44" height="32" rx="1.5" />
          <circle cx="14" cy="16" r="3" />
          <path d="M2 32 L18 20 L30 30 L38 24 L46 32" />
        </svg>
        <div className="mono" style={{ fontSize: 9.5, opacity: 0.75 }}>{label || "PHOTO"}</div>
      </div>
      {caption && (
        <figcaption style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          padding: '10px 14px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.04))',
        }}>
          <span className="mono" style={{ color: t.ink, fontSize: 10 }}>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}

// ——— Section wrapper ———
function Section({ id, kicker, title, children, dark, narrow, style }) {
  return (
    <section id={id} style={{
      padding: '120px 32px',
      background: dark ? 'var(--cream-deep)' : 'var(--cream)',
      position: 'relative',
      ...style,
    }}>
      <div style={{ maxWidth: narrow ? 760 : 1180, margin: '0 auto', position: 'relative' }}>
        {(kicker || title) && (
          <header style={{ textAlign: 'center', marginBottom: 60 }}>
            {kicker && <div className="mono" style={{ color: 'var(--sage-deep)', marginBottom: 18 }}>— {kicker} —</div>}
            {title && (
              <h2 style={{
                fontFamily: 'var(--serif)',
                fontWeight: 400,
                fontSize: 'clamp(40px, 5vw, 64px)',
                letterSpacing: '-0.01em',
                lineHeight: 1.05,
                color: 'var(--ink)',
              }}>{title}</h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

// ——— Countdown hook ———
function useCountdown(targetISO) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const target = new Date(targetISO).getTime();
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

// ——— Nav ———
function Nav({ t, lang, setLang, active }) {
  const items = [
    { id: 'story', label: t.nav.story },
    { id: 'info', label: t.nav.info },
    { id: 'timeline', label: t.nav.timeline },
    { id: 'travel', label: t.nav.travel },
    { id: 'dresscode', label: t.nav.dresscode },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'faq', label: t.nav.faq },
  ];
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? '12px 28px' : '20px 28px',
      background: scrolled ? 'rgba(250,246,239,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all 0.35s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 20,
    }}>
      <a href="#top" style={{ fontFamily: 'var(--script)', fontSize: 30, lineHeight: 1, color: 'var(--ink)' }}>
        V <span style={{ color: 'var(--rose)' }}>&amp;</span> F
      </a>
      <div style={{ display: 'flex', gap: 26, alignItems: 'center' }} className="navlinks">
        {items.map(it => (
          <a key={it.id} href={`#${it.id}`} style={{
            fontFamily: 'var(--sans)', fontSize: 12.5, letterSpacing: '0.06em',
            color: active === it.id ? 'var(--rose-deep)' : 'var(--ink-soft)',
            fontWeight: active === it.id ? 500 : 400,
            transition: 'color 0.2s',
            paddingBottom: 4,
            borderBottom: active === it.id ? '1px solid var(--rose)' : '1px solid transparent',
          }}>{it.label}</a>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 4, alignItems: 'center', fontFamily: 'var(--sans)', fontSize: 12 }}>
        {['de', 'en'].map(l => (
          <button key={l} onClick={() => setLang(l)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '6px 10px',
            color: lang === l ? 'var(--ink)' : 'var(--ink-soft)',
            fontWeight: lang === l ? 600 : 400,
            fontFamily: 'inherit', fontSize: 12,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            borderBottom: lang === l ? '1.5px solid var(--rose)' : '1.5px solid transparent',
          }}>{l}</button>
        ))}
      </div>
    </nav>
  );
}

Object.assign(window, { Sprig, Divider, PhotoPlaceholder, Section, useCountdown, Nav });
