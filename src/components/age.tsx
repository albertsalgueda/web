"use client";

import { useEffect, useState } from "react";

const BORN = Date.UTC(2000, 0, 16); // jan 16, 2000
const YEAR = 365.2425 * 24 * 60 * 60 * 1000;
const LIFESPAN = 90; // estimated departure at 90

export function Age() {
  const [now, setNow] = useState(() => Date.now());
  const [etd, setEtd] = useState(false);

  useEffect(() => {
    let frame: number;
    const tick = () => {
      setNow(Date.now());
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const lived = (now - BORN) / YEAR;
  const value = etd ? LIFESPAN - lived : lived;

  return (
    <p
      className="cursor-default select-none font-mono text-base tracking-[0.08em] text-neutral-300 sm:text-lg"
      onPointerEnter={() => setEtd(true)}
      onPointerLeave={() => setEtd(false)}
      onPointerCancel={() => setEtd(false)}
      aria-label={
        etd ? "estimated time of departure, in years" : "age, in years"
      }
      suppressHydrationWarning
    >
      {value.toFixed(20)}
      {etd && <span className="text-neutral-600">&nbsp;ETD</span>}
    </p>
  );
}
