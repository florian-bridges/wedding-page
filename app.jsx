// Main app — Viktoria & Florian
const { useState: useState_app, useEffect: useEffect_app } = React;

function App() {
  const [tweaks, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);
  const [lang, setLangState] = useState_app(tweaks.lang || 'de');
  const [active, setActive] = useState_app('top');

  useEffect_app(() => {
    setLangState(tweaks.lang || 'de');
    document.documentElement.lang = tweaks.lang || 'de';
  }, [tweaks.lang]);

  useEffect_app(() => {
    document.body.dataset.palette = tweaks.palette || 'romantic';
    document.body.dataset.fontset = tweaks.fontset || 'serif-script';
  }, [tweaks.palette, tweaks.fontset]);

  // Scroll spy
  useEffect_app(() => {
    const sectionIds = ['top', 'story', 'info', 'timeline', 'travel', 'dresscode', 'gallery', 'faq', 'rsvp'];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const t = window.CONTENT[lang] || window.CONTENT.de;

  const setLang = (l) => {
    setLangState(l);
    setTweak('lang', l);
  };

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang} active={active} />
      <Hero t={t} />
      <Story t={t} />
      <Info t={t} />
      <Timeline t={t} />
      <Travel t={t} />
      <Dresscode t={t} />
      <Gallery t={t} />
      <FAQ t={t} />
      <RSVP t={t} />
      <Footer t={t} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Sprache / Language">
          <TweakRadio
            label="Language"
            value={tweaks.lang}
            onChange={(v) => { setTweak('lang', v); }}
            options={[
              { value: 'de', label: 'Deutsch' },
              { value: 'en', label: 'English' },
            ]}
          />
        </TweakSection>

        <TweakSection title="Palette">
          <TweakSelect
            label="Color palette"
            value={tweaks.palette}
            onChange={(v) => setTweak('palette', v)}
            options={[
              { value: 'romantic', label: 'Romantic & airy (default)' },
              { value: 'tuscan', label: 'Rustic Tuscan' },
              { value: 'ivory', label: 'Editorial ivory & gold' },
              { value: 'mediterranean', label: 'Sun-faded Mediterranean' },
            ]}
          />
        </TweakSection>

        <TweakSection title="Typography">
          <TweakSelect
            label="Font pairing"
            value={tweaks.fontset}
            onChange={(v) => setTweak('fontset', v)}
            options={[
              { value: 'serif-script', label: 'Cormorant + Italianno (default)' },
              { value: 'infant', label: 'Cormorant Infant + Italianno' },
              { value: 'modern', label: 'Cormorant only (no script)' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>

      <style>{`
        @media (max-width: 900px) {
          .navlinks { display: none !important; }
          .story-grid, .timeline-grid, .dress-grid, .travel-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .info-grid {
            grid-template-columns: 1fr !important;
          }
          .info-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--line);
          }
          .info-grid > div:last-child { border-bottom: none; }
          .gallery-grid > div {
            grid-column: span 12 !important;
            grid-row: auto !important;
            margin-top: 0 !important;
          }
        }
      `}</style>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
