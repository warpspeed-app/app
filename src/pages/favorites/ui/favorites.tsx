import { discordPresenceMutation } from "@/shared/api/warpspeed";
import { useEffect } from "react";

export const FavoritesPage = () => {
  useEffect(() => {
    discordPresenceMutation.start({
      text: "In the FavoritesPage",
      details: "Want something",
    });
  }, []);

  return <h1>hi from favorites page</h1>;
};
