import { MovieCard } from "@/entities/movie/card/ui";
import { discordPresenceMutation } from "@/shared/api/warpspeed";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const FavoritesPage = () => {
  useEffect(() => {
    discordPresenceMutation.start({
      text: "In the FavoritesPage",
      details: "Want something",
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <MovieCard
        name="Inception"
        description="A thief who enters the dreams of others to steal secrets from their subconscious."
        year="2020"
        country="USA"
        rating={5.5}
        coverUrl="https://i1.sndcdn.com/artworks-000262659968-e5dcg1-t500x500.jpg"
      />
    </motion.div>
  );
};
