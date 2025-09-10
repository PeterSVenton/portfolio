import { motion } from "framer-motion";

export default function BurgerIcon({ open }: { open: boolean }) {

  const lineProps = {
    stroke: "black",
    strokeWidth: 2,
    strokeLinecap: "round" as const
  };

  return (
    <motion.svg
      width="24"
      height="20"
      initial={false}
      animate={open ? "open" : "closed"}
    >
      {/* top */}
      <motion.path
        {...lineProps}
        variants={{
          closed: { d: "M 3 4.5 L 21 4.5", translateY: 0, rotate: 0 },
          open:   { d: "M 4.5 4.5 L 19.5 19.5", translateY: 0, rotate: 0 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      />
      {/* middle */}
      <motion.path
        d="M 3 10 L 21 10"
        {...lineProps}
        variants={{
          closed: { opacity: 1 },
          open:   { opacity: 0 },
        }}
        transition={{ duration: 0.15 }}
      />
      {/* bottom */}
      <motion.path
        {...lineProps}
        variants={{
          closed: { d: "M 3 15.5 L 21 15.5", translateY: 0, rotate: 0 },
          open:   { d: "M 4.5 19.5 L 19.5 4.5", translateY: 0, rotate: 0 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      />
    </motion.svg>
  );
}