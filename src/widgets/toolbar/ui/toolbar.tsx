import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export const Toolbar = () => {
  return (
    <div className="flex items-center justify-between gap-4 w-full">
      <Input placeholder="Movie..." />
      <Button className="w-32">Search</Button>
    </div>
  );
};
