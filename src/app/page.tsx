"use client";
// src/app/page.tsx
import { useEffect, useState } from 'react';

const everHeard = [
  'AI is going to take your job',
  "AI won&apos;t take your job but someone using AI will",
  "If you&apos;re not using AI to your advantage, you&apos;re not going to make it",
];
const neverHeard = [
  'API', 'n8n', 'MCP', 'RAG', 'Claude', 'Grok', 'webhook', 'Cursor', 'HuggingFace', 'OpenRouter',
];

export default function Home() {
  const [mode, setMode] = useState<'ever' | 'never'>('ever');
  const [everIdx, setEverIdx] = useState(0);
  const [neverIdx, setNeverIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (mode === 'ever') {
      interval = setInterval(() => {
        setEverIdx((i) => {
          const next = (i + 1) % everHeard.length;
          if (next === 0) {
            setMode('never');
            setAnimKey((k) => k + 1);
          } else {
            setAnimKey((k) => k + 1);
          }
          return next;
        });
      }, 5000);
    } else {
      interval = setInterval(() => {
        setNeverIdx((i) => {
          const next = (i + 1) % neverHeard.length;
          if (next === 0) {
            setMode('ever');
            setAnimKey((k) => k + 1);
          } else {
            setAnimKey((k) => k + 1);
          }
          return next;
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [mode]);

  // Animation: drop in from above
  // We'll use a key on the animated span to trigger re-mount and animation

  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 gap-12">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight max-w-3xl" style={{ fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif' }}>
        We help businesses harness the power of AI for automation, insights, and innovation.
      </h1>
      <div className="flex flex-col items-center justify-center w-full max-w-5xl">
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-x-4 gap-y-2 px-2 md:px-8">
          <span className="text-blue-700 font-semibold text-lg" style={{ fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif' }}>
            If you&apos;ve
          </span>
          <span className="inline-block relative min-w-[70px] h-12 align-middle">
            <span
              key={mode}
              className="absolute left-0 top-0 w-full h-full flex items-center justify-center transition-transform duration-500"
              style={{
                transform: 'translateY(-40px)',
                animation: 'dropIn 0.5s cubic-bezier(.68,-0.55,.27,1.55) forwards',
                fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif',
              }}
            >
              <span className={`px-6 py-2 rounded-full bg-blue-100 border border-blue-300 text-blue-800 font-bold text-lg shadow min-w-[60px] text-center`}>
                {mode === 'ever' ? 'ever' : 'never'}
              </span>
            </span>
          </span>
          <span className="text-blue-700 font-semibold text-lg" style={{ fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif' }}>
            heard
          </span>
          <span className="inline-block relative min-w-[220px] h-12 align-middle flex-1">
            <span
              key={animKey}
              className="absolute left-0 top-0 w-full h-full flex items-center justify-center transition-transform duration-500"
              style={{
                transform: 'translateY(-40px)',
                animation: 'dropIn 0.5s cubic-bezier(.68,-0.55,.27,1.55) forwards',
                fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif',
              }}
            >
              <span className={`px-8 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-900 font-bold text-lg shadow min-w-[200px] text-center whitespace-nowrap`}>
                {mode === 'ever' ? everHeard[everIdx] : neverHeard[neverIdx]}
              </span>
            </span>
          </span>
        </div>
      </div>
      <style jsx global>{`
        @keyframes dropIn {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}