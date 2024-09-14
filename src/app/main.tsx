import React from "react";
import ReactDOM from "react-dom/client";
import "@/app/styles/global.css";
import Core from "@/app/core";
import { BrowserRouter } from "react-router-dom";
import { discordPresenceMutation } from "@/shared/api/warpspeed";

discordPresenceMutation.start({
  text: "Living in Warpspeed ;)",
  details: "Do something...",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Core />
    </BrowserRouter>
  </React.StrictMode>
);
