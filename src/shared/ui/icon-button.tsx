import { CElement, FC } from "react";

export interface IconButtonProps {
  icon: CElement<any, any>;
}

export const IconButton: FC<IconButtonProps> = ({ icon }) => (
  <button className="flex items-center justify-center">{icon}</button>
);
