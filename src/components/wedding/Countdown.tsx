import { useEffect, useState } from "react";

function diff(target: Date) {
  const now = Date.now();
  const ms = Math.max(0, target.getTime() - now);
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms / 3600000) % 24);
  const minutes = Math.floor((ms / 60000) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown({ date }: { date: Date }) {
  const [time, setTime] = useState(() => diff(date));
  useEffect(() => {
    const id = setInterval(() => setTime(diff(date)), 1000);
    return () => clearInterval(id);
  }, [date]);

  const items = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {items.map((i) => (
        <div
          key={i.label}
          className="glass rounded-xl px-2 py-4 text-center"
        >
          <div className="font-display text-3xl sm:text-4xl text-primary tabular-nums">
            {String(i.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {i.label}
          </div>
        </div>
      ))}
    </div>
  );
}
