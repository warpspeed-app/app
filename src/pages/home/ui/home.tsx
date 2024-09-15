import { discordPresenceMutation } from "@/shared/api/warpspeed";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    discordPresenceMutation.start({
      text: "In the HomePage",
      details: "Want something",
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      test
    </motion.div>
  );
};
