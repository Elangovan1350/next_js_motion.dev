import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div>
      <motion.h1
        // animate={{ x: 100 }}
        transition={{
          duration: 0.2,

          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1 }}
        className="text-3xl font-bold underline text-center inline-block"
      >
        Hello world!
      </motion.h1>
    </div>
  );
}
