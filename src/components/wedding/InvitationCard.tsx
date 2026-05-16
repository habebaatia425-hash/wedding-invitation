import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import florals from "@/assets/florals.png";

export function InvitationCard({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ rotateX: -90, opacity: 0, y: -40 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformPerspective: 1200, transformOrigin: "top" }}
            className="relative w-full max-w-sm rounded-2xl bg-ivory shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] overflow-hidden border border-accent/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 z-10 rounded-full bg-background/70 p-1.5 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <img
              src={florals}
              alt=""
              aria-hidden
              className="absolute -top-6 -left-6 w-32 opacity-70 rotate-[-15deg] pointer-events-none"
              width={1024}
              height={1024}
              loading="lazy"
            />
            <img
              src={florals}
              alt=""
              aria-hidden
              className="absolute -bottom-8 -right-8 w-36 opacity-70 rotate-[160deg] pointer-events-none"
              width={1024}
              height={1024}
              loading="lazy"
            />

            <div className="relative px-8 py-12 text-center">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="font-script text-lg text-primary/70"
              >
                You are cordially invited
              </motion.p>
              <div className="divider-ornament my-5">
                <span className="text-xs tracking-[0.4em]">♥</span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="font-display text-3xl leading-tight text-foreground"
              >
                Ahmed
                <span className="block font-script text-2xl text-accent my-1">
                  &amp;
                </span>
                Heba
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="mt-6 text-sm leading-relaxed text-muted-foreground"
              >
                Together with their families, request the honor of your presence
                at the celebration of their love.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="mt-6 inline-block border-y border-accent/40 px-6 py-3"
              >
                <p className="font-display text-base tracking-widest text-primary">
                  SATURDAY · JUNE 14, 2026
                </p>
                <p className="text-xs tracking-[0.3em] text-muted-foreground mt-1">
                  FOUR O'CLOCK IN THE AFTERNOON
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
