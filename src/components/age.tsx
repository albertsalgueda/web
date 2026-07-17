"use client";

import { useEffect, useState } from "react";

const BORN_YEAR = 2000;
const BORN_MONTH = 0; // january
const BORN_DAY = 16;
const BORN = Date.UTC(BORN_YEAR, BORN_MONTH, BORN_DAY);
const YEAR = 365.2425 * 24 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;
const HOUR_MS = 60 * 60 * 1000;

function plural(n: number, unit: string) {
  return `${n} ${unit}${n === 1 ? "" : "s"}`;
}

function livedBreakdown(now: number) {
  const nowDate = new Date(now);
  const hadBirthdayThisYear =
    nowDate.getUTCMonth() > BORN_MONTH ||
    (nowDate.getUTCMonth() === BORN_MONTH && nowDate.getUTCDate() >= BORN_DAY);
  const years =
    nowDate.getUTCFullYear() - BORN_YEAR - (hadBirthdayThisYear ? 0 : 1);

  const lastBirthday = Date.UTC(
    BORN_YEAR + years,
    BORN_MONTH,
    BORN_DAY
  );
  const sinceBirthday = now - lastBirthday;
  const days = Math.floor(sinceBirthday / DAY_MS);
  const hours = (sinceBirthday - days * DAY_MS) / HOUR_MS;

  return {
    decades: Math.floor(years / 10),
    years: years % 10,
    days,
    hours,
  };
}

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

  const lived = (now - BORN) / YEAR;
  const { decades, years, days, hours } = livedBreakdown(now);

  return (
    <p
      className="cursor-default select-none font-mono text-base tracking-[0.08em] text-neutral-300 sm:text-lg"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerCancel={() => setHovered(false)}
      aria-label={hovered ? "time lived, broken down" : "age, in years"}
      suppressHydrationWarning
    >
      {hovered
        ? `${plural(decades, "decade")}, ${plural(years, "year")}, ${plural(days, "day")}, ${hours.toFixed(6)} hours lived`
        : lived.toFixed(20)}
    </p>
  );
}
