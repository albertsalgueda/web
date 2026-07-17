"use client";

import { useEffect, useState } from "react";

const BORN = Date.UTC(2000, 0, 16); // jan 16, 2000
const YEAR_MS = 365.2425 * 24 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

export function Age() {
  const [now, setNow] = useState(() => Date.now());
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let frame: number;
    const tick = () => {
      setNow(Date.now());
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const elapsed = now - BORN;
  const value = hovered ? elapsed / DAY_MS : elapsed / YEAR_MS;

  return (
    <p
      className="cursor-default select-none font-mono text-base tracking-[0.08em] text-neutral-300 sm:text-lg"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerCancel={() => setHovered(false)}
      aria-label={hovered ? "days lived" : "age, in years"}
      suppressHydrationWarning
    >
      {value.toFixed(20)}
      {hovered && <span className="text-neutral-600">&nbsp;days</span>}
    </p>
  );
}
