import { discordPresenceMutation } from "@/shared/api/warpspeed";
import { useEffect } from "react";

export const SettingsPage = () => {
  useEffect(() => {
    discordPresenceMutation.start({
      text: "In the SettingsPage",
      details: "Change something",
    });
  }, []);

  return <h1>hi from settings page</h1>;
};
