import { motion } from 'framer-motion';

// transition function to avoid reuse issues
const createVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const Transition = () => {
  return (
    <>
      {[['#2e2257', 30], ['#3b2d71', 20], ['#4b3792', 10]].map(([bg, z], i) => (
        <motion.div
          key={i}
          className={`fixed top-0 bottom-0 right-full w-screen h-screen z-${z} bg-[${bg}]`}
          variants={createVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
};

export default Transition;
