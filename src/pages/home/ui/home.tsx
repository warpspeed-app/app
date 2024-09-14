import { discordPresenceMutation } from "@/shared/api/warpspeed";
import { useEffect } from "react";
import { useUnit } from "effector-react";

export const HomePage = () => {
  const discordPresence = useUnit(discordPresenceMutation.start);

  useEffect(() => {
    discordPresence({
      text: "In the HomePage",
      details: "Want something",
    });
  }, []);

  return <h1>hi from home page</h1>;
};
