import { motion } from "framer-motion";

const DEFAULTS = {
  initialY: 24,
  stagger: 0.08,
  duration: 0.65,
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = DEFAULTS.initialY,
  duration = DEFAULTS.duration,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = "",
  delay = 0,
  direction = "up", // up | left | right
  duration = DEFAULTS.duration,
  scaleFrom = 0.98,
}) {
  const axis = direction === "left" ? -24 : direction === "right" ? 24 : 0;
  const y = direction === "up" ? 18 : 0;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: axis,
        y,
        scale: scaleFrom,
        filter: "blur(6px)",
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className = "",
  stagger = DEFAULTS.stagger,
  delayChildren = 0,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: stagger, delayChildren }}
    >
      {children}
    </motion.div>
  );
}

export const staggerVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

