import { withProviders } from "@/app/providers";
import { AppRouter } from "./router";

const Core = () => {
  return <AppRouter />;
};

export default withProviders(Core);
