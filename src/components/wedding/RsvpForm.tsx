import { useState } from "react";
import { toast } from "sonner";

export function RsvpForm() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    guests: "1",
    attending: "yes",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you! Your RSVP has been received.");
      setForm({ name: "", guests: "1", attending: "yes", message: "" });
    }, 800);
  };

  const input =
    "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition";

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
          Full Name
        </label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={input}
          placeholder="Your name"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
            Guests
          </label>
          <select
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className={input}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
            Attending
          </label>
          <select
            value={form.attending}
            onChange={(e) => setForm({ ...form, attending: e.target.value })}
            className={input}
          >
            <option value="yes">Joyfully accept</option>
            <option value="no">Regretfully decline</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
          Message for the couple
        </label>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={input}
          placeholder="Share your wishes..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-primary text-primary-foreground py-3.5 text-sm tracking-[0.25em] uppercase font-medium hover:opacity-90 transition disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send RSVP"}
      </button>
    </form>
  );
}
