// Sections — Hero, Story, Info, Timeline, Travel, Dress, Gallery, FAQ, Footer

// ——— HERO ———
function Hero({ t }) {
  const { d, h, m, s } = useCountdown('2027-09-04T16:00:00+02:00');
  return (
    <section id="top" style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '120px 28px 60px',
      background: `
        radial-gradient(ellipse at 20% 10%, var(--rose-tint) 0%, transparent 55%),
        radial-gradient(ellipse at 90% 90%, var(--sage-tint) 0%, transparent 55%),
        var(--cream)
      `,
      overflow: 'hidden',
    }}>
      {/* corner sprigs */}
      <div className="hero-sprig" style={{ position: 'absolute', top: 100, left: 40, opacity: 0.4, color: 'var(--sage-deep)', transform: 'rotate(-15deg)' }}>
        <Sprig size={140} />
      </div>
      <div className="hero-sprig" style={{ position: 'absolute', bottom: 80, right: 40, opacity: 0.4, color: 'var(--sage-deep)', transform: 'rotate(165deg)' }}>
        <Sprig size={140} />
      </div>

      <div className="mono" style={{ color: 'var(--sage-deep)', marginBottom: 30, letterSpacing: '0.3em' }}>
        ✣ &nbsp; {t.hero.eyebrow} &nbsp; ✣
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h1 style={{
          fontFamily: 'var(--script)',
          fontWeight: 400,
          fontSize: 'clamp(80px, 14vw, 220px)',
          lineHeight: 0.85,
          color: 'var(--ink)',
          letterSpacing: '-0.01em',
        }}>
          <span style={{ display: 'block' }}>Viktoria</span>
          <span style={{
            display: 'block',
            fontSize: '0.42em',
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--rose-deep)',
            margin: '0.1em 0',
            letterSpacing: '0.04em',
          }}>{t.hero.and}</span>
          <span style={{ display: 'block' }}>Florian</span>
        </h1>
      </div>

      <div style={{ marginTop: 50, textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 'clamp(22px, 2.4vw, 30px)', color: 'var(--ink)', fontWeight: 400,
          letterSpacing: '0.02em',
        }}>{t.hero.date}</div>
        <div style={{
          marginTop: 14,
          width: 60, height: 1, background: 'var(--rose)', margin: '14px auto', opacity: 0.5,
        }} />
        <div className="mono" style={{ color: 'var(--ink-soft)', fontSize: 11.5 }}>{t.hero.place}</div>
      </div>

      {/* Countdown */}
      <div style={{
        marginTop: 70, display: 'flex', gap: 0,
        position: 'relative', zIndex: 2,
        border: '1px solid var(--line)',
        background: 'rgba(250,246,239,0.5)',
        backdropFilter: 'blur(4px)',
      }}>
        {[
          { v: d, l: t.countdown.d },
          { v: h, l: t.countdown.h },
          { v: m, l: t.countdown.m },
          { v: s, l: t.countdown.s },
        ].map((u, i) => (
          <div key={i} style={{
            padding: '18px 24px', minWidth: 88, textAlign: 'center',
            borderRight: i < 3 ? '1px solid var(--line)' : 'none',
          }}>
            <div style={{
              fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 400,
              color: 'var(--ink)', lineHeight: 1, fontVariantNumeric: 'tabular-nums',
            }}>{String(u.v).padStart(2, '0')}</div>
            <div className="mono" style={{ marginTop: 8, color: 'var(--ink-soft)', fontSize: 9.5 }}>{u.l}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 28, position: 'relative', zIndex: 2 }}>
        <span className="mono" style={{ color: 'var(--ink-soft)', fontSize: 10, letterSpacing: '0.3em' }}>
          {t.hero.sub}
        </span>
      </div>

      {/* scroll cue */}
      <div style={{
        position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: 'var(--ink-soft)', opacity: 0.6,
      }}>
        <div style={{ width: 1, height: 36, background: 'currentColor' }} />
      </div>
    </section>
  );
}

// ——— STORY ———
function Story({ t }) {
  const s = t.story;
  return (
    <Section id="story" kicker={s.kicker} title={s.title} narrow>
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <p style={{
          fontFamily: 'var(--script)', fontSize: 'clamp(36px, 4.5vw, 56px)',
          color: 'var(--rose-deep)', lineHeight: 1.1,
        }}>{s.lead}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 50, alignItems: 'start', marginTop: 48 }} className="story-grid">
        <div style={{ position: 'sticky', top: 100 }}>
          <img src="photos/about_us_1.jpg" alt="Unsere Geschichte" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block' }} />
          <div style={{ height: 18 }} />
          <img src="photos/about_us_2.jpg" alt="Unsere Geschichte" style={{ width: '100%', aspectRatio: '3 / 4', objectFit: 'cover', display: 'block' }} />
        </div>

        <div style={{ paddingTop: 12 }}>
          {s.body.map((p, i) => (
            <p key={i} style={{
              fontSize: 20, lineHeight: 1.65, color: 'var(--ink)',
              marginBottom: 24,
              textWrap: 'pretty',
            }}>{p}</p>
          ))}

          <blockquote style={{
            margin: '40px 0',
            padding: '24px 0 24px 24px',
            borderLeft: '2px solid var(--rose)',
            fontFamily: 'var(--serif)', fontStyle: 'italic',
            fontSize: 24, lineHeight: 1.4, color: 'var(--rose-deep)',
          }}>
            <div>{s.pull1}</div>
            <div style={{ marginTop: 8 }}>{s.pull2}</div>
          </blockquote>

          <p style={{
            fontSize: 20, lineHeight: 1.65, color: 'var(--ink)',
            textWrap: 'pretty',
          }}>{s.close}</p>

          <div style={{ marginTop: 32, fontFamily: 'var(--script)', fontSize: 44, color: 'var(--ink)', lineHeight: 1 }}>
            — {s.sign}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ——— INFO ———
function Info({ t }) {
  const i = t.info;
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Villa+Finetta+Via+Monteblano+79+Salsomaggiore+Terme";
  return (
    <Section id="info" kicker={i.kicker} title={i.title} dark>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 50, opacity: 0.7 }}>
        <Divider />
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
        background: 'var(--cream)',
        border: '1px solid var(--line)',
      }} className="info-grid">
        {i.cards.map((c, idx) => (
          <div key={idx} style={{
            padding: '44px 32px',
            borderRight: idx < 2 ? '1px solid var(--line)' : 'none',
            textAlign: 'center',
            position: 'relative',
          }}>
            <div className="mono" style={{ color: 'var(--rose-deep)', marginBottom: 16 }}>{c.label}</div>
            <div style={{
              fontFamily: 'var(--serif)', fontSize: 26, lineHeight: 1.25,
              color: 'var(--ink)', marginBottom: 14, fontWeight: 500,
            }}>{c.main}</div>
            <div style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic',
              fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.5,
              whiteSpace: 'pre-line',
            }}>{c.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 36 }}>
        <a href={mapsUrl} target="_blank" rel="noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '12px 24px',
          border: '1px solid var(--ink)',
          color: 'var(--ink)',
          fontFamily: 'var(--sans)', fontSize: 12,
          letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500,
          transition: 'all 0.25s ease',
        }} onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--cream)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}>
          ↗ &nbsp; {i.mapHint}
        </a>
      </div>
    </Section>
  );
}

// ——— TIMELINE ———
function Timeline({ t }) {
  const tl = t.timeline;
  const Day = ({ title, events, accent }) => (
    <div>
      <div style={{
        fontFamily: 'var(--script)', fontSize: 56, color: accent, lineHeight: 0.9, marginBottom: 8,
      }}>{title.split('·')[0]}</div>
      <div className="mono" style={{ color: 'var(--ink-soft)', marginBottom: 36, fontSize: 11 }}>
        {title.split('·')[1]?.trim()}
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 90, top: 6, bottom: 6,
          width: 1, background: 'var(--line)',
        }} className="timeline-line" />
        {events.map((e, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '90px 1fr',
            gap: 28, paddingBottom: 32, position: 'relative',
          }} className="timeline-row">
            <div style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic',
              fontSize: 17, color: 'var(--rose-deep)', textAlign: 'right',
              paddingTop: 4, fontWeight: 500,
            }}>{e.t}</div>
            <div style={{ position: 'relative', paddingLeft: 28 }}>
              <span style={{
                position: 'absolute', left: -5, top: 10,
                width: 9, height: 9, borderRadius: '50%',
                background: accent, border: '2px solid var(--cream)',
                boxShadow: '0 0 0 1px var(--line)',
              }} />
              <div style={{
                fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--ink)',
                marginBottom: 6, fontWeight: 500,
              }}>{e.h}</div>
              <div style={{
                fontSize: 16.5, color: 'var(--ink-soft)', lineHeight: 1.55,
                fontStyle: 'italic',
                textWrap: 'pretty',
              }}>{e.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Section id="timeline" kicker={tl.kicker} title={tl.title}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
        marginTop: 30,
      }} className="timeline-grid">
        <Day title={tl.sat} events={tl.events.sat} accent="var(--rose-deep)" />
        <Day title={tl.sun} events={tl.events.sun} accent="var(--sage-deep)" />
      </div>
    </Section>
  );
}

// ——— TRAVEL ———
function Travel({ t }) {
  const tr = t.travel;
  const icons = {
    0: <path d="M2 14 L18 6 L19 9 L8 14 L11 16 L13 14 L14 14.5 L12.5 17 L18 17 L18 18 L2 18 Z" />,
    1: <><circle cx="6" cy="14" r="2" /><circle cx="14" cy="14" r="2" /><path d="M3 14 L4 9 L13 9 L17 14 M5 14 L13 14" /></>,
    2: <><rect x="4" y="3" width="12" height="14" rx="1.5" /><circle cx="7" cy="14" r="1" /><circle cx="13" cy="14" r="1" /><path d="M5 7 L15 7 M5 11 L15 11" /></>,
    3: <><path d="M3 17 L17 17 M5 17 L5 9 L10 5 L15 9 L15 17 M8 17 L8 12 L12 12 L12 17" /></>,
  };
  return (
    <Section id="travel" kicker={tr.kicker} title={tr.title} dark>
      <p style={{
        textAlign: 'center', maxWidth: 640, margin: '0 auto 60px',
        fontSize: 19, fontStyle: 'italic', color: 'var(--ink-soft)',
        textWrap: 'pretty', lineHeight: 1.55,
      }}>{tr.lead}</p>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28,
      }} className="travel-grid">
        {tr.cards.map((c, i) => (
          <div key={i} style={{
            background: 'var(--cream)',
            border: '1px solid var(--line)',
            padding: '36px 32px',
            display: 'grid', gridTemplateColumns: '52px 1fr', gap: 22,
            alignItems: 'start',
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: 'var(--sage-tint)',
              border: '1px solid var(--sage)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--sage-deep)',
            }}>
              <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                {icons[i]}
              </svg>
            </div>
            <div>
              <h3 style={{
                fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500,
                color: 'var(--ink)', marginBottom: 10,
              }}>{c.h}</h3>
              <p style={{
                fontSize: 16.5, color: 'var(--ink-soft)', lineHeight: 1.6,
                fontStyle: 'italic', textWrap: 'pretty',
              }}>{c.b}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ——— DRESS CODE ———
function Dresscode({ t }) {
  const d = t.dresscode;
  const swatches = ['#f3ede2', '#e8ede0', '#a8b59a', '#f1dedd', '#c89594', '#b29467'];
  return (
    <Section id="dresscode" kicker={d.kicker} title={d.title}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 70, alignItems: 'center' }} className="dress-grid">
        <div>
          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic',
            fontSize: 22, lineHeight: 1.55, color: 'var(--ink)',
            marginBottom: 36, textWrap: 'pretty',
          }}>{d.lead}</p>

          <div style={{ display: 'flex', gap: 8, marginBottom: 36 }}>
            {swatches.map((c, i) => (
              <div key={i} style={{
                width: 56, height: 56, borderRadius: '50%',
                background: c,
                border: '1px solid var(--line)',
              }} title={c} />
            ))}
          </div>

          <p style={{
            fontFamily: 'var(--script)', fontSize: 32,
            color: 'var(--rose-deep)', lineHeight: 1.2,
          }}>{d.foot}</p>
        </div>

        <div style={{ display: 'grid', gap: 20 }}>
          <div style={{
            background: 'var(--sage-tint)',
            padding: '28px 30px',
            border: '1px solid var(--sage)',
          }}>
            <div className="mono" style={{ color: 'var(--sage-deep)', marginBottom: 14 }}>✓ &nbsp; {d.doTitle}</div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {d.do.map((x, i) => (
                <li key={i} style={{
                  padding: '8px 0', borderBottom: i < d.do.length - 1 ? '1px dashed var(--sage)' : 'none',
                  fontSize: 17, color: 'var(--ink)',
                }}>— {x}</li>
              ))}
            </ul>
          </div>
          <div style={{
            background: 'var(--rose-tint)',
            padding: '28px 30px',
            border: '1px solid var(--rose)',
          }}>
            <div className="mono" style={{ color: 'var(--rose-deep)', marginBottom: 14 }}>✕ &nbsp; {d.dontTitle}</div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {d.dont.map((x, i) => (
                <li key={i} style={{
                  padding: '8px 0', borderBottom: i < d.dont.length - 1 ? '1px dashed var(--rose)' : 'none',
                  fontSize: 17, color: 'var(--ink)',
                }}>— {x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ——— GALLERY ———
function Gallery({ t }) {
  const g = t.gallery;
  const photos = [
    // Row 1 — Italy & romance
    { src: 'photos/foto_7_1.jpg', ratio: '4 / 5', col: 'span 4', mt: 0  },
    { src: 'photos/foto_1.jpg',   ratio: '3 / 4', col: 'span 4', mt: 30 },
    { src: 'photos/foto_12.jpg',  ratio: '3 / 4', col: 'span 4', mt: 0  },
    // Row 2 — Adventures
    { src: 'photos/foto_9.jpg',   ratio: '1 / 1', col: 'span 5', mt: 0,  pos: 'bottom' },
    { src: 'photos/foto_5.JPG',   ratio: '2 / 3', col: 'span 3', mt: 30 },
    { src: 'photos/foto_4.jpg',   ratio: '3 / 4', col: 'span 4', mt: 0  },
    // Row 3 — Fun & playful
    { src: 'photos/foto_8.jpg',   ratio: '3 / 2', col: 'span 5', mt: 0 },
    { src: 'photos/foto_3.jpg',   ratio: '3 / 4', col: 'span 3', mt: 0 },
    { src: 'photos/foto_2.jpg',   ratio: '4 / 3', col: 'span 4', mt: 0 },
    // Row 4 — Warm close
    { src: 'photos/foto_10.jpg',  ratio: '4 / 3', col: 'span 4', mt: 0 },
    { src: 'photos/foto_11.jpg',  ratio: '3 / 4', col: 'span 4', mt: 0 },
    { src: 'photos/foto_6.jpg',   ratio: '4 / 3', col: 'span 4', mt: 0 },
  ];
  return (
    <Section id="gallery" kicker={g.kicker} title={g.title} dark>
      <p style={{
        textAlign: 'center', maxWidth: 600, margin: '0 auto 60px',
        fontFamily: 'var(--serif)', fontStyle: 'italic',
        fontSize: 19, color: 'var(--ink-soft)',
      }}>{g.lead}</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 18,
      }} className="gallery-grid">
        {photos.map((p, i) => (
          <div key={i} style={{ gridColumn: p.col, marginTop: p.mt }}>
            <img
              src={p.src}
              alt={`Foto ${i + 1}`}
              style={{ width: '100%', aspectRatio: p.ratio, objectFit: 'cover', display: 'block', objectPosition: p.pos || 'center' }}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

// ——— FAQ ———
function FAQ({ t }) {
  const f = t.faq;
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq" kicker={f.kicker} title={f.title} narrow>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 50, opacity: 0.65 }}>
        <Divider />
      </div>
      <div>
        {f.items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{
              borderBottom: '1px solid var(--line)',
            }}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                width: '100%', textAlign: 'left',
                background: 'none', border: 'none',
                padding: '26px 4px',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 24,
                fontFamily: 'var(--serif)',
                color: 'var(--ink)',
              }}>
                <span style={{
                  fontSize: 22,
                  fontWeight: isOpen ? 500 : 400,
                  fontStyle: isOpen ? 'normal' : 'italic',
                  color: isOpen ? 'var(--rose-deep)' : 'var(--ink)',
                  transition: 'color 0.2s',
                }}>{it.q}</span>
                <span style={{
                  fontFamily: 'var(--script)',
                  fontSize: 32,
                  color: 'var(--rose)',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.3s ease',
                  lineHeight: 1, flexShrink: 0,
                }}>+</span>
              </button>
              <div style={{
                maxHeight: isOpen ? 400 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.4s ease, padding 0.3s ease',
                padding: isOpen ? '0 4px 30px' : '0 4px',
              }}>
                <p style={{
                  fontSize: 17.5, lineHeight: 1.65, color: 'var(--ink-soft)',
                  textWrap: 'pretty', maxWidth: '85%',
                }}>{it.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// ——— RSVP ———
function RSVP({ t }) {
  const r = t.rsvp;
  const [sat, setSat] = useState(null);
  const [sun, setSun] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    background: 'var(--cream)', border: '1px solid var(--line)',
    fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--ink)',
    outline: 'none', borderRadius: 0,
    transition: 'border-color 0.2s',
  };
  const labelStyle = {
    display: 'block', fontFamily: 'var(--sans)',
    fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'var(--ink-soft)', marginBottom: 8,
  };
  const AttendRadio = ({ value, set, yesLabel, noLabel }) => (
    <div style={{ display: 'flex', gap: 0 }}>
      {[{ v: 'yes', l: yesLabel }, { v: 'no', l: noLabel }].map(({ v, l }) => (
        <button key={v} type="button" onClick={() => set(v)} style={{
          flex: 1, padding: '11px 0', border: '1px solid var(--line)',
          marginLeft: v === 'no' ? -1 : 0,
          background: value === v ? (v === 'yes' ? 'var(--sage-tint)' : 'var(--rose-tint)') : 'var(--cream)',
          color: value === v ? 'var(--ink)' : 'var(--ink-soft)',
          fontFamily: 'var(--sans)', fontSize: 12, letterSpacing: '0.1em',
          textTransform: 'uppercase', cursor: 'pointer',
          transition: 'all 0.2s',
        }}>{l}</button>
      ))}
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.target);
    data.append('saturday', sat || 'not selected');
    data.append('sunday_brunch', sun || 'not selected');
    try {
      const res = await fetch('https://formspree.io/f/mgodvobr', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <Section id="rsvp" dark narrow>
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <div style={{ fontFamily: 'var(--script)', fontSize: 80, color: 'var(--rose-deep)', lineHeight: 1, marginBottom: 28 }}>♡</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 36, fontWeight: 400, marginBottom: 16 }}>{r.successTitle}</h2>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 19, color: 'var(--ink-soft)' }}>{r.successBody}</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="rsvp" kicker={r.kicker} title={r.title} dark narrow>
      <p style={{
        textAlign: 'center', fontFamily: 'var(--serif)', fontStyle: 'italic',
        fontSize: 19, color: 'var(--ink-soft)', marginBottom: 56, textWrap: 'pretty',
      }}>{r.lead}</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 560, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={labelStyle}>{r.name}</label>
            <input name="name" required placeholder={r.namePh}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--rose)'}
              onBlur={e => e.target.style.borderColor = 'var(--line)'} />
          </div>
          <div>
            <label style={labelStyle}>{r.email}</label>
            <input name="_replyto" type="email" required placeholder={r.emailPh}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--rose)'}
              onBlur={e => e.target.style.borderColor = 'var(--line)'} />
          </div>
        </div>

        <div style={{ display: 'grid', gap: 16 }}>
          <div>
            <label style={labelStyle}>{r.sat}</label>
            <AttendRadio value={sat} set={setSat} yesLabel={r.attending} noLabel={r.notAttending} />
          </div>
          <div>
            <label style={labelStyle}>{r.sun}</label>
            <AttendRadio value={sun} set={setSun} yesLabel={r.attending} noLabel={r.notAttending} />
          </div>
        </div>

        <div>
          <label style={labelStyle}>{r.children}</label>
          <input name="children" placeholder={r.childrenPh}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'var(--rose)'}
            onBlur={e => e.target.style.borderColor = 'var(--line)'} />
        </div>

        <div>
          <label style={labelStyle}>{r.dietary}</label>
          <input name="dietary" placeholder={r.dietaryPh}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'var(--rose)'}
            onBlur={e => e.target.style.borderColor = 'var(--line)'} />
        </div>

        <div>
          <label style={labelStyle}>{r.message}</label>
          <textarea name="message" placeholder={r.messagePh} rows={4}
            style={{ ...inputStyle, resize: 'vertical' }}
            onFocus={e => e.target.style.borderColor = 'var(--rose)'}
            onBlur={e => e.target.style.borderColor = 'var(--line)'} />
        </div>

        <div style={{ textAlign: 'center', paddingTop: 8 }}>
          <button type="submit" disabled={status === 'sending'} style={{
            padding: '14px 48px',
            background: 'var(--ink)', color: 'var(--cream)',
            border: 'none', cursor: 'pointer',
            fontFamily: 'var(--sans)', fontSize: 12,
            letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500,
            opacity: status === 'sending' ? 0.6 : 1,
            transition: 'opacity 0.2s',
          }}>{status === 'sending' ? '…' : r.submit}</button>
          {status === 'error' && (
            <p style={{ marginTop: 16, fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--rose-deep)' }}>
              Something went wrong — please try again or send us a message directly.
            </p>
          )}
        </div>

      </form>
    </Section>
  );
}

// ——— FOOTER ———
function Footer({ t }) {
  return (
    <footer style={{
      padding: '90px 28px 60px',
      textAlign: 'center',
      background: 'var(--cream)',
      borderTop: '1px solid var(--line)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40, opacity: 0.7 }}>
        <Divider ornament="✺" />
      </div>
      <p style={{
        fontFamily: 'var(--serif)', fontStyle: 'italic',
        fontSize: 20, color: 'var(--ink)', marginBottom: 16,
      }}>{t.foot.sign}</p>
      <p style={{
        fontFamily: 'var(--script)',
        fontSize: 80, lineHeight: 1, color: 'var(--rose-deep)',
        marginBottom: 28,
      }}>{t.foot.names}</p>
      <p className="mono" style={{ color: 'var(--ink-soft)', marginBottom: 30 }}>
        {t.foot.contact}
      </p>
      <div className="mono" style={{ color: 'var(--ink-soft)', opacity: 0.55, fontSize: 9.5 }}>
        Villa Finetta · 04—05.09.2027 · Salsomaggiore Terme · Italia
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, Story, Info, Timeline, Travel, Dresscode, Gallery, FAQ, RSVP, Footer });
