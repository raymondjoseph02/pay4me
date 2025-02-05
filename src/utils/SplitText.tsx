import { FC } from "react";
import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
}

const SplitText: FC<SplitTextProps> = ({ text }) => {
  const waveVariants = {
    initial: { opacity: 0, y: "100%" },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // Stagger effect
        duration: 0.26,
        ease: [0.22, 1, 0.36, 1], // Smooth bezier curve
      },
    }),
  };

  return (
    <motion.div className="overflow-hidden flex items-center justify-center">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="initial"
          whileInView="animate"
          variants={waveVariants}
          className="inline-block text-3xl font-semibold "
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;
