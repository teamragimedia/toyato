import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.98,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Apple-like easing
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.98,
    filter: "blur(6px)",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
